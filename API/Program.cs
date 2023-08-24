using API.Errors;
using API.Middleware;
using Core.Interfaces;
using InfraStructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Validations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add DBContext
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//Inject the ProductRepository Service as scoped service, othr options could be transient and Singleton
// ProductRepository registered
builder.Services.AddScoped<IProductRepository, ProductRepository>();
// builder.Services.AddTransient<IProductRepository, ProductRepository>();
// builder.Services.AddSingleton<IProductRepository, ProductRepository>();

// GenericRepository registered 
builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.Configure <ApiBehaviorOptions>(options =>
    options.InvalidModelStateResponseFactory = actionContext => 
    {
        var errors = actionContext.ModelState
        .Where(w=> w.Value.Errors.Count>0)
        .SelectMany(m=> m.Value.Errors)
        .Select(s=> s.ErrorMessage).ToArray();

        var errorResponse = new ApiValidationErrorResponse
        {
            Errors = errors
        };

        return new BadRequestObjectResult(errorResponse);
    }
);
var app = builder.Build();

// Add Custom Exception Middleware
app.UseMiddleware<ExceptionMiddleware>();

// Add Error Handler Middleware
app.UseStatusCodePagesWithReExecute("/errors/{0}");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

// automate EF DB creation
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var context = services.GetRequiredService<StoreContext>();
var logger = services.GetRequiredService<ILogger<Program>>();
try
{
    await context.Database.MigrateAsync();
    await StoreContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    logger.LogError(ex, "An error occurred during migration");
}

app.Run();

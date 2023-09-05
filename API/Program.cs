using API.Extensions;
using API.Errors;
using API.Middleware;
using Core.Interfaces;
using InfraStructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Validations;
using Treblle.Net.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

//most of the code moved to the Extension method
builder.Services.AddApplicationServices(builder.Configuration);

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

//use CORS policy
app.UseCors("CorsPolicy");

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

//use Treblle
app.UseTreblle(useExceptionHandler: true);
app.MapGet("/", () => "Treblle is awesome").UseTreblle();

app.Run();

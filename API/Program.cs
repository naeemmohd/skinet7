using API.Extensions;
using API.Errors;
using API.Middleware;
using Core.Interfaces;
using InfraStructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Validations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using InfraStructure.Identity;
using Microsoft.AspNetCore.Identity;
using Core.Entities.Identity;
//using Treblle.Net.Core;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddDataAnnotationsLocalization();

//most of the code moved to the Extension method
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();
var app = builder.Build();

// Add Custom Exception Middleware
app.UseMiddleware<ExceptionMiddleware>();

// Add Error Handler Middleware
app.UseStatusCodePagesWithReExecute("/errors/{0}");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseDeveloperExceptionPage();
}

// app.UseHttpsRedirection();

app.UseSwaggerDocumentation();

app.UseStaticFiles();

//use CORS policy
app.UseCors("CorsPolicy");

// Adds the Microsoft.AspNetCore.Authentication.AuthenticationMiddleware to the specified IApplicationBuilder
app.UseAuthentication();
// Adds the Microsoft.AspNetCore.Authorization.AuthorizationMiddleware to the specified IApplicationBuilder
app.UseAuthorization();
//Adds endpoints for controller actions to the IEndpointRouteBuilder without specifying any routes
app.MapControllers();

// automate EF DB creation
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var context = services.GetRequiredService<StoreContext>();
var identityContext = services.GetRequiredService<AppIdentityDbContext>();
var userManager = services.GetRequiredService<UserManager<AppUser>>();
var logger = services.GetRequiredService<ILogger<Program>>();
try
{
	await context.Database.MigrateAsync();
	await StoreContextSeed.SeedAsync(context);

	await identityContext.Database.MigrateAsync();
	await AppIdentityDbContextSeed.SeedUsersAsync(userManager);
}
catch (Exception ex)
{
	logger.LogError(ex, "An error occurred during migration");
}

//use Treblle
//app.UseTreblle(useExceptionHandler: true);
//app.MapGet("/", () => "Treblle is awesome").UseTreblle();

app.Run();

using API.Errors;
using Core.Interfaces;
using InfraStructure.Data;
using Microsoft.AspNetCore.Connections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
//using Treblle.Net.Core;

namespace API.Extensions
{
	public static class ApplicationServicesExtensions
	{
		//extension method
		public static IServiceCollection AddApplicationServices(this IServiceCollection services,
			IConfiguration config)
		{

			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			services.AddEndpointsApiExplorer();
			services.AddSwaggerGen();

			//Add DBContext
			services.AddDbContext<StoreContext>(opt =>
			{
				opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
			});

			//Add Redis support
			services.AddSingleton<IConnectionMultiplexer>(c =>
				{
					var options = ConfigurationOptions.Parse(config.GetConnectionString("Redis"));
					return ConnectionMultiplexer.Connect(options);
				}
			);

			//Inject the BasketRepository Service as scoped service
			// BasketRepository registered
			services.AddScoped<IBasketRepository, BasketRepository>();
			//Inject the ProductRepository Service as scoped service, othr options could be transient and Singleton
			// ProductRepository registered
			services.AddScoped<IProductRepository, ProductRepository>();
			// services.AddTransient<IProductRepository, ProductRepository>();
			// services.AddSingleton<IProductRepository, ProductRepository>();

			// GenericRepository registered 
			services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
			services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
			services.Configure<ApiBehaviorOptions>(options =>
				options.InvalidModelStateResponseFactory = actionContext =>
				{
					var errors = actionContext.ModelState
					.Where(w => w.Value.Errors.Count > 0)
					.SelectMany(m => m.Value.Errors)
					.Select(s => s.ErrorMessage).ToArray();

					var errorResponse = new ApiValidationErrorResponse
					{
						Errors = errors
					};

					return new BadRequestObjectResult(errorResponse);
				}
			);

			// add CORS policy 
			services.AddCors(opt =>
			{
				opt.AddPolicy("CorsPolicy", policy =>
				{
					policy.AllowAnyHeader()
						.AllowAnyMethod()
						.WithOrigins("https://localhost:4200");
				});
			});

			//add Treblle API Monitoring
			//services.AddTreblle(
			//config["Treblle:ApiKey"],
    		//config["Treblle:ProjectId"]);
			
			return services;
		}
	}
}
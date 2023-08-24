using API.Errors;
using Core.Interfaces;
using InfraStructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        //Inject the ProductRepository Service as scoped service, othr options could be transient and Singleton
        // ProductRepository registered
        services.AddScoped<IProductRepository, ProductRepository>();
        // services.AddTransient<IProductRepository, ProductRepository>();
        // services.AddSingleton<IProductRepository, ProductRepository>();

        // GenericRepository registered 
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.Configure <ApiBehaviorOptions>(options =>
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

            return services;
        }
    }
}
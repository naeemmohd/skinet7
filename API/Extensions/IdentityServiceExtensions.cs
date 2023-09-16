using Core.Identity;
using InfraStructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class IdentityServiceExtensions
    {
        // Extension Method to extend IServiceCollection
        public static IServiceCollection AddIdentityServices(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.AddDbContext<AppIdentityDbContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("IdentityConnection"));
            });

            //Adds and configures the identity system for the specified User type
            services.AddIdentityCore<AppUser>(opt =>
            {
                // add identity options here e.g.
                // opt.Password.RequireDigit = true;
                // opt.Password.RequireUppercase = true;
            })
            // Adds an Entity Framework implementation of identity information stores
            .AddEntityFrameworkStores<AppIdentityDbContext>()
            // Adds a SignInManager for the IdentityBuilder.UserType
            .AddSignInManager<SignInManager<AppUser>>();

            // Registers services required by authentication services. 
            services.AddAuthentication();
            // Adds authorization policy services to the specified IServiceCollection.
            services.AddAuthorization();

            return services;
        }
    }
}
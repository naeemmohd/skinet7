using Core.Identity;
using Microsoft.AspNetCore.Identity;

namespace InfraStructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                // A test AppUser object
                var user = new AppUser
                {
                    DisplayName = "Test Naeem",
                    Email = "testNaeem@best.com",
                    UserName = "testNaeem@best.com",
                    Address = new Address{
                        FirstName = "Test First Naeem",
                        LastName = "Test Last Naeem",
                        Street = "123 Test Drive",
                        City = "Frisco",
                        State = "TX",
                        ZipCode = "75035"
                    }
                };
                //create the AppUser with strong password
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}
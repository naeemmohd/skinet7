using System.Security.Claims;
using Core.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtensions
    {
        public static async Task<AppUser> FindUserByClaimsPrincipalWithAddress(this UserManager<AppUser> userManager,
            ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);
            return await userManager.Users
                .Include(x => x.Address)
                .FirstOrDefaultAsync(x => x.Email == email);
        }
        public static async Task<AppUser> FindUserByClaimsPrincipal(this UserManager<AppUser> userManager,
            ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);
            return await userManager.Users
                .FirstOrDefaultAsync(x => x.Email == email);
        }
    }
    
}
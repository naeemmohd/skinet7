using API.Dtos;
using API.Errors;
using Core.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            //check user name by Email
            var user = await _userManager.FindByEmailAsync(loginDto.Email);
            // if null, user is nnauthorized
            if(user == null) return Unauthorized(new ApiResponse(401));
            //sign in using the user and password
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);
            //if failed, user user is unauthorized
            if(!result.Succeeded) return Unauthorized(new ApiResponse(401));
            //if suceeded, return authorized info
            return new UserDto{
                Email = user.Email,
                Token = "THis will be user token",
                DisplayName = user.DisplayName
            };
        }

    }
}
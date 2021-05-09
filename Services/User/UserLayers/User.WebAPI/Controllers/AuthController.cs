using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User.Business.Abstract;
using User.Entities.Dtos;

namespace User.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {


        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("Register")]
        public ActionResult Register([FromBody] RegisterDto registerUser)
        {
            var result = _authService.Register(registerUser);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result);

        }

        [HttpPost]
        [Route("Login")]
        public ActionResult Login([FromBody]LoginDto loginrUser)
        {

            var loginResult = _authService.Login(loginrUser);

            if (loginResult.Success)
            {
                return Ok(loginResult.Data);
            }

            return BadRequest(loginResult.Message);
        }






    }
}
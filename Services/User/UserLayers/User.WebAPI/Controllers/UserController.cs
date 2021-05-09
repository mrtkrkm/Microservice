using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User.Business.Abstract;
using User.Entities;

namespace User.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly IUserService _userservice;

        public UserController(IUserService userService)
        {
            _userservice = userService;
        }

        [HttpGet]
        [Route("Getbyid/{user_id}")]
        public ActionResult getuser(int user_id)
        {
            var result = _userservice.GetUserById(user_id);

            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("GetbyMail/{email}")]
        public ActionResult getuser(string email)
        {
            var result = _userservice.GetUserByEmail(email);

            if (result != null)
            {
                return Ok(result);
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("/add")]
        public ActionResult AddUser(UserInfo user)
        {
            var result = _userservice.AddUser(user);

            if(!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        [HttpPut]
        [Route("/update")]
        public ActionResult UpdateUser(UserInfo user)
        {
            var result = _userservice.UpdateUser(user);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }
    }
}
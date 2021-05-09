using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities.Dtos
{
    public class RegisterDto:IEntity
    {
        public string Email { get; set; }

        public string Password { get; set; }

        public string Password1 { get; set; }

        public string UserName { get; set; }
    }
}

using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities.Dtos
{
    public class LoginDto:IEntity
    {
        public string Email { get; set; }

        public string Password { get; set; }
    }
}

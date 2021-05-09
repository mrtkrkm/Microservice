using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Dtos
{
    public class UserDto : IDto
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
    }
}

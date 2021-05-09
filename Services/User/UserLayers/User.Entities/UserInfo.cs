using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities
{
    public class UserInfo:IEntity
    {
        
        public int id { get; set; }
        public string email { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public string username { get; set; }

        public byte [] passwordHash { get; set; }

        public byte [] passwordSalt { get; set; }
    }
}

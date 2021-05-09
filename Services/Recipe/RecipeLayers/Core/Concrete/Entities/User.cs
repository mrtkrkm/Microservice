using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities
{
   public class User : BaseEntity<Guid>, IEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string UserName { get; set; }
        public string EMail { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

    }
}

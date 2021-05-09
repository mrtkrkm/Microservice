using Core.Concrete.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities;

namespace User.DAL.Concrete.EntityFramework
{
    public class UserContext:DbContext
    {
        //public UserContext(DbContextOptions<UserContext> options) : base(options)
        //{

        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
              optionsBuilder.UseSqlServer(@"Server=user_db;Database=UserDb;user id=sa ;password=MyPassword0");
             //optionsBuilder.UseSqlServer(@"Server=localhost;Database=UserDb;user id=sa ;password=MyPassword0");
        }


        public DbSet<UserInfo> UserInfo { get; set; }

        public DbSet<OperationClaim> OperationClaims { get; set; }

        public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
    }

  
}

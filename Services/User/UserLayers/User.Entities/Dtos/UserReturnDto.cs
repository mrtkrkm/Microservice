﻿using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities.Dtos
{
    public class UserReturnDto:IEntity
    {
        public int id { get; set; }
        public string email { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public string username { get; set; }

    }
}

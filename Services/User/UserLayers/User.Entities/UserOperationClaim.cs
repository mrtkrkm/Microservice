﻿using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities
{
    public class UserOperationClaim:IEntity
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int OperationClaimId { get; set; }
    }
}

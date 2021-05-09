using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities
{
    public class UserOperationClaims : BaseEntity<int>, IEntity
    {
        public Guid UserId { get; set; }
        public int OperationClaimId { get; set; }
    }
}

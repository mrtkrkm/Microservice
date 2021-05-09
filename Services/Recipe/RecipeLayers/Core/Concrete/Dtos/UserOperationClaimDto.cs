using Core.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Dtos
{
    public class UserOperationClaimDto : IDto
    {
        public int ClaimId { get; set; }
        public string ClaimName { get; set; }
    }
}

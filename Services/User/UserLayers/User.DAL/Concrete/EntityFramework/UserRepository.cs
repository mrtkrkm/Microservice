using Core.DAL.EntityFramework;
using System;
using System.Collections.Generic;
using System.Text;
using User.DAL.Abstract;
using User.DAL.Concrete.EntityFramework;
using User.Entities;
using System.Linq;
using Core.Concrete.Entities;
using Core.Concrete.Dtos;

namespace User.DAL.Concrete
{
    public class UserRepository : EfEntityRepositoryBase<UserInfo, UserContext>, IUserDal
    {
        public List<UserOperationClaimDto> GetClaims(UserInfo user)
        {
           using(var context=new UserContext())
           {
                var result = from operationClaim in context.OperationClaims
                             join UserOperationClaim in context.UserOperationClaims
                             on operationClaim.Id equals UserOperationClaim.OperationClaimId
                             where UserOperationClaim.UserId == user.id
                             select new UserOperationClaimDto { ClaimId = operationClaim.Id, ClaimName = operationClaim.Name };

                         return result.ToList();
            }
        }

      
    }
}

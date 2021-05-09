using Core.Concrete.Dtos;
using Core.Concrete.Entities;
using Core.DAL;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities;

namespace User.DAL.Abstract
{
    public interface IUserDal : IEntityRepository<UserInfo>
    {
        List<UserOperationClaimDto> GetClaims(UserInfo user);
    }
    
}

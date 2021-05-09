using Core.Abstract;
using Core.Concrete.Dtos;
using Core.Concrete.Entities;
using Core.Concrete.Entities.MongoEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Utilities.Security.Common
{
    public interface ITokenHelper
    {
        AccessToken CreateToken(int Id, string Email, List<UserOperationClaimDto> claims);

    }
}

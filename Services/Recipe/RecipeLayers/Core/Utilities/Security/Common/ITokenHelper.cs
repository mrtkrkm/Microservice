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
        AccessToken CreateToken(User user, List<UserOperationClaimDto> claims);
        AccessToken CreateToken(int kullaniciId, string email, string adiSoyadi);

        AccessToken CreateToken(MUser muser, List<MOperationClaim> mclaims);
    }
}

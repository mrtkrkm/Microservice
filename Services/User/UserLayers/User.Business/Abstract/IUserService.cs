using Core.Concrete.Dtos;
using Core.Concrete.Entities;
using Core.Utilities.Results.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities;

namespace User.Business.Abstract
{
    public interface IUserService
    {
        IDataResult<UserInfo> GetUserById(int Id);

        IDataResult<UserInfo> GetUserByEmail(string email);

        bool IsUserExist(string email);

        IDataResult<List<UserOperationClaimDto>> GetOperationClaim(UserInfo user);

        IDataResult<UserInfo> AddUser(UserInfo user);

        IDataResult<UserInfo> UpdateUser(UserInfo user);

    }
}

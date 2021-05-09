using Core.Utilities.Results.Concrete;
using Core.Utilities.Results.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using User.Business.Abstract;
using User.DAL.Abstract;
using User.Entities;
using Core.Concrete.Entities;
using Core.Concrete.Dtos;

namespace User.Business.Concrete
{
    public class UserManager : IUserService
    {
        private readonly IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }
        public bool IsUserExist(string email)
        {
            var result = _userDal.Get(n => n.email == email);

            if(result!=null)
            {
                return true;
            }
            return false;
        }
      
        public IDataResult<UserInfo> GetUserByEmail(string email)
        {
            var user = _userDal.Get(u => u.email == email);

            if(user!=null)
            {
                return new SuccessDataResult<UserInfo>(user);
            }

            return new ErrorDataResult<UserInfo>(user);

        }

        public IDataResult<UserInfo> GetUserById(int Id)
        {
            var user = _userDal.Get(u => u.id == Id);

            return new SuccessDataResult<UserInfo>(user);
        }

        public IDataResult<List<UserOperationClaimDto>> GetOperationClaim(UserInfo user)
        {
            var claims = _userDal.GetClaims(user);


            return new SuccessDataResult<List<UserOperationClaimDto>>(claims);
        }


        public IDataResult<UserInfo> AddUser(UserInfo user)
        {

            try
            {
                _userDal.Add(user);
                return new SuccessDataResult<UserInfo>(user,"User sucessfully added");
            }
            catch
            {
                return new ErrorDataResult<UserInfo>(user);
            }

        }

        public IDataResult<UserInfo> UpdateUser(UserInfo user)
        {
            try
            {
                _userDal.Update(user);
                return new SuccessDataResult<UserInfo>(user, "User sucessfully added");
            }
            catch
            {
                return new ErrorDataResult<UserInfo>(user, "An error occured");
            }
        }
    }
}

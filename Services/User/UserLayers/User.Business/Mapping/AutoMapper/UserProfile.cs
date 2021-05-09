using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using User.Entities;
using User.Entities.Dtos;

namespace User.Business.Mapping.AutoMapper
{
    class UserProfile:Profile
    {

        public UserProfile()
        {
            CreateMap<UserInfo, RegisterDto>().ReverseMap();
            CreateMap<UserInfo, UserReturnDto>().ReverseMap();
        }
    }
}

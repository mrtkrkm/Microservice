using Core.Abstract;
using Core.Utilities.Security.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace User.Entities.Dtos
{

    public class LoginAnswerDto:IEntity
    {

        public int Id { get; set; }

        public string Name { get; set; }

        public string userName { get; set; }

        public AccessToken Token { get; set; }


    }
}

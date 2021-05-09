using Core.DAL;
using Recipe.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.DAL.Abstract
{
    public interface IRecipeDal: IMongoRepository<RecipeInfo>
    {
    }
}

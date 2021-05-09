using Core.DAL.MongoDB.Abstract;
using Core.DAL.MongoDB.Concrete;
using Recipe.DAL.Abstract;
using Recipe.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.DAL.Concrete.Mongo
{
    public class MRecipeRepository: MongoRepositoryBase<RecipeInfo>, IRecipeDal
    {
        public MRecipeRepository(IMongoDbSettings settings) : base(settings)
        {

        }
    }
}

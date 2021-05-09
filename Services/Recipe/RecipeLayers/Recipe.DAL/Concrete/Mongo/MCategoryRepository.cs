using Core.DAL.MongoDB.Abstract;
using Core.DAL.MongoDB.Concrete;
using Recipe.DAL.Abstract;
using Recipe.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.DAL.Concrete.Mongo
{
    public class MCategoryRepository : MongoRepositoryBase<Category>, ICategoryDal
    {
        public MCategoryRepository(IMongoDbSettings settings) : base(settings)
        {

        }
    }
}

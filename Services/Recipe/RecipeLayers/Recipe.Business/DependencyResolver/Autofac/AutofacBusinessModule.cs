using Autofac;
using Core.Utilities.ElasticSearch;
using Recipe.Business.Abstract;
using Recipe.Business.Concrete;
using Recipe.DAL.Abstract;
using Recipe.DAL.Concrete.Mongo;
using System;
using System.Collections.Generic;
using System.Text;

namespace Recipe.Business.DependencyResolver.Autofac
{
    public class AutofacBusinessModule:Module
    {

        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<RecipeManager>().As<IRecipeService>().SingleInstance();
            builder.RegisterType<MRecipeRepository>().As<IRecipeDal>().SingleInstance();
            builder.RegisterType<SearchManager>().As<ISearchService>().SingleInstance();

            builder.RegisterType<ElasticSearchManager>().As<IElasticSearch>();


        }
    }
}

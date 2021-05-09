using Core.Utilities.ElasticSearch;
using Core.Utilities.ElasticSearch.Models;
using Core.Utilities.Results.Concrete;
using Core.Utilities.Results.Interfaces;
using Recipe.Business.Abstract;
using Recipe.DAL.Abstract;
using Recipe.Entities.Concrete;
using Recipe.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Recipe.Business.Concrete
{
    public class SearchManager : ISearchService
    {
        private readonly IElasticSearch _elasticSearch;
        private readonly string _indexName = "recipemicro_index";
        private readonly IRecipeDal _recipeDal;

        public SearchManager(IElasticSearch elasticSearch, IRecipeDal recipeDal)
        {
            _elasticSearch = elasticSearch;
            _recipeDal=recipeDal;
        }

        public async void createIndex(string index_name, string aliasname)
        {
            IndexModel index_model= new IndexModel
            {
                IndexName = index_name,
                AliasName = aliasname
            };

            await _elasticSearch.CreateNewIndexAsync(index_model);
        }

        public async Task<IDataResult<IEnumerable<RecipeInfo>>> GetByField(string field, string value)
        {
            var list = await _elasticSearch.GetSearchByField<RecipeInfo>(new SearchByFieldParameters()
            {
                IndexName = _indexName,
                From = 0,
                Size = 24,
                FieldName = field,
                Value = value
            });

            var res = list.Select(p => p.Item).ToList();

            return new SuccessDataResult<List<RecipeInfo>>(res);
        }
        public async Task<IResult> CreateElasticIndex()
        {

            createIndex(_indexName, _indexName);

            var all_items = _recipeDal.FilterBy(_ => true).ToList();


            var result = _elasticSearch.InsertManyWithBulkAll<RecipeInfo>(_indexName, all_items.ToArray());

            //var result = await _elasticsearch.InsertManyAsync(_indexName, all_items.ToArray());
            //var index_list = _elasticsearch.GetIndexList();


            //string a = "yeye";
            return new SuccessResult();
        }

        public async Task<IResult> Add(RecipeInfo recipe)
        {
            var result = _elasticSearch.InsertAsync(new ElasticSearchInsertUpdateModel()
            {
                IndexName = _indexName,
                Item = recipe
            });

            return new SuccessResult();
        }

        public async Task<IResult> Delete(string recipeId)
        {
            var result =await GetById(recipeId);

            var Id = result.Data.ElasticId;

            var res=await _elasticSearch.DeleteByElasticIdAsync(new ElasticSearchModel()
            {

                ElasticId = Id,
                IndexName=_indexName
            });

            return new SuccessResult();
        }

        public async Task<IDataResult<ElasticSearchGetModel<RecipeInfo>>> GetById(string Id)
        {
            var result = await _elasticSearch.GetSearchByField<RecipeInfo>(new SearchByFieldParameters()
            {

                IndexName = _indexName,
                FieldName = "objectId.keyword",
                Value = Id
            });

            return new SuccessDataResult<ElasticSearchGetModel<RecipeInfo>>(result[0]);
        }

        public async Task<IDataResult<IEnumerable<ElasticSearchGetModel<RecipeInfo>>>> GetByFields(SearchDto searchValues)
        {
            string Field = searchValues.FieldName + ".keyword";
            var result = await _elasticSearch.GetByTerms<RecipeInfo>(new SearchByTermsParameters()
            {
                IndexName = _indexName,
                Terms = searchValues.Values,
                FieldName = Field
            });

            return new SuccessDataResult<List<ElasticSearchGetModel<RecipeInfo>>>(result);
        }

        public async Task<IDataResult<IEnumerable<ElasticSearchGetModel<RecipeInfo>>>> GetByName(string Name)
        {
            var result = await _elasticSearch.GetSearchByField<RecipeInfo>(new SearchByFieldParameters()
            {
                IndexName = _indexName,
                Value=Name,
                FieldName = "title"
            });

            return new SuccessDataResult<List<ElasticSearchGetModel<RecipeInfo>>>(result);
        }
    }
}
     


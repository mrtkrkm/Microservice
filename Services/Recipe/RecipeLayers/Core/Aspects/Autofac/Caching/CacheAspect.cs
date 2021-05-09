using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using Core.Utilities.Interceptors;
using Core.CrossCuttingConcerns.Caching;
using Core.Utilities.IoC;
using Castle.DynamicProxy;
using System.Collections;
using Core.Concrete.Entities;

namespace Core.Aspects.Autofac.Caching
{
    public class CacheAspect :  MethodInterception
    {
        private int _duration;
        private ICacheManager _cacheManager;
        private Type _cacheType;

        public CacheAspect(int duration = 60)
        {
            _duration = duration;
            _cacheManager = ServiceTool.ServiceProvider.GetService<ICacheManager>();
        }

        public CacheAspect(Type Cachetype, int duration = 60) :this(duration)
        {
            _cacheType = Cachetype;

        }


        public override void Intercept(IInvocation invocation)
        {
            

            var methodName = string.Format($"{invocation.Method.ReflectedType.FullName}.{invocation.Method.Name}");
            var arguments = invocation.Arguments.ToList();
            var key = $"{methodName}({string.Join(",", arguments.Select(x => x?.ToString() ?? "<Null>"))})";

            if (_cacheManager.IsAdd(key))
            {
                var objType = _cacheType.GetGenericArguments()[0];

                ///var db = _cacheManager.Get<IEnumerable<DocumentDbEntity>>(key);

                
                invocation.ReturnValue= _cacheManager.Get(key);
                //invocation.ReturnValue = _cacheManager.Get(key);


                //Type listType = typeof(List<>).MakeGenericType(new[] { _cacheType });
                //IList list = (IList)Activator.CreateInstance(listType);




                //invocation.ReturnValue = _cacheManager.Get < IEnumerable < typeof(5)>> (key);

                //invocation.ReturnValue=((IEnumerable)_cacheManager.Get(key)).Cast<object>();
                //var output= ((IEnumerable)invocation.ReturnValue).Cast<object>();
                //var type = invocation.ReturnValue.GetType();
                return;
            }

            invocation.Proceed();
            _cacheManager.Add(key, invocation.ReturnValue, _duration);
        }
    }
}

using ServiceStack.Redis;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json;

namespace Core.CrossCuttingConcerns.Caching.Redis
{
    public class RedisCacheManager : ICacheManager
    {
        private readonly RedisEndpoint _redisEndpoint;

        private void RedisInvoker(Action<RedisClient> redisAction)
        {
            using (var client = new RedisClient(_redisEndpoint))
            {
                redisAction.Invoke(client);
            }
        }

        public RedisCacheManager()
        {
            _redisEndpoint = new RedisEndpoint("localhost", 6379);
        }

        public T Get<T>(string key)
        {
            //var client = new RedisClient(_redisEndpoint);
            //var result = client.Get(key);
            //var result = 
            var result= default(T);
            RedisInvoker(x => { result = x.Get<T>(key); });

            //var data = JsonSerializer.Deserialize<T>(result);

            return result;
        }

        public object Get(string key)
        {
            var result = default(object);
            RedisInvoker(x => { result = x.Get<object>(key); });
            return result;
        }

        public void Add(string key, object data, int duration)
        {
            RedisInvoker(x => x.Add(key, data, TimeSpan.FromMinutes(duration)));
        }

        public void Add<T>(string key, T data, int duration)
        {
            var json_data = JsonSerializer.Serialize(data);

            RedisInvoker(x => x.Add(key, json_data, TimeSpan.FromMinutes(duration)));
        }

        public void Add(string key, object data)
        {
            RedisInvoker(x => x.Add(key, data));
        }

        public bool IsAdd(string key)
        {
            var isAdded = false;
            RedisInvoker(x => isAdded = x.ContainsKey(key));
            return isAdded;
        }

        public void Remove(string key)
        {
            RedisInvoker(x => x.Remove(key));
        }

        public void RemoveByPattern(string pattern)
        {
            RedisInvoker(x => x.RemoveByPattern(pattern));
        }

        public void Clear()
        {
            RedisInvoker(x => x.FlushAll());
        }
    }
}

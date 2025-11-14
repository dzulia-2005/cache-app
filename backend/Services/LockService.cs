using StackExchange.Redis;

namespace backend.Services;

public class LockService
{
    private readonly IDatabase _redis;

    public LockService(IConnectionMultiplexer multiplexer)
    {
        _redis = multiplexer.GetDatabase();
    }

    public async Task<bool> AcquireLockAsync(string key,TimeSpan expiry)
    {
        return await _redis.StringSetAsync(key, "1", expiry,When.NotExists);
    }

    public async Task ReleaseLockAsync(string key)
    {
        await _redis.KeyDeleteAsync(key);
    }
}
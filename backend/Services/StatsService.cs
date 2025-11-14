using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services;

public class StatsService
{
    private const string CACHE_KEY = "stats:data";
    private readonly string LOCK_KEY ="stats:lock";

    private readonly ApplicationDbContext _dbContext;
    private readonly CacheService _cacheService;
    private readonly LockService _lockService;
    
    public StatsService(
        ApplicationDbContext db,
        CacheService cacheService,
        LockService lockService
        )
    {
        _dbContext = db;
        _cacheService = cacheService;
        _lockService = lockService;
    }

    public async Task<Stats?> GetStatsAsync()
    {
        var cached = await _cacheService.GetAsync<Stats>(CACHE_KEY);
        if (cached != null)
        {
            return cached;
        }
        
        var hasLock = await _lockService.AcquireLockAsync(LOCK_KEY,TimeSpan.FromSeconds(5));
        if (!hasLock)
        {
            var stale = await _cacheService.GetAsync<Stats>(CACHE_KEY);
            if (stale!=null)
            {
                return stale;
            }
        }

        return await _dbContext.Stats.FirstOrDefaultAsync();

        var stats = await _dbContext.Stats.FirstOrDefaultAsync();
        if (stats!=null)
        {
            await _cacheService.SetAsync(CACHE_KEY, stats);
        }

        await _lockService.ReleaseLockAsync(LOCK_KEY);
        return stats;
    }
}
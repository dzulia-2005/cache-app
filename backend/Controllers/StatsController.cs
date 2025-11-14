using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("api/stats")]
public class StatsController:ControllerBase
{
    private readonly StatsService _stats;

    public StatsController(StatsService stats)
    {
        _stats = stats;
    }

    [HttpGet("get")]
    public async Task<IActionResult> GetStats()
    {
        var data = await _stats.GetStatsAsync();
        if(data == null)
        {
            return NotFound(new {error = "No Stats Found"});
        }

        return Ok(data);
    }
}
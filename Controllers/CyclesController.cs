using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Wol.Models;
using Wol.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Wol.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class CyclesController : ControllerBase
  {
    private readonly CyclesService _cs;
    public CyclesController(CyclesService cs)
    {
      _cs = cs;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Cycle>> Get()
    {
      try
      {
        return Ok(_cs.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Cycle> Post([FromBody] Cycle newCycle)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newCycle.UserId = userId;
        return Ok(_cs.Create(newCycle));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    [HttpDelete("{id}")]
    [Authorize]
    public ActionResult<string> Delete(string id)
    {
      try
      {
        var userClaim = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        var userId = userClaim.Value;
        return Ok(_cs.Delete(userId));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

  }
}
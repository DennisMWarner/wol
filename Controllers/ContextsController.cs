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
  public class ContextsController : ControllerBase
  {
    private readonly ContextsService _cs;
    public ContextsController(ContextsService cs)
    {
      _cs = cs;
    }
    [HttpGet("{id}")]
    public ActionResult<IEnumerable<Context>> Get()
    {
      var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
      try
      {
        return Ok(_cs.Get(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Exercise> Post([FromBody] Context newContext)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newContext.UserId = userId;
        return Ok(_cs.Create(newContext));
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
        return Ok(_cs.Delete(userId, id));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

  }
}
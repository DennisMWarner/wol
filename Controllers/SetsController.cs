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
  public class SetsController : ControllerBase
  {
    private readonly SetsService _ss;
    public SetsController(SetsService ss)
    {
      _ss = ss;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Set>> Get()
    {
      try
      {
        return Ok(_ss.Get());
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Set> Post([FromBody] Set newSet)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newSet.UserId = userId;
        return Ok(_ss.Create(newSet));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}
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
  public class MuscleGroupsController : ControllerBase
  {
    private readonly MuscleGroupsService _mgs;
    public MuscleGroupsController(MuscleGroupsService mgs)
    {
      _mgs = mgs;
    }
    [HttpGet]
    public ActionResult<IEnumerable<MuscleGroup>> Get()
    {
      var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
      try
      {
        return Ok(_mgs.Get(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<MuscleGroup> Post([FromBody] MuscleGroup newMuscleGroup)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newMuscleGroup.UserId = userId;
        return Ok(_mgs.Create(newMuscleGroup));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }

  }
}
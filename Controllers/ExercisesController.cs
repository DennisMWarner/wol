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
  public class ExercisesController : ControllerBase
  {
    private readonly ExercisesService _es;
    public ExercisesController(ExercisesService es)
    {
      _es = es;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Exercise>> Get()
    {
      var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
      try
      {
        return Ok(_es.Get(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }

    [HttpPost]
    [Authorize]
    public ActionResult<Exercise> Post([FromBody] Exercise newExercise)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newExercise.UserId = userId;
        return Ok(_es.Create(newExercise));
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
        return Ok(_es.Delete(userId, id));
      }
      catch (System.Exception error)
      {
        return BadRequest(error.Message);
      }
    }

  }
}
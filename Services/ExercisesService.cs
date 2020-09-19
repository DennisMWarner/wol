using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Wol.Repositories;

namespace Wol.Services
{
  public class ExercisesService
  {
    private readonly ExercisesRepository _repo;
    public ExercisesService(ExercisesRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Exercise> Get(string userId)
    {
      return _repo.Get(userId);
    }

    public Exercise Create(Exercise newExercise)
    {
      return _repo.Create(newExercise);
    }
    internal string Delete(string userId, string id)
    {
      if (_repo.Delete(userId, id))
      {
        return "exercise delorted.";
      }
      throw new Exception("Could not delete exercise");
    }
  }
}
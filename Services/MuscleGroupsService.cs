using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Wol.Repositories;

namespace Wol.Services
{
  public class MuscleGroupsService
  {
    private readonly MuscleGroupsRepository _repo;
    public MuscleGroupsService(MuscleGroupsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<MuscleGroup> Get(string userId)
    {
      return _repo.Get(userId);
    }

    public MuscleGroup Create(MuscleGroup newMuscleGroup)
    {
      return _repo.Create(newMuscleGroup);
    }
    internal string Delete(string userId)
    {
      if (_repo.Delete(userId))
      {
        return "muscle group delorted.";
      }
      throw new Exception("Could not delete muscle group");
    }
  }
}
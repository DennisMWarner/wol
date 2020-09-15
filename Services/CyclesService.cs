using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Wol.Repositories;

namespace Wol.Services
{
  public class CyclesService
  {
    private readonly CyclesRepository _repo;
    public CyclesService(CyclesRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Cycle> Get()
    {
      return _repo.Get();
    }

    public Cycle Create(Cycle newCycle)
    {
      return _repo.Create(newCycle);
    }
    internal string Delete(string userId)
    {
      if (_repo.Delete(userId))
      {
        return "database data delorted.";
      }
      throw new Exception("Could not delete DB data");
    }
  }
}
using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Wol.Repositories;

namespace Wol.Services
{
  public class SetsService
  {
    private readonly SetsRepository _repo;
    public SetsService(SetsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Set> Get()
    {
      return _repo.Get();
    }

    public Set Create(Set newSet)
    {
      return _repo.Create(newSet);
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
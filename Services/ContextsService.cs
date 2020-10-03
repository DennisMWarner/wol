using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Wol.Repositories;

namespace Wol.Services
{
  public class ContextsService
  {
    private readonly ContextsRepository _repo;
    public ContextsService(ContextsRepository repo)
    {
      _repo = repo;
    }
    public IEnumerable<Context> Get(string userId)
    {
      return _repo.Get(userId);
    }

    public Context Create(Context newContext)
    {
      return _repo.Create(newContext);
    }
    internal string Delete(string userId, string id)
    {
      if (_repo.Delete(userId, id))
      {
        return "Context delorted.";
      }
      throw new Exception("Could not delete Context");
    }
  }
}
using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Keep> Get()
    {
      string sql = "SELECT * FROM Keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }

    internal Keep Create(Keep KeepData)
    {
      throw new NotImplementedException();
    }
  }
}
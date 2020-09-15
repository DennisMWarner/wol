using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class CyclesRepository
  {
    private readonly IDbConnection _db;

    public CyclesRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Cycle> Get()
    {
      string sql = "SELECT * FROM cycles";
      return _db.Query<Cycle>(sql);
    }

    internal Cycle Create(Cycle newCycle)
    {
      string sql = @"
            INSERT INTO cycles(userId, number)
            VALUES(@UserId, @Number); 
            SELECT LAST_INSERT_ID()
        ";
      newCycle.Id = _db.ExecuteScalar<int>(sql, newCycle);
      return newCycle;
    }
    internal bool Delete(string userId)
    {
      {
        string sql = @"
     DELETE FROM Cycles WHERE(userId = @UserId)";
        int affectedRows = _db.Execute(sql, new { userId });
        return (affectedRows > 0 ? true : false);
      }
    }

  }
}
using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class ContextsRepository
  {
    private readonly IDbConnection _db;

    public ContextsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Context> Get(string userId)
    {
      string sql = "SELECT * FROM contexts WHERE (userId = @UserId)";
      return _db.Query<Context>(sql, new { userId });
    }

    internal Context Create(Context newContext)
    {
      string sql = @"
            INSERT INTO contexts(userId, name, repMax, repMin, increment, factor, numOfCycles)
            VALUES(@UserId, @Name, @RepMax, @RepMin, @Increment, @Factor, @NumOfCycles); 
            SELECT LAST_INSERT_ID()
        ";
      newContext.Id = _db.ExecuteScalar<int>(sql, newContext);
      return newContext;
    }
    internal bool Delete(string userId, string id)
    {
      {
        string sql = @"
     DELETE FROM contexts WHERE(userId = @UserId AND id = @Id)";
        int affectedRows = _db.Execute(sql, new { userId, id });
        return (affectedRows > 0 ? true : false);
      }
    }

  }
}
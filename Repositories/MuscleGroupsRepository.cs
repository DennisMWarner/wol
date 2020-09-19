using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class MuscleGroupsRepository
  {
    private readonly IDbConnection _db;

    public MuscleGroupsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<MuscleGroup> Get(string userId)
    {
      string sql = "SELECT * FROM musclegroups WHERE (userId = @UserId)";
      return _db.Query<MuscleGroup>(sql, new { userId });
    }

    internal MuscleGroup Create(MuscleGroup newMuscleGroup)
    {
      string sql = @"
            INSERT INTO musclegroups(userId, name)
            VALUES(@UserId, @Name); 
            SELECT LAST_INSERT_ID()
        ";
      newMuscleGroup.Id = _db.ExecuteScalar<int>(sql, newMuscleGroup);
      return newMuscleGroup;
    }
    internal bool Delete(string userId)
    {
      {
        string sql = @"
     DELETE FROM musclegroups WHERE (userId = @UserId)";
        int affectedRows = _db.Execute(sql, new { userId });
        return (affectedRows > 0 ? true : false);
      }
    }

  }
}
using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class SetsRepository
  {
    private readonly IDbConnection _db;

    public SetsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Set> Get()
    {
      string sql = "SELECT * FROM sets";
      return _db.Query<Set>(sql);
    }

    internal Set Create(Set newSet)
    {
      string sql = @"
            INSERT INTO sets(exerciseName,  userId, muscleGroup, repCount, weight, name, context, date)
            VALUES(@ExerciseName, @UserId, @MuscleGroup, @RepCount, @Weight, @Name, @Context, @Date); 
            SELECT LAST_INSERT_ID()
        ";
      newSet.Id = _db.ExecuteScalar<int>(sql, newSet);
      return newSet;
    }
    internal bool Delete(string userId)
    {
      {
        string sql = @"
     DELETE FROM sets WHERE(userId = @UserId)";
        int affectedRows = _db.Execute(sql, new { userId });
        return (affectedRows > 0 ? true : false);
      }
    }

  }
}
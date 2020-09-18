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
    internal IEnumerable<Set> GetNext(string userId)
    {
      string sql = "SELECT * FROM sets WHERE  userId = @UserId AND date = (SELECT MIN(date) FROM sets WHERE actualWeight < 1)";
      return _db.Query<Set>(sql, new { userId });
    }
    internal Set EditSet(Set setToUpdate)
    {
      {
        string sql = "UPDATE sets SET ActualRepCount = @actualRepCount, ActualWeight = @actualWeight WHERE id = @Id";
        int affectedRows = _db.Execute(sql, setToUpdate);
        return setToUpdate;
      }
    }
    internal Set Create(Set newSet)
    {
      string sql = @"
            INSERT INTO sets(exerciseName,  userId, muscleGroup, plannedRepCount, plannedWeight,actualRepCount, actualWeight, name, context, date, cycle)
            VALUES(@ExerciseName, @UserId, @MuscleGroup, @PlannedRepCount, @PlannedWeight, @ActualRepCount, @ActualWeight, @Name, @Context, @Date, @Cycle); 
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
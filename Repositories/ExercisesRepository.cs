using System;
using System.Collections.Generic;
using System.Data;
using Wol.Models;
using Dapper;

namespace Wol.Repositories
{
  public class ExercisesRepository
  {
    private readonly IDbConnection _db;

    public ExercisesRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Exercise> Get(string userId)
    {
      string sql = "SELECT * FROM exercises WHERE (userId = @UserId)";
      return _db.Query<Exercise>(sql, new { userId });
    }

    internal Exercise Create(Exercise newExercise)
    {
      string sql = @"
            INSERT INTO exercises(userId, name, muscleGroup)
            VALUES(@UserId, @Name, @MuscleGroup); 
            SELECT LAST_INSERT_ID()
        ";
      newExercise.Id = _db.ExecuteScalar<int>(sql, newExercise);
      return newExercise;
    }
    internal bool Delete(string userId, string id)
    {
      {
        string sql = @"
     DELETE FROM exercises WHERE(userId = @UserId AND id = @Id)";
        int affectedRows = _db.Execute(sql, new { userId, id });
        return (affectedRows > 0 ? true : false);
      }
    }

  }
}
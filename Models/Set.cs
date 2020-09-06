namespace Wol.Models
{
  public class Set
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string UserId { get; set; }
    public string ExerciseName { get; set; }
    public string MuscleGroup { get; set; }
    public string Img { get; set; }
    public float Weight { get; set; }
    public int RepCount { get; set; }

    public string Date { get; set; }
    public string Context { get; set; }
    public int Cycle { get; set; }
  }
  // public class VaultKeepViewModel : Keep
  // {
  //   public int VaultKeepId { get; set; }
  // }
}
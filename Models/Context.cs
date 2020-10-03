namespace Wol.Models
{
  public class Context
  {
    public int Id { get; set; }
    public string Name { get; set; }

    public string UserId { get; set; }
    public int RepMax { get; set; }
    public int RepMin { get; set; }
    public float Increment { get; set; }
    public float Factor { get; set; }
    public int NumOfCycles { get; set; }


  }
}
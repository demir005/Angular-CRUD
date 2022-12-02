namespace Projects_API.Models
{
    public class Project
    {
        public string Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;

    }
}

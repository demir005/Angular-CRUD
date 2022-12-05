using System.ComponentModel.DataAnnotations;

namespace Projects_API.Models
{
    public class Project
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; } 
        public DateTime Created { get; set; }

    }
}

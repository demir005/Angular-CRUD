using Microsoft.EntityFrameworkCore;
using Projects_API.Models;

namespace Projects_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) 
        {

        }

        public DbSet<Project> Projects { get; set; }
        
    }
}

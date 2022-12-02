using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Projects_API.Data;
using Projects_API.Models;

namespace Projects_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProjectsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProjects()
        {
            var projects = await _context.Projects.ToListAsync();
            return Ok(projects);
        }

        [HttpPost]
        public async Task<IActionResult> AddProject([FromBody] Project projectRequest)
        {
            projectRequest.Id= Guid.NewGuid();
            await _context.Projects.AddAsync(projectRequest);
            await _context.SaveChangesAsync();

            return Ok(projectRequest);
        }
    }
}

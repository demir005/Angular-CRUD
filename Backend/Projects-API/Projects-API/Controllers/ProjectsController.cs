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
            
            await _context.Projects.AddAsync(projectRequest);
            await _context.SaveChangesAsync();

            return Ok(projectRequest);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetEmployee([FromRoute]string Id)
        {
           var project =
                await _context.Projects.FirstOrDefaultAsync(p => p.Id == Id);
            if(project == null)
            {
                return NotFound();
            }
            return Ok(project);

        }
    }
}

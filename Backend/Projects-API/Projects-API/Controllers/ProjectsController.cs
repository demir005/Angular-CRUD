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
        public async Task<IActionResult> GetProject([FromRoute] string Id)
        {
            var project =
                 await _context.Projects.FirstOrDefaultAsync(p => p.Id == Id);
            if (project == null)
            {
                return NotFound();
            }
            return Ok(project);

        }

        [HttpPut]
        [Route("id")]
        public async Task<IActionResult> UpdateProject([FromRoute] string Id, Project updateProjectRequest)
        {
            var project = await _context.Projects.FindAsync(Id);

            if (project == null)
            {
                return NotFound();
            }
            project.Id = updateProjectRequest.Id;
            project.Name = updateProjectRequest.Name;
            project.Created = updateProjectRequest.Created;

            await _context.SaveChangesAsync();
            return Ok(project);
        }

        [HttpDelete]
        [Route("id")]
        public async Task<IActionResult> DeleteProject([FromRoute] string Id)
        {
            var project = await _context.Projects.FindAsync(Id);

            if (project == null) { return NotFound(); }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();
            return Ok(project);
        }
    }
}

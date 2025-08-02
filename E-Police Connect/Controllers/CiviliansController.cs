using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using E_Police_Connect.Models;

namespace E_Police_Connect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiviliansController : ControllerBase
    {
        private readonly TestContext _context;

        public CiviliansController(TestContext context)
        {
            _context = context;
        }

        // GET: api/Civilians
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Civilian>>> GetCivilians()
        {
            return await _context.Civilians.ToListAsync();
        }

        // GET: api/Civilians/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Civilian>> GetCivilian(int id)
        {
            var civilian = await _context.Civilians.FindAsync(id);

            if (civilian == null)
            {
                return NotFound();
            }

            return civilian;
        }

        // PUT: api/Civilians/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCivilian(int id, Civilian civilian)
        {
            if (id != civilian.CivilianId)
            {
                return BadRequest();
            }

            _context.Entry(civilian).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CivilianExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Civilians
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Civilian>> PostCivilian(Civilian civilian)
        {
            _context.Civilians.Add(civilian);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CivilianExists(civilian.CivilianId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCivilian", new { id = civilian.CivilianId }, civilian);
        }

        // DELETE: api/Civilians/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCivilian(int id)
        {
            var civilian = await _context.Civilians.FindAsync(id);
            if (civilian == null)
            {
                return NotFound();
            }

            _context.Civilians.Remove(civilian);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CivilianExists(int id)
        {
            return _context.Civilians.Any(e => e.CivilianId == id);
        }
    }
}

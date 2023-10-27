using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class MobileController : ControllerBase
    {
        private readonly WebApiContext _context;

        public MobileController(WebApiContext context)
        {
            _context = context;
        }



        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetMobiles()
        {
          if (_context.Mobiles == null)
          {
              return NotFound();
          }
            var mobile = await _context.Mobiles.ToListAsync();
          return Ok(mobile);
        }



        [AllowAnonymous]
        [HttpGet]
        [Route("{id:int}")]
        public async Task<ActionResult<MobileModel>> GetMobileModelById([FromRoute] int id)
        {
          if (_context.Mobiles == null)
          {
              return NotFound();
          }
            var mobileModel = await _context.Mobiles.FindAsync(id);

            if (mobileModel == null)
            {
                return NotFound();
            }

            return mobileModel;
        }


        [AllowAnonymous]
        [HttpGet("{mobilename}")]
        public async Task<ActionResult> GetMobileModelByName(string mobilename)
        {
            if (_context.Mobiles == null)
            {
                return NotFound();
            }
            if(mobilename == "")
            {
                var mobileModel1 = _context.Mobiles.ToList();
                return Ok(mobileModel1);
            }
            var mobileModel = _context.Mobiles.Where(w=>w.MobileName.Contains(mobilename)).ToList();

            if (mobileModel == null)
            {
                return NotFound();
            }

            return Ok(mobileModel);
        }


        [Authorize(Roles = "admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMobileModel(int id, MobileModel mobileModel)
        {
            if (id != mobileModel.MobileId)
            {
                return BadRequest();
            }

            _context.Entry(mobileModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MobileModelExists(id))
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

        


        [Authorize(Roles = "admin")]
        [HttpPost]
        public async Task<ActionResult<MobileModel>> PostMobileModel(MobileModel mobileModel)
        {
          if (_context.Mobiles == null)
          {
              return Problem("Entity set 'WebApiContext.Mobiles'  is null.");
          }
            _context.Mobiles.Add(mobileModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMobileModelById", new { id = mobileModel.MobileId }, mobileModel);
        }



        [Authorize(Roles = "admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMobileModel(int id)
        {
            if (_context.Mobiles == null)
            {
                return NotFound();
            }
            var mobileModel = await _context.Mobiles.FindAsync(id);
            if (mobileModel == null)
            {
                return NotFound();
            }

            _context.Mobiles.Remove(mobileModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MobileModelExists(int id)
        {
            return (_context.Mobiles?.Any(e => e.MobileId == id)).GetValueOrDefault();
        }
        

    }
}

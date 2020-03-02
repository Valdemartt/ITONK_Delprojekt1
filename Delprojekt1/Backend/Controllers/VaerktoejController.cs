using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Database;
using Backend.Repository;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    public class VaerktoejController : ControllerBase
    {
        private VaerktoejRepository _repos;
        public VaerktoejController(HaandvaerkerDb db)
        {
            _repos = new VaerktoejRepository(db);
        }
        [Produces("application/json")]
        [HttpPost("~/api/Vaerktoej")]
        public async Task<IActionResult> Create([FromBody] Vaerktoej vaerktoej)
        {
            try
            {
                Vaerktoej v = await _repos.CreateVaerktoej(vaerktoej);
                if (v != null)
                    return Ok(v);
                return BadRequest("Could not create Vaerktoej");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpGet("~/api/Vaerktoej")]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _repos.GetVaerktoej());
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpPut("~/api/Vaerktoej")]
        public async Task<IActionResult> Update([FromBody] Vaerktoej vaerktoej)
        {
            try
            {
                Vaerktoej v = await _repos.Updatevaerktoej(vaerktoej);
                if (v != null)
                    return Ok(v);
                return BadRequest("Could not update vaerktoej");
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpDelete("~/api/Vaerktoej")]
        public async Task<IActionResult> Delete([FromBody] Vaerktoej vaerktoej)
        {
            try
            {
                if (await _repos.Deletevaerktoej(vaerktoej))
                    return Ok();
                return BadRequest("Vaerktoej could not be deleted");
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}
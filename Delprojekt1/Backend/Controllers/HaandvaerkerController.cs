using Backend.Database;
using Backend.Repository;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    public class HaandvaerkerController : ControllerBase
    {
        private HaandvaerkerRepository haandvaerkerRepository;
        public HaandvaerkerController(HaandvaerkerDb db)
        {
            haandvaerkerRepository = new HaandvaerkerRepository(db);
        }

        [Produces("application/json")]
        [HttpPost("~/api/Haandvaerker")]
        public async Task<IActionResult> Create([FromBody] Haandvaerker haandvaerker)
        {
            try
            {
                Haandvaerker hv = await haandvaerkerRepository.CreateHaandvaerker(haandvaerker);
                if(hv != null)
                {
                    return Ok(hv);
                }
                return BadRequest("Haandvaerker could not be created");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }

        [Produces("application/json")]
        [HttpGet("~/api/Haandvaerker")]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await haandvaerkerRepository.GetHaandvaerkere());
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }

        [Produces("application/json")]
        [HttpPut("~/api/Haandvaerker")]
        public async Task<IActionResult> Update([FromBody] Haandvaerker haandvaerker)
        {
            try
            {
                Haandvaerker hv = await haandvaerkerRepository.UpdateHaandvaerker(haandvaerker);
                if(hv != null)
                {
                    return Ok(hv);
                }
                return BadRequest("Haandvaerker could not be updated");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }

        [Produces("application/json")]
        [HttpDelete("~/api/Haandvaerker")]
        public async Task<IActionResult> Delete([FromBody] Haandvaerker haandvaerker)
        {
            try
            {
                if (await haandvaerkerRepository.DeleteHaandvaerker(haandvaerker))
                    return Ok();
                return BadRequest("Haandvaerker could not be deleted");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}

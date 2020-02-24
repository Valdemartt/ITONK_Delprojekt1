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
    [Route("/api")]
    [ApiController]
    public class HaandvaerkerController : ControllerBase
    {
        private HaandvaerkerRepository haandvaerkerRepository;
        public HaandvaerkerController(HaandvaerkerDb db)
        {
            haandvaerkerRepository = new HaandvaerkerRepository(db);
        }

        [HttpPost("/Haandvaerker")]
        public async Task<IActionResult> Create(Haandvaerker haandvaerker)
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
        [HttpGet("/Haandvaerker")]
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
        [HttpPut("/Haandvaerker")]
        public async Task<IActionResult> Update(Haandvaerker haandvaerker)
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

        [HttpDelete("/Haandvaerker")]
        public async Task<IActionResult> Delete(Haandvaerker haandvaerker)
        {
            try
            {
                if (await haandvaerkerRepository.DeleteHaandvaerker(haandvaerker))
                    return Ok();
                return BadRequest("Haandvaerker could not be updated");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}

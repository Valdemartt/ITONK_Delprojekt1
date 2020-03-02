using System;
using System.Threading.Tasks;
using Backend.Database;
using Backend.Repository;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    public class VaerktoejskasseController : ControllerBase
    {
        VaerktoejskasseRepository _repos;
        public VaerktoejskasseController(HaandvaerkerDb db)
        {
            _repos = new VaerktoejskasseRepository(db);
        }
        [HttpPost("~/api/Vaerktoejskasse")]
        [Produces("application/json")]
        public async Task<IActionResult> Create([FromBody] Vaerktoejskasse vaerktoejskasse)
        {
            try
            {
                Vaerktoejskasse vtk = await _repos.CreateVaerktoejsKasse(vaerktoejskasse);
                if (vtk != null)
                    return Ok(vtk);
                return BadRequest("Vaerktoejskasse could not be created");
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpGet("~/api/Vaerktoejskasse")]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _repos.GetVaerktoejsKasse());
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpPut("~/api/Vaerktoejskasse")]
        public async Task<IActionResult> Update([FromBody] Vaerktoejskasse vaerktoejskasse)
        {
            try
            {
                Vaerktoejskasse vtk = await _repos.UpdateVaerktoejsKasse(vaerktoejskasse);
                if (vtk != null)
                    return Ok(vtk);
                return BadRequest("Vaerktoejskasse was not updated");
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
        [Produces("application/json")]
        [HttpDelete("~/api/Vaerktoejskasse")]
        public async Task<IActionResult> Delete([FromBody] Vaerktoejskasse vaerktoejskasse)
        {
            try
            {
                if (await _repos.DeleteVaerktoejsKasse(vaerktoejskasse))
                    return Ok();
                return BadRequest("Vaerktoejskasse was not deleted");
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}
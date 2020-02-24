using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/")]
    public class VaerktoejController : ControllerBase
    {

        [HttpPost("/Vaerktoej")]
        public async Task<IActionResult> Create(Vaerktoej vaerktoej)
        {
            try
            {

            }
            catch(Exception e)
            {

            }
        }

        [HttpGet("/Vaerktoej")]
        public async Task<IActionResult> Get()
        {
            try
            {

            }
            catch (Exception e)
            {

            }
        }

        [HttpPut("/Vaerktoej")]
        public async Task<IActionResult> Update(Vaerktoej vaerktoej)
        {
            try
            {

            }
            catch (Exception e)
            {

            }
        }

        [HttpDelete("/Vaerktoej")]
        public async Task<IActionResult> Delete(Vaerktoej vaerktoej)
        {
            try
            {

            }
            catch (Exception e)
            {

            }
        }
    }
}
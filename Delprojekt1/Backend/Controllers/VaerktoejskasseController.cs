using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("/api")]
    [ApiController]
    public class VaerktoejskasseController : ControllerBase
    {
        [HttpPost("/Vaerktoejskasse")]
        public async Task<IActionResult> Create(Vaerktoejskasse vaerktoejskasse)
        {

        }
        [HttpGet("/Vaerktoejskasse")]
        public async Task<IActionResult> Get()
        {

        }
        [HttpPut("/Vaerktoejskasse")]
        public async Task<IActionResult> Update(Vaerktoejskasse vaerktoejskasse)
        {

        }
        [HttpDelete("/Vaerktoejskasse")]
        public async Task<IActionResult> Delete(Vaerktoejskasse vaerktoejskasse)
        {

        }
    }
}
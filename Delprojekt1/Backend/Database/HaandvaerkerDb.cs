using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Database
{
    public class HaandvaerkerDb : DbContext
    {
        public HaandvaerkerDb(DbContextOptions<HaandvaerkerDb> options) : base(options) { }
        public DbSet<Haandvaerker> Haandvaerkere { get; set; }
        public DbSet<Vaerktoej> Vaerktoej { get; set; }
        public DbSet<Vaerktoejskasse> Vaerktoejskasser { get; set; }

    }
}

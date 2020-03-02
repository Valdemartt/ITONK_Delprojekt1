using Backend.Database;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository
{
    public class VaerktoejskasseRepository
    {
        private HaandvaerkerDb _db;
        public VaerktoejskasseRepository(HaandvaerkerDb db)
        {
            _db = db;
        }

        public Task<List<Vaerktoejskasse>> GetVaerktoejsKasse()
        {
            return _db.Vaerktoejskasser.ToListAsync();
        }

        public async Task<Vaerktoejskasse> CreateVaerktoejsKasse(Vaerktoejskasse VaerktoejsKasse)
        {
            try
            {
                _db.Vaerktoejskasser.Add(VaerktoejsKasse);
                await _db.SaveChangesAsync();
                return VaerktoejsKasse;
            }
            catch (DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<Vaerktoejskasse> UpdateVaerktoejsKasse(Vaerktoejskasse VaerktoejsKasse)
        {
            try
            {
                _db.Vaerktoejskasser.Update(VaerktoejsKasse);
                await _db.SaveChangesAsync();
                return VaerktoejsKasse;
            }
            catch (DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<bool> DeleteVaerktoejsKasse(Vaerktoejskasse VaerktoejsKasse)
        {
            try
            {
                _db.Vaerktoejskasser.Remove(VaerktoejsKasse);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateException e)
            {
                return false;
            }
        }
    }
}

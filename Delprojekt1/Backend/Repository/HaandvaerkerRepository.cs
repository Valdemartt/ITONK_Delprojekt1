using Backend.Database;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository
{
    public class HaandvaerkerRepository
    {
        private HaandvaerkerDb _db;
        public HaandvaerkerRepository(HaandvaerkerDb db)
        {
            _db = db;
        }


        public async Task<List<Haandvaerker>> GetHaandvaerkere()
        {
            return await _db.Haandvaerkere.ToListAsync();
        }

        public async Task<Haandvaerker> CreateHaandvaerker(Haandvaerker haandvaerker)
        {
            try
            {
                _db.Haandvaerkere.Add(haandvaerker);
                await _db.SaveChangesAsync();
                return haandvaerker;
            }
            catch(DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<Haandvaerker> UpdateHaandvaerker(Haandvaerker haandvaerker)
        {
            try
            {
                _db.Haandvaerkere.Update(haandvaerker);
                await _db.SaveChangesAsync();
                return haandvaerker;
            }
            catch(DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<bool> DeleteHaandvaerker(Haandvaerker haandvaerker)
        {
            try
            {
                _db.Haandvaerkere.Remove(haandvaerker);
                await _db.SaveChangesAsync();
                return true;
            }
            catch(DbUpdateException e)
            {
                return false;
            }
        }

    }
}

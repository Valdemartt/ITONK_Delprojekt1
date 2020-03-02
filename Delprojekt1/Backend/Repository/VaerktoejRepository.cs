using Backend.Database;
using F20ITONK.ASPNETCore.MicroService.ClassLib.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository
{
    public class VaerktoejRepository
    {
        private HaandvaerkerDb _db;
        public VaerktoejRepository(HaandvaerkerDb db)
        {
            _db = db;
        }

        public async Task<List<Vaerktoej>> GetVaerktoej()
        {
            return await _db.Vaerktoej.ToListAsync();
        }

        public async Task<Vaerktoej> CreateVaerktoej(Vaerktoej vaerktoej)
        {
            try
            {
                _db.Vaerktoej.Add(vaerktoej);
                await _db.SaveChangesAsync();
                return vaerktoej;
            }
            catch (DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<Vaerktoej> Updatevaerktoej(Vaerktoej vaerktoej)
        {
            try
            {
                _db.Vaerktoej.Update(vaerktoej);
                await _db.SaveChangesAsync();
                return vaerktoej;
            }
            catch (DbUpdateException e)
            {
                return null;
            }
        }

        public async Task<bool> Deletevaerktoej(Vaerktoej vaerktoej)
        {
            try
            {
                _db.Vaerktoej.Remove(vaerktoej);
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

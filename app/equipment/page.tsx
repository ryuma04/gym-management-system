/* eslint-disable @typescript-eslint/no-explicit-any */
import { getEquipments, addEquipment, deleteEquipment } from '@/app/actions/equipment';

export default async function EquipmentPage() {
  const equipments = await getEquipments();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Gym Equipment</h1>
          <p className="text-slate-400 mt-1">Track and manage fitness machines and tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column */}
        <div className="glass-panel p-6 rounded-2xl h-fit border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New Equipment</h2>
          <form action={addEquipment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Equipment Name</label>
              <input type="text" name="e_name" required className="w-full" placeholder="e.g. Treadmill Pro 2000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Equipment Type</label>
              <input type="text" name="e_type" required className="w-full" placeholder="e.g. Cardio / Strength" />
            </div>
            <button type="submit" className="btn-primary !bg-gradient-to-r !from-purple-500 !to-pink-500 hover:shadow-purple-500/30 w-full mt-4">
              Add Equipment
            </button>
          </form>
        </div>

        {/* Table Column */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-700 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Equipment Inventory</h2>
          {equipments.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No equipment found. Add one to get started.</div>
          ) : (
            <table className="glass-table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {equipments.map((equipment: any) => (
                  <tr key={equipment.e_id}>
                    <td className="text-slate-400">#{equipment.e_id}</td>
                    <td className="font-medium text-white">{equipment.e_name}</td>
                    <td className="text-slate-300">
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
                        {equipment.e_type}
                      </span>
                    </td>
                    <td className="text-right space-x-2 flex justify-end">
                      <form action={async () => {
                        'use server';
                        await deleteEquipment(equipment.e_id);
                      }}>
                        <button type="submit" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 p-2 rounded transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

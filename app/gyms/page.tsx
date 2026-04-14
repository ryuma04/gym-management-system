/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { getGyms, addGym, deleteGym, updateGym } from '@/app/actions/gyms';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default async function GymsPage({ searchParams }: { searchParams: { edit?: string } }) {
  const searchParamsObj = await searchParams;
  const editId = searchParamsObj?.edit;
  const gyms = await getGyms();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Gym Locations</h1>
          <p className="text-slate-400 mt-1">Manage all your fitness center branches.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column */}
        <div className="glass-panel p-6 rounded-2xl h-fit border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New Gym</h2>
          <form action={addGym} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Gym Name</label>
              <input type="text" name="g_name" required className="w-full" placeholder="e.g. Downtown Fitness" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Location</label>
              <input type="text" name="g_location" required className="w-full" placeholder="e.g. 123 Main St, City" />
            </div>
            <button type="submit" className="btn-primary w-full mt-4">
              Create Gym Location
            </button>
          </form>
        </div>

        {/* Table Column */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-700 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Active Gyms</h2>
          {gyms.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No gyms found. Add one to get started.</div>
          ) : (
            <table className="glass-table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {gyms.map((gym: any) => (
                  <tr key={gym.g_id}>
                    {editId === gym.g_id.toString() ? (
                      <td colSpan={4} className="p-4 bg-slate-800/50 rounded-lg">
                        <form action={async (formData: FormData) => {
                          'use server';
                          await updateGym(gym.g_id, formData);
                        }} className="flex items-center gap-4">
                          <span className="text-slate-400 w-12">#{gym.g_id}</span>
                          <input type="text" name="g_name" defaultValue={gym.g_name} required className="w-full flex-1" />
                          <input type="text" name="g_location" defaultValue={gym.g_location} required className="w-full flex-1" />
                          <button type="submit" className="btn-primary py-1.5 px-4 text-sm whitespace-nowrap">Save</button>
                          <Link href="/gyms" className="btn-secondary py-1.5 px-4 text-sm whitespace-nowrap">Cancel</Link>
                        </form>
                      </td>
                    ) : (
                      <>
                        <td className="text-slate-400">#{gym.g_id}</td>
                        <td className="font-medium text-white">{gym.g_name}</td>
                        <td className="text-slate-300">{gym.g_location}</td>
                        <td className="text-right space-x-2 flex justify-end">
                          <Link href={`/gyms?edit=${gym.g_id}`} className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-2 rounded transition-colors inline-flex">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </Link>
                          <form action={async () => {
                            'use server';
                            await deleteGym(gym.g_id);
                          }}>
                            <button type="submit" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 p-2 rounded transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </form>
                        </td>
                      </>
                    )}
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

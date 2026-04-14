/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMembers, addMember, deleteMember } from '@/app/actions/members';

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Members Hub</h1>
          <p className="text-slate-400 mt-1">Register and track gym members.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column */}
        <div className="glass-panel p-6 rounded-2xl h-fit border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New Member</h2>
          <form action={addMember} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
              <input type="text" name="m_name" required className="w-full" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Date of Birth</label>
              <input type="date" name="m_dob" required className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Gender (M/F/O)</label>
              <input type="text" name="m_gender" maxLength={1} required className="w-full" placeholder="M" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Additional Info</label>
              <textarea name="m_info" className="w-full" placeholder="e.g. Height: 180cm, Weight: 85kg"></textarea>
            </div>
            <button type="submit" className="btn-primary !bg-gradient-to-r !from-emerald-500 !to-teal-500 hover:shadow-emerald-500/30 w-full mt-4">
              Register Member
            </button>
          </form>
        </div>

        {/* Table Column */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-slate-700 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Member Directory</h2>
          {members.length === 0 ? (
            <div className="text-center py-8 text-slate-400">No members found. Add one to get started.</div>
          ) : (
            <table className="glass-table w-full text-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Info</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member: any) => (
                  <tr key={member.m_id}>
                    <td className="text-slate-400">#{member.m_id}</td>
                    <td className="font-medium text-white">{member.m_name}</td>
                    <td className="text-slate-300">{new Date(member.m_dob).toLocaleDateString()}</td>
                    <td className="text-slate-300">{member.m_gender}</td>
                    <td className="text-slate-400 max-w-[150px] truncate">{member.m_info}</td>
                    <td className="text-right space-x-2 flex justify-end">
                      <form action={async () => {
                        'use server';
                        await deleteMember(member.m_id);
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

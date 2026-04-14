import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <header className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          System Overview
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Manage your fitness centers efficiently. Navigate through facilities, members, and equipments instantly with our modern dashboard.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Gyms Card */}
        <Link href="/gyms" className="group">
          <div className="glass-panel p-6 rounded-2xl h-full flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-700 hover:border-blue-500/50">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Gym Facilities</h2>
            <p className="text-slate-400 mb-6 flex-grow">Manage locations, edit contact details, and oversee gym branches.</p>
            <div className="text-blue-400 font-medium flex items-center mt-auto">
              Manage Gyms
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </Link>

        {/* Members Card */}
        <Link href="/members" className="group">
          <div className="glass-panel p-6 rounded-2xl h-full flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 border border-slate-700 hover:border-emerald-500/50">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Members List</h2>
            <p className="text-slate-400 mb-6 flex-grow">Add new members, track demographics, and manage vital metrics.</p>
            <div className="text-emerald-400 font-medium flex items-center mt-auto">
              Manage Members
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </Link>

        {/* Equipment Card */}
        <Link href="/equipment" className="group">
          <div className="glass-panel p-6 rounded-2xl h-full flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 border border-slate-700 hover:border-purple-500/50">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">Equipment</h2>
            <p className="text-slate-400 mb-6 flex-grow">Track gym machines, inventories, and maintenance records.</p>
            <div className="text-purple-400 font-medium flex items-center mt-auto">
              Manage Equipment
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

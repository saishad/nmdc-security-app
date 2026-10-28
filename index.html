<!DOCTYPE html>
<html lang="en" dir="ltr" class="h-full bg-slate-900 text-slate-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NMDC Security Operations Center (SOC)</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Supabase JS Client -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        [dir="rtl"] body { font-family: 'Cairo', sans-serif; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
    </style>
</head>
<body class="h-full flex flex-col bg-slate-950 text-slate-100 overflow-hidden">

    <!-- Top Navigation Header -->
    <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between shrink-0">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="bg-amber-500 text-slate-950 p-2 rounded-lg font-bold flex items-center justify-center">
                <i data-lucide="shield-alert" class="w-6 h-6"></i>
            </div>
            <div>
                <h1 class="text-base font-bold text-slate-100 leading-tight">NMDC Security Operations Center</h1>
                <p class="text-xs text-slate-400">20 KM Site • Plots A-G • 20 Gates • 18 Patrol Fleet</p>
            </div>
        </div>

        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div id="db-status-badge" class="flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse mr-1.5 rtl:ml-1.5 rtl:mr-0"></span>
                <span id="db-status-text">Local Storage Mode</span>
            </div>

            <select id="user-role-select" class="bg-slate-800 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 outline-none">
                <option value="Director">Director of Security</option>
                <option value="ShiftManager">Shift Security Manager</option>
                <option value="AreaSupervisor">Area Supervisor</option>
                <option value="PlotSupervisor">Plot Supervisor</option>
                <option value="GateGuard">Gate Access Guard</option>
            </select>

            <button onclick="toggleLanguage()" class="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-amber-400">
                <span id="lang-btn-text">العربية</span>
            </button>

            <button onclick="openSettingsModal()" class="p-1.5 text-slate-400 hover:text-slate-200 bg-slate-800 border border-slate-700 rounded-lg">
                <i data-lucide="settings" class="w-4 h-4"></i>
            </button>
        </div>
    </header>

    <!-- Main Content Area with Sidebar -->
    <div class="flex-1 flex overflow-hidden">

        <!-- Navigation Sidebar -->
        <aside class="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 rtl:border-r-0 rtl:border-l">
            <nav class="p-3 space-y-1">
                <button onclick="switchTab('dashboard')" id="nav-dashboard" class="w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                    <span>Command Center</span>
                </button>

                <button onclick="switchTab('roster')" id="nav-roster" class="w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-200">
                    <i data-lucide="users" class="w-4 h-4"></i>
                    <span>Guard Roster (200)</span>
                </button>

                <button onclick="switchTab('fleet')" id="nav-fleet" class="w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-200">
                    <i data-lucide="truck" class="w-4 h-4"></i>
                    <span>Patrol Fleet (18)</span>
                </button>

                <button onclick="switchTab('incidents')" id="nav-incidents" class="w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-200">
                    <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                    <span>Incident Management</span>
                </button>

                <button onclick="switchTab('handover')" id="nav-handover" class="w-full flex items-center space-x-3 rtl:space-x-reverse px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-200">
                    <i data-lucide="clipboard-check" class="w-4 h-4"></i>
                    <span>Shift Handover</span>
                </button>
            </nav>

            <div class="p-3 m-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
                <div class="flex items-center justify-between text-slate-400">
                    <span>Active Shift</span>
                    <span class="text-emerald-400 font-semibold">Shift 1 (Morning)</span>
                </div>
                <div class="text-slate-500 font-mono">06:00 - 14:00</div>
                <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-slate-400">
                    <span>Rotation</span>
                    <span class="text-amber-400 font-medium">5 Days On / 2 Off</span>
                </div>
            </div>
        </aside>

        <!-- Main Workspace View -->
        <main class="flex-1 overflow-y-auto p-4 bg-slate-950">

            <!-- TAB 1: COMMAND CENTER -->
            <section id="tab-dashboard" class="space-y-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center space-x-3 rtl:space-x-reverse">
                        <div class="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                            <i data-lucide="shield" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400">Guards On Duty</div>
                            <div class="text-xl font-bold text-slate-100">164 <span class="text-xs font-normal text-slate-400">/ 200</span></div>
                        </div>
                    </div>

                    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center space-x-3 rtl:space-x-reverse">
                        <div class="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                            <i data-lucide="door-open" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400">Gates Operational</div>
                            <div class="text-xl font-bold text-slate-100">20 <span class="text-xs font-normal text-slate-400">/ 20</span></div>
                        </div>
                    </div>

                    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center space-x-3 rtl:space-x-reverse">
                        <div class="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg">
                            <i data-lucide="truck" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400">Active Patrol Fleet</div>
                            <div class="text-xl font-bold text-slate-100">14 <span class="text-xs font-normal text-amber-400">(4 Standby)</span></div>
                        </div>
                    </div>

                    <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center space-x-3 rtl:space-x-reverse">
                        <div class="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg">
                            <i data-lucide="alert-circle" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="text-xs text-slate-400">Active Incidents</div>
                            <div class="text-xl font-bold text-rose-400">2 <span class="text-xs font-normal text-slate-400">Unresolved</span></div>
                        </div>
                    </div>
                </div>

                <!-- Plot Map Section -->
                <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h2 class="text-sm font-bold text-slate-200">NMDC Site Perimeter Layout (20 KM)</h2>
                            <p class="text-xs text-slate-400">Plots A through G with Gate Points and Patrol Units</p>
                        </div>
                        <button onclick="triggerBroadCastSOS()" class="bg-rose-600 hover:bg-rose-500 text-white font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 rtl:space-x-reverse shadow-lg shadow-rose-600/30">
                            <i data-lucide="siren" class="w-4 h-4"></i>
                            <span>BROADCAST SITE SOS</span>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-7 gap-2 min-h-[160px] bg-slate-950 p-3 rounded-xl border border-slate-800">
                        <div class="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-emerald-400">PLOT A</span><span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">Secure</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G1, G2, G3</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-01, P-02</div>
                        </div>
                        <div class="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-emerald-400">PLOT B</span><span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">Secure</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G4, G5, G6</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-03, P-04</div>
                        </div>
                        <div class="border border-rose-500/50 bg-rose-500/10 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-rose-400">PLOT C</span><span class="text-[10px] bg-rose-500/20 text-rose-300 px-1 rounded animate-pulse">Alert</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G7, G8, G9</div>
                            <div class="text-[10px] text-rose-400">Patrols: P-05 (En Route)</div>
                        </div>
                        <div class="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-emerald-400">PLOT D</span><span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">Secure</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G10, G11</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-06, P-07</div>
                        </div>
                        <div class="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-emerald-400">PLOT E</span><span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">Secure</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G12, G13, G14</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-08, P-09</div>
                        </div>
                        <div class="border border-amber-500/30 bg-amber-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-amber-400">PLOT F</span><span class="text-[10px] bg-amber-500/20 text-amber-300 px-1 rounded">Inspection</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G15, G16, G17</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-10, P-11</div>
                        </div>
                        <div class="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-2 flex flex-col justify-between">
                            <div class="flex justify-between items-center"><span class="font-bold text-xs text-emerald-400">PLOT G</span><span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">Secure</span></div>
                            <div class="text-[10px] text-slate-400">Gates: G18, G19, G20</div>
                            <div class="text-[10px] text-amber-400">Patrols: P-12, P-13</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TAB 2: ROSTER -->
            <section id="tab-roster" class="hidden space-y-4">
                <div class="flex justify-between items-center">
                    <h2 class="text-sm font-bold text-slate-100">Guard Shift Roster (200 Guards)</h2>
                    <span class="text-xs text-slate-400">5 Days On / 2 Days Off Rotation</span>
                </div>
                <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                    <table class="w-full text-left text-xs rtl:text-right">
                        <thead class="bg-slate-950 text-slate-400 border-b border-slate-800">
                            <tr>
                                <th class="p-3">Guard Name</th>
                                <th class="p-3">Badge ID</th>
                                <th class="p-3">Assigned Post</th>
                                <th class="p-3">Shift</th>
                                <th class="p-3">Rotation</th>
                                <th class="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800/60 text-slate-300" id="roster-table-body"></tbody>
                    </table>
                </div>
            </section>

            <!-- TAB 3: FLEET -->
            <section id="tab-fleet" class="hidden space-y-4">
                <h2 class="text-sm font-bold text-slate-100">Patrol Vehicle Fleet (18 Patrols)</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" id="fleet-grid"></div>
            </section>

            <!-- TAB 4: INCIDENTS -->
            <section id="tab-incidents" class="hidden space-y-4">
                <h2 class="text-sm font-bold text-slate-100">Active Incident Escalation Log</h2>
                <div class="space-y-3" id="incident-list-container"></div>
            </section>

            <!-- TAB 5: HANDOVER -->
            <section id="tab-handover" class="hidden space-y-4">
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 max-w-xl mx-auto">
                    <h2 class="text-sm font-bold text-slate-100">Digital Shift Handover</h2>
                    <div class="space-y-2 text-xs">
                        <label class="text-slate-400 block">Supervisor Handover Remarks</label>
                        <textarea rows="4" placeholder="Enter notes..." class="w-full bg-slate-950 border border-slate-800 p-2 rounded text-slate-200 outline-none"></textarea>
                    </div>
                    <button onclick="alert('Handover submitted successfully!')" class="bg-emerald-600 text-white font-semibold text-xs px-4 py-2 rounded">Submit Handover</button>
                </div>
            </section>

        </main>
    </div>

    <!-- DB Settings Modal -->
    <div id="settings-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-md p-4 space-y-3 shadow-2xl">
            <h3 class="font-bold text-sm text-slate-100">Supabase API Settings</h3>
            <div class="space-y-2 text-xs">
                <input id="cfg-supabase-url" type="text" placeholder="Project URL" class="w-full bg-slate-950 border border-slate-800 px-3 py-2 rounded text-slate-200 font-mono">
                <input id="cfg-supabase-key" type="password" placeholder="Anon Key" class="w-full bg-slate-950 border border-slate-800 px-3 py-2 rounded text-slate-200 font-mono">
            </div>
            <div class="flex justify-end space-x-2 rtl:space-x-reverse">
                <button onclick="closeSettingsModal()" class="px-3 py-1.5 rounded text-xs bg-slate-800 text-slate-300">Cancel</button>
                <button onclick="saveSupabaseConfig()" class="px-3 py-1.5 rounded text-xs bg-amber-500 text-slate-950 font-bold">Save</button>
            </div>
        </div>
    </div>

    <!-- JavaScript Script Engine -->
    <script>
        let currentLang = 'en';

        const mockRoster = [
            { name: "Saad Al-Khalaf", badge: "SEC-001", post: "Command & Control Center", shift: "Shift 1 (06:00 - 14:00)", rotation: "ON (Day 3/5)", status: "Active" },
            { name: "Tariq Mansoor", badge: "SEC-042", post: "Plot A - Gate 1", shift: "Shift 1 (06:00 - 14:00)", rotation: "ON (Day 1/5)", status: "Active" },
            { name: "Khaled Al-Ghamdi", badge: "SEC-089", post: "Plot C - Gate 7", shift: "Shift 2 (14:00 - 22:00)", rotation: "OFF (Rest Day)", status: "Off Duty" },
            { name: "Youssef Ibrahim", badge: "SEC-112", post: "Patrol Fleet P-05", shift: "Shift 1 (06:00 - 14:00)", rotation: "ON (Day 5/5)", status: "Active" }
        ];

        const mockFleet = [
            { id: "P-01", status: "Active", driver: "Ahmad Suleiman", fuel: 85, odo: "42,100 KM", color: "emerald", plot: "Plot A" },
            { id: "P-05", status: "Active", driver: "Youssef Ibrahim", fuel: 60, odo: "38,920 KM", color: "emerald", plot: "Plot C" },
            { id: "P-09", status: "Standby", driver: "Unassigned (No Driver)", fuel: 100, odo: "15,400 KM", color: "amber", plot: "Plot E" },
            { id: "P-14", status: "Maintenance", driver: "Out of Service", fuel: 20, odo: "89,300 KM", color: "rose", plot: "Workshop" }
        ];

        const mockIncidents = [
            { id: "INC-102", title: "Fence Mesh Disconnection Near Gate 8", plot: "Plot C", severity: "Level 2", status: "Investigating", reporter: "Plot C Supervisor", time: "10:15 AM" },
            { id: "INC-101", title: "Unauthorized Delivery Truck Access Attempt", plot: "Plot F", severity: "Level 1", status: "Resolved", reporter: "Gate 15 Guard", time: "08:30 AM" }
        ];

        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
                lucide.createIcons();
            }
            renderRoster();
            renderFleet();
            renderIncidents();
        });

        function switchTab(tabId) {
            ['dashboard', 'roster', 'fleet', 'incidents', 'handover'].forEach(id => {
                const sec = document.getElementById(`tab-${id}`);
                const nav = document.getElementById(`nav-${id}`);
                if (sec) sec.classList.add('hidden');
                if (nav) {
                    nav.classList.remove('bg-amber-500/10', 'text-amber-400', 'border', 'border-amber-500/20');
                    nav.classList.add('text-slate-400');
                }
            });

            const activeSec = document.getElementById(`tab-${tabId}`);
            const activeNav = document.getElementById(`nav-${tabId}`);
            if (activeSec) activeSec.classList.remove('hidden');
            if (activeNav) {
                activeNav.classList.add('bg-amber-500/10', 'text-amber-400', 'border', 'border-amber-500/20');
                activeNav.classList.remove('text-slate-400');
            }
        }

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            document.getElementById('lang-btn-text').innerText = currentLang === 'ar' ? 'English' : 'العربية';
        }

        function renderRoster() {
            const body = document.getElementById('roster-table-body');
            if (!body) return;
            body.innerHTML = mockRoster.map(g => `
                <tr class="hover:bg-slate-800/30">
                    <td class="p-3 font-semibold text-slate-100">${g.name}</td>
                    <td class="p-3 font-mono text-slate-400">${g.badge}</td>
                    <td class="p-3">${g.post}</td>
                    <td class="p-3 text-slate-400">${g.shift}</td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] ${g.rotation.includes('OFF') ? 'bg-slate-800 text-slate-400' : 'bg-emerald-500/10 text-emerald-400'}">${g.rotation}</span></td>
                    <td class="p-3"><span class="px-2 py-0.5 rounded text-[10px] ${g.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'}">${g.status}</span></td>
                </tr>
            `).join('');
        }

        function renderFleet() {
            const grid = document.getElementById('fleet-grid');
            if (!grid) return;
            grid.innerHTML = mockFleet.map(f => `
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="font-bold text-sm text-slate-100">${f.id}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-${f.color}-500/10 text-${f.color}-400 border border-${f.color}-500/20">${f.status}</span>
                    </div>
                    <div class="text-xs text-slate-400">Driver: <span class="text-slate-200">${f.driver}</span></div>
                    <div class="text-xs text-slate-400">Location: <span class="text-slate-200">${f.plot}</span></div>
                    <div class="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-500 font-mono">
                        <span>Fuel: ${f.fuel}%</span>
                        <span>Odo: ${f.odo}</span>
                    </div>
                </div>
            `).join('');
        }

        function renderIncidents() {
            const container = document.getElementById('incident-list-container');
            if (!container) return;
            container.innerHTML = mockIncidents.map(i => `
                <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between">
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${i.severity === 'Level 2' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}">${i.severity}</span>
                            <span class="font-bold text-xs text-slate-200">${i.id}: ${i.title}</span>
                        </div>
                        <div class="text-xs text-slate-400">${i.plot} • Reported by ${i.reporter} at ${i.time}</div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg ${i.status === 'Investigating' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}">${i.status}</span>
                </div>
            `).join('');
        }

        function triggerBroadCastSOS() {
            alert('🚨 EMERGENCY BROADCAST: SOS alert dispatched across all plots!');
        }

        function openSettingsModal() {
            document.getElementById('settings-modal').classList.remove('hidden');
        }

        function closeSettingsModal() {
            document.getElementById('settings-modal').classList.add('hidden');
        }

        function saveSupabaseConfig() {
            const url = document.getElementById('cfg-supabase-url').value;
            const key = document.getElementById('cfg-supabase-key').value;
            if (url && key) {
                localStorage.setItem('supabase_url', url);
                localStorage.setItem('supabase_key', key);
                document.getElementById('db-status-text').innerText = 'Cloud DB Connected';
            }
            closeSettingsModal();
        }
    </script>
</body>
</html>

function renderFleetModule() {
    const container = document.getElementById('tab-fleet');
    if (!container) return;

    container.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-sm font-bold text-slate-100">Patrol Fleet & Equipment Manager (13 Nissan X-Trails Baseline)</h2>
                <p class="text-xs text-slate-400">10 Operational Patrol Allocations + 3 Reserve Units • Pre-Shift Handover Inspections</p>
            </div>
            <button onclick="openVehicleHandoverModal()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs flex items-center space-x-1.5 rtl:space-x-reverse">
                <i data-lucide="clipboard-check" class="w-4 h-4"></i>
                <span>Start Vehicle Inspection Handover</span>
            </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3" id="fleet-cards-grid"></div>
    `;

    renderFleetCards();
    if (window.lucide) { lucide.createIcons(); }
}

function renderFleetCards() {
    const grid = document.getElementById('fleet-cards-grid');
    if (!grid) return;

    grid.innerHTML = AppState.fleet.map(v => `
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div class="flex items-center justify-between">
                <span class="font-bold text-sm text-amber-400 font-mono">${v.id}</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${v.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : (v.status === 'Defective' ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-400')}">${v.status}</span>
            </div>
            <div class="text-xs font-semibold text-slate-200">${v.role}</div>
            <div class="text-[11px] text-slate-400">Driver: <span class="text-slate-200">${v.driver}</span></div>
            <div class="pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-500">
                <span>Fuel: ${v.fuel}%</span>
                <span>Dashcam: <strong class="${v.dashcam === 'OK' ? 'text-emerald-400' : 'text-rose-400'}">${v.dashcam}</strong></span>
                <span>BRAVO: ${v.bravo}</span>
            </div>
        </div>
    `).join('');
}

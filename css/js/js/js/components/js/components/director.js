function renderDirectorModule() {
    const container = document.getElementById('tab-director');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-900 border border-indigo-500/30 rounded-2xl p-4 space-y-3 relative overflow-hidden">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <i data-lucide="sparkles" class="w-5 h-5 text-indigo-400"></i>
                    <h2 class="text-sm font-bold text-indigo-200">AI Operational Briefing for Director of Security</h2>
                </div>
                <span class="text-[10px] text-slate-500 font-mono">Generated 5 mins ago</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
                Critical post coverage is currently at <strong>96.4%</strong>. Gate C3 in Plot C experienced an unannounced officer absence at 07:15 AST; relief deployment is in progress. Vehicle <strong>NM-X11</strong> failed pre-shift dashcam inspection and has been quarantined.
            </p>
        </div>
    `;
    if (window.lucide) { lucide.createIcons(); }
}

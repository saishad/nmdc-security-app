function renderRosterModule() {
    const container = document.getElementById('tab-roster');
    if (!container) return;

    container.innerHTML = `
        <div class="flex justify-between items-center">
            <h2 class="text-sm font-bold text-slate-100">Guard Deployment & Shift Roster</h2>
            <span class="text-xs text-slate-400">Shift 1 Active (06:00 – 14:00 AST)</span>
        </div>
    `;
    if (window.lucide) { lucide.createIcons(); }
}

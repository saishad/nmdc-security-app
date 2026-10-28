function renderIncidentsModule() {
    const container = document.getElementById('tab-incidents');
    if (!container) return;

    container.innerHTML = `
        <div class="flex justify-between items-center">
            <h2 class="text-sm font-bold text-slate-100">Incident & Case Management History</h2>
        </div>
    `;
    if (window.lucide) { lucide.createIcons(); }
}

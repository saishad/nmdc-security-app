document.addEventListener('DOMContentLoaded', () => {
    // Initial Render of All Component Modules
    renderDirectorModule();
    renderCCCModule();
    renderFleetModule();
    renderRosterModule();
    renderIncidentsModule();
    renderCopilotModule();

    if (window.lucide) { lucide.createIcons(); }
});

function switchTab(tabId) {
    ['director', 'ccc', 'fleet', 'roster', 'incidents', 'copilot'].forEach(id => {
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

function changeRole(role) {
    AppState.currentRole = role;
    alert(`Switched operational context to: ${role}`);
}

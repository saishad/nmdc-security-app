function renderCopilotModule() {
    const container = document.getElementById('tab-copilot');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-slate-900 border border-indigo-500/30 rounded-2xl p-5 space-y-4">
            <h2 class="text-sm font-bold text-indigo-200">Security Operations Copilot</h2>
        </div>
    `;
    if (window.lucide) { lucide.createIcons(); }
}

// Central Data Store
const AppState = {
    currentRole: 'Director',
    fleet: [
        { id: "NM-X01", role: "Sector Patrol North A", status: "Active", driver: "Ahmad Suleiman", fuel: 85, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X02", role: "Sector Patrol North B", status: "Active", driver: "Sultan Otaibi", fuel: 90, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X03", role: "Sector Patrol South C", status: "Active", driver: "Youssef Ibrahim", fuel: 75, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X04", role: "Sector Patrol South D", status: "Active", driver: "Bader Mutairi", fuel: 80, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X05", role: "Sector Patrol West E", status: "Active", driver: "Hamad Qahtani", fuel: 95, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X06", role: "Sector Patrol West F", status: "Active", driver: "Saleh Zahrani", fuel: 70, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X07", role: "Sector Patrol West G", status: "Active", driver: "Waleed Ruwaili", fuel: 85, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X08", role: "Gate Support Patrol", status: "Active", driver: "Fahad Harbi", fuel: 90, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X09", role: "CCC Rapid Response", status: "Active", driver: "Saad Al-Khalaf", fuel: 100, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X10", role: "Supervisor Mobile Unit", status: "Active", driver: "Tariq Mansoor", fuel: 80, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X11", role: "Quarantined / Repair", status: "Defective", driver: "Unassigned", fuel: 40, dashcam: "FAULT", bravo: "Offline" },
        { id: "NM-X12", role: "Reserve Unit 2", status: "Reserve", driver: "Unassigned", fuel: 100, dashcam: "OK", bravo: "Tested" },
        { id: "NM-X13", role: "Reserve Unit 3 (Deployed)", status: "Active", driver: "Rayan Malki", fuel: 100, dashcam: "OK", bravo: "Tested" }
    ],
    incidents: [
        { id: "INC-2026-0412", title: "Attempted Gate Bypass at Gate B2", location: "Plot B Perimeter", severity: "Level 2", status: "Under Investigation" }
    ]
};

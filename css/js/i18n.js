const translations = {
    en: {
        app_title: "New Murabba Delivery Security Operations",
        app_subtitle: "Construction Security Governance • CCC Dispatch • 24/7 Site Assurance",
        nav_director: "Director Overview",
        nav_ccc: "CCC Operations & Dispatch",
        nav_fleet: "Vehicles & Equipment (13)",
        nav_roster: "Deployment & Shifts",
        nav_incidents: "Incidents & Investigations",
        nav_copilot: "Security Operations Copilot",
        lbl_active_shift: "Active Shift"
    },
    ar: {
        app_title: "منصة عمليات الأمن وتسليم المخطط - المربع الجديد",
        app_subtitle: "حكومة أمن الإنشاءات • إرسال مركز التحكم • ضمان الموقع 24/7",
        nav_director: "نظرة عامة للمدير",
        nav_ccc: "عمليات وإرسال مركز التحكم (CCC)",
        nav_fleet: "المركبات والمعدات (13)",
        nav_roster: "انتشار القوات والورديات",
        nav_incidents: "البلاغات والتحقيقات",
        nav_copilot: "مساعد العمليات الأمنية AI",
        lbl_active_shift: "الوردية الحالية"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-btn-text').innerText = currentLang === 'ar' ? 'English' : 'العربية';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

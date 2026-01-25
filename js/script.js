// --- Data ---
const appData = {
    "site": {
        "companyName": "株式会社国土調査設計事務所",
        "catch": "測量と補償で、公共事業の“確実さ”を支える。",
        "area": "奈良県大和郡山市小泉町187-1",
        "registrations": [
            { "label": "測量業登録", "value": "登録番号（確認中）" },
            { "label": "補償コンサルタント登録", "value": "登録番号（確認中）" }
        ],
        "qualified": [
            { "name": "測量士", "count": 3 }
        ],
        "contact": {
            "tel": "0742-00-0000",
            "hours": "平日 9:00-18:00",
            "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfDummyFormID/viewform"
        }
    },
    // Services
    "services": [
        {
            "id": "survey",
            "title": "測量業務",
            "enTitle": "Surveying",
            "summary": "境界・現況の把握を基盤に、説明責任に耐える成果を作成します。",
            "deliverables": ["基準点測量", "現況平面図作成", "用地測量"]
        },
        {
            "id": "compensation",
            "title": "補償コンサルタント",
            "enTitle": "Compensation",
            "summary": "権利関係・調査の厳密性を担保し、合意形成の前提を整えます。",
            "deliverables": ["土地調査", "物件調査", "補償額算定"]
        }
    ],
    // Works - Note: Images using root-relative path (Updated to JPG)
    "works": [
        {
            "id": "w-2024-001",
            "year": 2024,
            "type": "survey",
            "area": "奈良市",
            "client": "奈良県",
            "title": "一級河川改修に伴う路線測量",
            "image": "/images/work_survey.jpg",
            "summary": "河川改修計画の基礎資料として、詳細な現況把握と路線測量を実施。",
            "details": {
                "issue": "未整備区間の境界確定と現況把握",
                "approach": "ドローン測量と地上測量のハイブリッド実施",
                "deliverables": ["平面縦断図", "横断図", "用地幅杭設置"],
                "notes": "近隣住民への説明用資料も作成"
            }
        },
        {
            "id": "w-2024-002",
            "year": 2024,
            "type": "compensation",
            "area": "天理市",
            "client": "国土交通省",
            "title": "国道バイパス工事に伴う物件調査",
            "image": "/images/work_compensation.jpg",
            "summary": "木造家屋および工作物の移転料算定のための詳細調査。",
            "details": {
                "issue": "多数の権利者が関わる複雑な物件調査",
                "approach": "全棟立会いによる詳細記録と図面化",
                "deliverables": ["物件調書", "移転工法検討書", "補償算定書"],
                "notes": "プライバシーに配慮した調査実施"
            }
        },
        {
            "id": "w-2023-001",
            "year": 2023,
            "type": "survey",
            "area": "橿原市",
            "client": "橿原市",
            "title": "都市計画道路整備に伴う用地測量",
            "image": "/images/work_survey.jpg",
            "summary": "道路拡幅に必要な用地取得のための境界確定および分筆登記測量。",
            "details": {
                "issue": "古い公図と現況の不整合調整",
                "approach": "徹底した資料調査と地元精通者への聞き取り",
                "deliverables": ["用地実測図", "地積測量図", "境界確認書"],
                "notes": "早期着工に向けた迅速な成果納品"
            }
        },
        {
            "id": "w-2023-002",
            "year": 2023,
            "type": "compensation",
            "area": "桜井市",
            "client": "奈良県",
            "title": "河川改修に伴う事業損失調査",
            "image": "/images/work_compensation.jpg",
            "summary": "工事振動等による近隣家屋への事前事後調査。",
            "details": {
                "issue": "工事影響範囲の特定と現状証拠保全",
                "approach": "写真撮影と傾斜測定による客観的記録",
                "deliverables": ["事前調査報告書", "事後調査報告書", "写真帳"],
                "notes": "住民不安払拭のための丁寧な説明"
            }
        },
        {
            "id": "w-2022-001",
            "year": 2022,
            "type": "survey",
            "area": "五條市",
            "client": "五條市",
            "title": "防災公園整備に伴う基準点測量",
            "image": "/images/work_survey.jpg",
            "summary": "広域的な公園整備計画の基準となる4級基準点の設置。",
            "details": {
                "issue": "高低差のある山間部での精度確保",
                "approach": "GNSS測量機の活用による効率化",
                "deliverables": ["基準点網図", "成果簿", "点の記"],
                "notes": "後続の工事測量でも使用可能な恒久標識設置"
            }
        }
    ],
    // Careers
    "careers": {
        "roles": [
            {
                "id": "role-surveyor",
                "title": "測量技術者",
                "summary": "現場計測と成果整理を通じ、公共事業の根拠をつくる。",
                "requirements": ["普通自動車免許（AT限定可）", "測量士補あれば尚可"]
            },
            {
                "id": "role-comp",
                "title": "補償調査スタッフ",
                "summary": "調査・資料作成を通じ、合意形成の前提を整える。",
                "requirements": ["PC基本操作（Word, Excel）", "未経験歓迎"]
            }
        ],
        "numbers": [
            { "label": "測量士", "value": "3名" },
            { "label": "年間休日", "value": "120日" },
            { "label": "平均残業", "value": "確認中" }
        ]
    }
};

// --- State ---
let bookmarkedWorks = [];
try {
    bookmarkedWorks = JSON.parse(localStorage.getItem('bookmarkedWorks') || '[]');
} catch (e) {
    console.error('Failed to parse bookmarkedWorks', e);
}

let recentWorks = [];
try {
    recentWorks = JSON.parse(localStorage.getItem('recentWorks') || '[]');
} catch (e) {
    console.error('Failed to parse recentWorks', e);
}
let currentFilter = 'all';
let bookmarkFilter = false;

// --- Core ---
function initApp() {
    renderCommonElements();

    // Page Detection based on Container ID
    if (document.getElementById('page-home')) {
        renderHome();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.add('header-transparent');
            header.classList.remove('bg-brandNavy');
        }
        document.getElementById('page-home').classList.add('active');
    }
    else if (document.getElementById('page-works')) {
        renderWorks();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.add('header-transparent');
            header.classList.remove('bg-brandNavy');
        }
        document.getElementById('page-works').classList.add('active');
    }
    else if (document.getElementById('page-careers')) {
        renderCareers();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.add('header-transparent');
            header.classList.remove('bg-brandNavy');
        }
        document.getElementById('page-careers').classList.add('active');
    }
    else if (document.getElementById('page-contact')) {
        renderContact();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.remove('header-transparent');
            header.classList.add('bg-brandNavy');
        }
        document.getElementById('page-contact').classList.add('active');
    }
    else if (document.getElementById('page-privacy')) {
        renderPrivacy();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.remove('header-transparent');
            header.classList.add('bg-brandNavy');
        }
        document.getElementById('page-privacy').classList.add('active');
    }
    else if (document.getElementById('page-sitemap')) {
        renderSitemap();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.remove('header-transparent');
            header.classList.add('bg-brandNavy');
        }
        document.getElementById('page-sitemap').classList.add('active');
    }

    // Active Nav State based on URL
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('active', 'text-brandGold');
        const href = el.getAttribute('href');
        if (href === '/' && (path === '/' || path.endsWith('index.html'))) {
            el.classList.add('active', 'text-brandGold');
        } else if (href !== '/' && path.includes(href)) {
            el.classList.add('active', 'text-brandGold');
        }
    });

    if (window.lucide) lucide.createIcons();
    setTimeout(initScrollReveal, 100);
}

function renderCommonElements() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const areaEl = document.getElementById('footer-area');
    if (areaEl) areaEl.textContent = appData.site.area;

    const telEl = document.getElementById('footer-tel');
    if (telEl) telEl.textContent = appData.site.contact.tel;

    const regList = document.getElementById('footer-registrations');
    if (regList) {
        regList.innerHTML = '';
        appData.site.registrations.forEach(r => {
            const li = document.createElement('li');
            li.className = 'text-gray-400';
            li.innerHTML = `${r.label} <span class="text-gray-500 text-xs ml-1 block">${r.value}</span>`;
            regList.appendChild(li);
        });
    }
}

// --- Scroll Reveal (Optimized with IntersectionObserver) ---
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Activate when 10% visible
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// --- Header Scroll Logic (Optimized with requestAnimationFrame) ---
const scrollTopBtn = document.getElementById('scroll-to-top');
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader(scrollY) {
    const header = document.getElementById('main-header');
    if (header) {
        if (scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        if (scrollY > lastScrollY && scrollY > 100) header.classList.add('hide-header');
        else header.classList.remove('hide-header');
    }
    if (scrollTopBtn) {
        if (scrollY > 300) scrollTopBtn.classList.remove('opacity-0', 'invisible');
        else scrollTopBtn.classList.add('opacity-0', 'invisible');
    }
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeader(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
});

// --- Page Renderers ---

function renderHome() {
    const container = document.getElementById('page-home');
    const { site, services, works } = appData;

    // Works Preview (Updated Paths)
    const worksHtml = works.slice(0, 3).map((w, index) => `
        <a href="/works/" class="reveal delay-${index * 100} group relative block h-80 overflow-hidden bg-gray-100">
            <img src="${w.image}" alt="${w.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
            <div class="absolute inset-0 bg-brandNavy/40 transition duration-500 group-hover:bg-brandNavy/20"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 text-white">
                <div class="text-xs font-mono mb-2 opacity-80">${w.year} / ${w.type === 'survey' ? 'SURVEY' : 'COMPENSATION'}</div>
                <h3 class="text-xl font-bold font-sans leading-snug group-hover:underline decoration-brandGold underline-offset-4">${w.title}</h3>
            </div>
        </a>
    `).join('');

    // Service Images (Updated Paths to JPG)
    container.innerHTML = `
        <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="/images/hero.jpg" class="w-full h-full object-cover animate-[scale-in_20s_infinite_alternate]" style="animation: scale-in 30s linear infinite alternate;">
                <div class="absolute inset-0 bg-gradient-to-r from-brandNavy/80 via-brandNavy/40 to-brandNavy/20"></div>
            </div>
            
            <div class="relative z-10 text-center text-white container mx-auto px-4 reveal active">
                <p class="font-en text-brandGold tracking-[0.2em] mb-4 text-sm md:text-base font-bold">PROFESSIONAL SURVEY & DESIGN</p>
                <h1 class="text-4xl md:text-7xl font-bold font-sans mb-8 leading-tight">
                    測量と補償で、<br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">“確実さ”</span>を支える。
                </h1>
                <p class="text-gray-300 max-w-xl mx-auto mb-10 text-sm md:text-base leading-relaxed tracking-wide">
                    ${site.catch}
                </p>
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="/works/" class="bg-brandGold text-brandNavy px-8 py-4 font-bold font-en tracking-widest hover:bg-white transition-colors">VIEW WORKS</a>
                    <a href="/contact/" class="border border-white text-white px-8 py-4 font-bold font-en tracking-widest hover:bg-white hover:text-brandNavy transition-colors">CONTACT US</a>
                </div>
            </div>
            
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span class="text-[10px] text-white/50 font-en tracking-widest">SCROLL</span>
                <div class="w-[1px] h-12 bg-white/30"></div>
            </div>
        </section>

        <!-- Trust Section -->
        <div class="bg-white border-b border-line py-8">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-500 font-en tracking-wide reveal">
                ${site.registrations.map(r => `
                    <div class="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <i data-lucide="award" class="text-brandGold w-5 h-5 flex-shrink-0"></i>
                        <span class="font-bold text-brandNavy font-sans">${r.label}</span>
                    </div>
                `).join('')}
                <div class="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                     <i data-lucide="users" class="text-brandGold w-5 h-5 flex-shrink-0"></i>
                    <span class="font-bold text-brandNavy font-sans">測量士 ${site.qualified[0].count}名在籍</span>
                </div>
            </div>
        </div>

        <section class="py-24 md:py-32 bg-white">
            <div class="container mx-auto px-6">
                <!-- Service Content -->
                <div class="flex flex-col md:flex-row gap-16 items-start">
                     <div class="md:w-1/3 reveal">
                        <h2 class="text-4xl md:text-5xl font-en font-bold text-brandNavy mb-6">SERVICE</h2>
                        <div class="w-16 h-1 bg-brandGold mb-8"></div>
                        <p class="text-ink leading-loose text-justify">
                            道路や河川、都市基盤。私たちの生活を支えるインフラは、正確な「測量」と、円滑な事業推進のための「補償」から始まります。<br><br>
                            最新技術と豊富な実績で、プロジェクトの根幹を支える信頼性の高いデータを提供します。
                        </p>
                    </div>
                    <div class="md:w-2/3 grid gap-12">
                         <div class="group reveal delay-100 grid md:grid-cols-2 gap-8 items-center">
                            <div class="overflow-hidden bg-gray-100 aspect-[4/3] relative">
                                <img src="/images/service_survey.jpg" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                            </div>
                            <div>
                                <div class="text-brandGold font-en font-bold text-sm tracking-widest mb-2">01. SURVEY</div>
                                <h3 class="text-2xl font-bold text-brandNavy mb-4">測量・調査</h3>
                                <p class="text-gray-500 text-sm leading-relaxed mb-6">基準点測量から用地測量まで、最新の機器と技術を駆使して高精度な成果を作成します。</p>
                            </div>
                        </div>
                        <div class="group reveal delay-200 grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div class="md:order-2 overflow-hidden bg-gray-100 aspect-[4/3] relative">
                                <img src="/images/service_compensation.jpg" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                            </div>
                            <div class="md:order-1">
                                <div class="text-brandGold font-en font-bold text-sm tracking-widest mb-2">02. COMPENSATION</div>
                                <h3 class="text-2xl font-bold text-brandNavy mb-4">補償コンサルタント</h3>
                                <p class="text-gray-500 text-sm leading-relaxed mb-6">公共事業に伴う損失補償や権利調査を行い、事業の円滑な進行と合意形成をサポートします。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 bg-paper">
            <div class="container mx-auto px-6">
                <div class="flex flex-col items-start mb-16 reveal">
                    <div>
                        <h2 class="text-4xl md:text-5xl font-en font-bold text-brandNavy mb-6">WORKS</h2>
                        <div class="w-16 h-1 bg-brandGold mb-6"></div>
                        <p class="text-gray-500">最新の実績事例</p>
                    </div>
                    <a href="/works/" class="group flex items-center gap-2 text-brandNavy font-en font-bold tracking-widest hover:text-brandGold transition-colors mt-8">
                        VIEW ALL <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform"></i>
                    </a>
                </div>
                <div class="grid md:grid-cols-3 gap-1">
                    ${worksHtml}
                </div>
            </div>
        </section>

        <section class="py-24 bg-white">
            <div class="container mx-auto px-6 max-w-4xl">
                 <div class="text-left md:text-center mb-16 reveal">
                    <h2 class="text-3xl font-en font-bold text-brandNavy mb-4">COMPANY</h2>
                    <div class="w-12 h-1 bg-brandGold md:mx-auto"></div>
                </div>
                <div class="reveal delay-100">
                    <dl class="grid md:grid-cols-12 border-t border-line">
                         <div class="md:col-span-4 py-5 font-bold text-brandNavy flex items-center">会社名</div>
                         <div class="md:col-span-8 py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center">${site.companyName}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>
                         <div class="md:col-span-4 py-5 font-bold text-brandNavy flex items-center">所在地</div>
                         <div class="md:col-span-8 py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center">${site.area}</div>
                    </dl>
                    <div class="mt-12 h-80 md:h-[450px] w-full bg-gray-100 shadow-inner rounded-sm overflow-hidden border border-line">
                        <iframe src="https://maps.google.com/maps?q=${site.area}&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-32 bg-brandNavy overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="/images/recruit.jpg" class="w-full h-full object-cover opacity-20">
                <div class="absolute inset-0 bg-brandNavy/80"></div>
            </div>
            <div class="container mx-auto px-6 relative z-10 text-center reveal">
                <h2 class="text-4xl md:text-5xl font-en font-bold text-white mb-6">RECRUIT</h2>
                <p class="text-gray-300 mb-10 text-lg tracking-wide">確実な成果を積み上げる技術者へ。</p>
                <a href="/careers/" class="inline-block bg-white text-brandNavy px-10 py-4 font-bold font-en tracking-widest hover:bg-brandGold hover:text-white transition-all duration-300">
                    JOIN US
                </a>
            </div>
        </section>
    `;
}

function renderWorks() {
    const container = document.getElementById('page-works');
    if (!container) return;

    let filteredWorks = [];
    if (appData && appData.works) {
        filteredWorks = appData.works.filter(w => {
            if (bookmarkFilter && !bookmarkedWorks.includes(w.id)) return false;
            if (currentFilter === 'all') return true;
            return w.type === currentFilter;
        });
    }

    const gridHtml = filteredWorks.map(w => {
        return `
        <div onclick="openWorkModal('${w.id}')" class="reveal cursor-pointer group">
            <div class="overflow-hidden aspect-[4/3] bg-gray-100 relative mb-4">
                <img src="${w.image}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-brandNavy"></i>
                </div>
            </div>
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-gray-400">${w.year}</span>
                <span class="text-xs font-bold tracking-wider text-brandGold uppercase">${w.type === 'survey' ? '測量' : '補償'}</span>
            </div>
            <h3 class="text-lg font-bold text-brandNavy leading-snug group-hover:text-blue-600 transition-colors">${w.title}</h3>
        </div>
    `}).join('');

    container.innerHTML = `
        <div class="pt-32 pb-20 container mx-auto px-6 min-h-screen">
            <div class="mb-16 reveal">
                <h1 class="text-5xl md:text-6xl font-en font-bold text-brandNavy mb-6">WORKS</h1>
                <div class="w-16 h-1 bg-brandGold mb-8"></div>
                <p class="text-gray-500 mb-12 leading-relaxed text-left">
                    公共測量、補償コンサルタント業務を中心に、長年にわたり蓄積された技術と信頼の実績をご紹介します。<br>
                    道路、河川、地籍調査など、多岐にわたるプロジェクトを通じて、社会基盤の整備に貢献しています。
                </p>
                <div class="flex flex-wrap gap-8 border-b border-line pb-4 font-en text-sm font-bold tracking-widest">
                    <button type="button" onclick="setFilter('all')" class="transition-colors ${currentFilter === 'all' ? 'text-brandNavy' : 'text-gray-400 hover:text-brandNavy'}">すべて</button>
                    <button type="button" onclick="setFilter('survey')" class="transition-colors ${currentFilter === 'survey' ? 'text-brandNavy' : 'text-gray-400 hover:text-brandNavy'}">測量</button>
                    <button type="button" onclick="setFilter('compensation')" class="transition-colors ${currentFilter === 'compensation' ? 'text-brandNavy' : 'text-gray-400 hover:text-brandNavy'}">補償</button>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                ${gridHtml}
            </div>
        </div>
    `;

    setTimeout(initScrollReveal, 50);
}

function renderCareers() {
    const container = document.getElementById('page-careers');
    const { careers } = appData;

    const rolesHtml = careers.roles.map(role => `
        <div class="reveal bg-white p-10 border border-line hover:border-brandNavy transition duration-500 group">
            <h3 class="text-2xl font-bold text-brandNavy mb-4 group-hover:text-brandGold transition-colors">${role.title}</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">${role.summary}</p>
            <div class="space-y-4">
                <div class="text-xs font-en font-bold text-gray-400 tracking-widest uppercase">Requirements</div>
                <ul class="space-y-2 text-sm text-brandNavy">
                    ${role.requirements.map(r => `<li class="flex items-center gap-2"><span class="w-1 h-1 bg-brandNavy rounded-full"></span> ${r}</li>`).join('')}
                </ul>
            </div>
            <div class="mt-8 pt-6 border-t border-line">
                <button onclick="openCareerModal('${role.id}')" class="text-sm font-bold text-brandNavy flex items-center gap-2 hover:text-brandGold transition-colors">
                    詳しく見る <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="relative h-[60vh] bg-brandNavy flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 opacity-40">
                 <img src="/images/recruit.jpg" class="w-full h-full object-cover">
            </div>
            <div class="relative z-10 text-center text-white reveal active">
                <h1 class="text-5xl md:text-7xl font-en font-bold mb-6">CAREERS</h1>
                <p class="text-lg tracking-widest">未来を測る、仲間を募集。</p>
            </div>
        </div>

        <div class="container mx-auto px-6 py-24">
            <div class="grid md:grid-cols-12 gap-12 items-center mb-24 reveal">
                <div class="md:col-span-5">
                    <h2 class="text-3xl md:text-4xl font-bold text-brandNavy mb-8 leading-tight">
                        公共事業の最前線で<br>技術を磨く。
                    </h2>
                    <p class="text-gray-600 leading-loose mb-8 text-justify">
                        私たちの成果物は、地図に残り、社会インフラの基礎となります。
                    </p>
                </div>
                 <div class="md:col-span-7 relative">
                    <div class="relative overflow-hidden rounded-sm shadow-2xl group">
                        <img src="/images/recruit.jpg" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>

            <div class="mb-24">
                <h2 class="text-2xl font-bold text-brandNavy mb-10 tracking-widest">募集要項</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    ${rolesHtml}
                </div>
            </div>

            <div class="relative bg-brandNavy text-white p-8 md:p-16 rounded-sm text-center shadow-xl overflow-hidden group reveal">
                <div class="absolute inset-0 z-0">
                    <img src="/images/recruit.jpg" class="w-full h-full object-cover opacity-50">
                    <div class="absolute inset-0 bg-brandNavy/50"></div>
                </div>
                <div class="relative z-10">
                    <h2 class="text-2xl font-bold mb-4">Entry / Contact</h2>
                    <p class="text-gray-100 mb-8 max-w-lg mx-auto">採用についてのお問い合わせはこちら</p>
                    <a href="/contact/?type=recruit" class="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 font-bold hover:bg-white hover:text-blue-600 transition duration-300">
                        応募フォームへ <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    const container = document.getElementById('page-contact');
    const { site } = appData;

    const params = new URLSearchParams(window.location.search);
    let currentType = params.get('type') || 'biz';

    let buttonLabel = 'お問い合わせフォームへ';
    let helperText = 'フォームよりお問い合わせ内容をお送りください。';

    if (currentType === 'recruit') {
        buttonLabel = '採用応募フォームへ';
        helperText = '履歴書等のデータはフォーム内でアップロード、または後ほど担当者よりご案内いたします。';
    } else if (currentType === 'quote') {
        buttonLabel = 'お見積り依頼フォームへ';
        helperText = '概算のお見積り作成に必要な情報をご入力ください。';
    }

    container.innerHTML = `
        <div class="pt-32 pb-24 container mx-auto px-6 min-h-screen max-w-4xl">
            <div class="mb-16 reveal text-center">
                <h1 class="text-4xl md:text-5xl font-en font-bold text-brandNavy mb-6">CONTACT</h1>
                <p class="text-gray-500">お問い合わせ</p>
            </div>

            <div class="bg-white border border-line p-8 md:p-12 reveal delay-100">
                <div class="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">INQUIRY TYPE</label>
                        <div class="space-y-3">
                            <button onclick="updateContactType('biz')" class="w-full text-left p-4 border transition-all duration-300 ${currentType === 'biz' ? 'border-brandNavy bg-brandNavy text-white' : 'border-line hover:border-brandNavy'}">
                                業務のご相談
                            </button>
                            <button onclick="updateContactType('quote')" class="w-full text-left p-4 border transition-all duration-300 ${currentType === 'quote' ? 'border-brandNavy bg-brandNavy text-white' : 'border-line hover:border-brandNavy'}">
                                お見積り依頼
                            </button>
                            <button onclick="updateContactType('recruit')" class="w-full text-left p-4 border transition-all duration-300 ${currentType === 'recruit' ? 'border-brandNavy bg-brandNavy text-white' : 'border-line hover:border-brandNavy'}">
                                採用について
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center">
                        <div class="bg-gray-50 p-8 h-full flex flex-col justify-center text-center">
                            <div class="text-brandGold mb-4"><i data-lucide="phone" class="w-8 h-8 mx-auto"></i></div>
                            <div class="text-2xl font-bold text-brandNavy font-mono mb-2">${site.contact.tel}</div>
                            <div class="text-xs text-gray-400">${site.contact.hours}</div>
                        </div>
                    </div>
                </div>
                <div class="text-center pt-8 border-t border-line">
                    <a href="${site.contact.formUrl}" target="_blank" class="inline-flex items-center gap-3 bg-brandNavy text-white px-10 py-5 font-bold tracking-widest hover:bg-brandGold transition-colors group">
                        ${buttonLabel} <i data-lucide="external-link" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <p class="text-xs text-gray-400 mt-4">${helperText}</p>
                </div>
            </div>
        </div>
    `;
}

function renderPrivacy() {
    const container = document.getElementById('page-privacy');
    const { site } = appData;
    container.innerHTML = `
        <div class="pt-32 pb-24 container mx-auto px-6 min-h-screen max-w-3xl">
            <div class="mb-16 reveal text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-brandNavy mb-6">プライバシーポリシー</h1>
                <p class="text-gray-500">個人情報保護方針</p>
            </div>
            <div class="bg-white border border-line p-8 md:p-16 reveal delay-100 text-sm leading-relaxed text-gray-600 space-y-8">
                <section>
                    <h3 class="text-lg font-bold text-brandNavy mb-4">1. 個人情報の定義</h3>
                    <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。</p>
                </section>
                
                <section>
                    <h3 class="text-lg font-bold text-brandNavy mb-4">2. 個人情報の収集方法</h3>
                    <p>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、お問い合わせフォームや採用応募フォームを通じて送信された情報も適正に管理いたします。</p>
                </section>

                <section>
                    <h3 class="text-lg font-bold text-brandNavy mb-4">3. 個人情報の利用目的</h3>
                    <p>当社が個人情報を収集・利用する目的は以下のとおりです。</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>採用活動における選考および連絡のため</li>
                        <li>業務の遂行に伴う連絡、図書等の送付のため</li>
                    </ul>
                </section>

                <section>
                    <h3 class="text-lg font-bold text-brandNavy mb-4">4. 個人情報の第三者提供</h3>
                    <p>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1">
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ul>
                </section>

                <section>
                    <h3 class="text-lg font-bold text-brandNavy mb-4">5. お問い合わせ窓口</h3>
                    <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                    <div class="mt-4 p-4 bg-gray-50 border border-line">
                        <p class="font-bold text-brandNavy">${site.companyName}</p>
                        <p>住所：${site.area}</p>
                        <p>電話番号：${site.contact.tel}</p>
                    </div>
                </section>
            </div>
        </div>
    `;
}

function renderSitemap() {
    const container = document.getElementById('page-sitemap');
    container.innerHTML = `
        <div class="pt-32 pb-24 container mx-auto px-6 min-h-screen max-w-3xl">
            <div class="mb-16 reveal text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-brandNavy mb-6">サイトマップ</h1>
                <p class="text-gray-500">SITEMS</p>
            </div>
            <div class="bg-white border border-line p-8 md:p-16 reveal delay-100">
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-xl font-bold text-brandNavy mb-6 border-b border-brandGold pb-2 inline-block">MAIN MENU</h3>
                        <ul class="space-y-4">
                            <li><a href="/" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="home" class="w-4 h-4"></i> ホーム</a></li>
                            <li><a href="/works/" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="briefcase" class="w-4 h-4"></i> 業務実績</a></li>
                            <li><a href="/careers/" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="users" class="w-4 h-4"></i> 採用情報</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 class="text-xl font-bold text-brandNavy mb-6 border-b border-brandGold pb-2 inline-block">SUPPORT</h3>
                        <ul class="space-y-4">
                            <li><a href="/contact/" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="mail" class="w-4 h-4"></i> お問い合わせ</a></li>
                             <li><a href="/privacy/" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="shield" class="w-4 h-4"></i> プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.setFilter = (type) => {
    currentFilter = type;
    renderWorks();
};

window.openCareerModal = (id) => {
    const role = appData.careers.roles.find(r => r.id === id);
    if (!role) return;
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="h-64 md:h-full bg-gray-100"><img src="/images/recruit.jpg" class="w-full h-full object-cover"></div>
        <div class="p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-full">
            <h2 class="text-2xl md:text-3xl font-bold text-brandNavy mb-4">${role.title}</h2>
            <p class="text-gray-600 mb-6">${role.summary}</p>
            <div class="mt-8 pt-8 border-t border-line">
                 <a href="/contact/?type=recruit" onclick="closeModal()" class="block w-full text-center bg-brandNavy text-white py-4 font-bold tracking-widest hover:bg-brandGold transition-colors">エントリー</a>
            </div>
        </div>
    `;
    const modal = document.getElementById('work-modal');
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); document.getElementById('modal-panel').classList.remove('scale-95', 'opacity-0'); }, 10);
    if (window.lucide) lucide.createIcons();
};

window.openWorkModal = (id) => {
    const w = appData.works.find(i => i.id === id);
    if (!w) return;
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="h-64 md:h-full bg-gray-100"><img src="${w.image}" class="w-full h-full object-cover"></div>
        <div class="p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-full">
            <div class="text-xs font-mono text-gray-400 mb-4">${w.year} / ${w.type === 'survey' ? '測量' : '補償'}</div>
            <h2 class="text-2xl md:text-3xl font-bold text-brandNavy mb-2">${w.title}</h2>
            <p class="text-sm text-gray-500 mb-8 border-b border-line pb-8">${w.client}</p>
            <p class="text-ink leading-relaxed">${w.summary}</p>
        </div>
    `;
    const modal = document.getElementById('work-modal');
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); document.getElementById('modal-panel').classList.remove('scale-95', 'opacity-0'); }, 10);
};

window.closeModal = () => {
    const modal = document.getElementById('work-modal');
    const panel = document.getElementById('modal-panel');
    modal.classList.add('opacity-0');
    panel.classList.add('scale-95', 'opacity-0');
    setTimeout(() => { modal.classList.add('hidden'); }, 300);
};

window.updateContactType = (type) => {
    window.location.href = `?type=${type}`;
};

// Mobile Menu
const menuBtn = document.getElementById('mobile-menu-btn');
const menuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu() {
    if (mobileMenu) mobileMenu.classList.toggle('translate-x-full');
}
if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
if (menuClose) menuClose.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Init
window.onload = initApp;

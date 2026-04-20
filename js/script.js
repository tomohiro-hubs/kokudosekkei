const getPath = (path) => {
    const root = window.rootPath || './';
    return path.startsWith('/') ? root + path.slice(1) : path;
};

// --- Data ---
const appData = {
    "site": {
        "companyName": "株式会社国土調査設計事務所",
        "catch": "測量と補償で、公共事業の“確実さ”を支える。",
        "area": "奈良県大和郡山市小泉町187-1",
        "founded": "1971年7月6日",
        "capital": "1000万",
        "license": "第（13）-4035号",
        "ceo": "吉田 友彦",
        "business": ["調査・測量業務", "設計業務"],
        "registrations": [
            { "label": "測量業者登録", "value": "第（13）-4035号" },
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
            "id": "w-2025-001",
            "slug": "shirakawa-dam-behavior-survey",
            "year": 2025,
            "type": "survey",
            "area": "白川ダム他",
            "client": "奈良県",
            "title": "令和7年度　白川ダム他挙動測量委託(ダム維持修繕事業)",
            "image": "/images/work_shirakawa_dam_behavior_01.jpg",
            "gallery": [
                "/images/work_shirakawa_dam_behavior_01.jpg",
                "/images/work_shirakawa_dam_behavior_02.jpg",
                "/images/work_shirakawa_dam_behavior_03.jpg",
                "/images/work_shirakawa_dam_behavior_04.jpg",
                "/images/work_shirakawa_dam_behavior_05.jpg",
                "/images/work_shirakawa_dam_behavior_06.jpg"
            ],
            "summary": "白川ダムおよび周辺施設において、基準点・構造物・周辺路線を対象とした挙動測量を実施。経年変化の把握と維持修繕計画に必要な基礎データを整備しました。",
            "details": {
                "point": "現地条件が異なる複数地点で観測手法を切り替え、ダム管理上の重要箇所を重点的に計測。基準点観測から路線部の高さ管理まで一連で整理し、継続点検に再利用しやすい成果として取りまとめました。",
                "equipment": ["トータルステーション", "オートレベル", "標尺", "基準点観測機器"]
            }
        },
        {
            "id": "w-2025-002",
            "slug": "kitayamagawa-shinchaya-dam-survey",
            "year": 2025,
            "type": "survey",
            "area": "北山川",
            "client": "奈良県",
            "title": "令和7年度　北山川　新茶屋堰堤測量業務委託（砂防メンテナンス事業（砂防）（補正））",
            "image": "/images/work_kitayamagawa_sabo_01.jpg",
            "gallery": [
                "/images/work_kitayamagawa_sabo_01.jpg",
                "/images/work_kitayamagawa_sabo_02.jpg",
                "/images/work_kitayamagawa_sabo_03.jpg",
                "/images/work_kitayamagawa_sabo_04.jpg",
                "/images/work_kitayamagawa_sabo_05.jpg",
                "/images/work_kitayamagawa_sabo_06.jpg"
            ],
            "summary": "北山川・新茶屋堰堤周辺において、砂防メンテナンス事業に必要な測量を実施。地上測量とUAV活用を組み合わせ、維持管理計画に必要な地形・構造物情報を整備しました。",
            "details": {
                "point": "急峻地形や積雪時を含む現地条件下で観測を行い、河道部・道路沿い・堰堤周辺を面的に把握。季節差やアクセス条件を踏まえて観測計画を調整し、点検・補修判断に使いやすい成果として整理しました。",
                "equipment": ["トータルステーション", "UAV（ドローン）", "GNSS受信機", "標尺"]
            }
        },
        {
            "id": "w-2025-003",
            "slug": "kizuyokota-sidewalk-survey",
            "year": 2025,
            "type": "survey",
            "area": "一般県道木津横田線",
            "client": "奈良県",
            "title": "令和7年度　一般県道木津横田線　歩道測量業務委託（臨時単独舗装道補修事業）",
            "image": "/images/work_kizuyokota_sidewalk_01.jpg",
            "gallery": ["/images/work_kizuyokota_sidewalk_01.jpg", "/images/work_kizuyokota_sidewalk_02.jpg"],
            "summary": "臨時単独舗装道補修事業に伴う歩道測量業務を実施し、設計・施工に必要な現況情報を提供しました。",
            "details": {
                "point": "道路利用環境の改善に向け、歩道区間の現況を精度よく把握し、実務で活用しやすい成果図を作成しました。",
                "equipment": ["高精度トータルステーション"]
            }
        },
        {
            "id": "w-2025-004",
            "slug": "washikagawa-river-patrol",
            "year": 2025,
            "type": "survey",
            "area": "鷲家川他",
            "client": "奈良県",
            "title": "令和7年度　鷲家川他　河川巡視業務委託（河川維持修繕事業（巡視点検））",
            "image": "/images/work_washikagawa_patrol_01.jpg",
            "gallery": [
                "/images/work_washikagawa_patrol_01.jpg",
                "/images/work_washikagawa_patrol_02.jpg",
                "/images/work_washikagawa_patrol_03.jpg"
            ],
            "summary": "鷲家川ほか対象区間において河川巡視を実施し、護岸・河床・周辺施設の状態を点検。維持修繕判断に必要な現況情報を整理しました。",
            "details": {
                "point": "流下阻害の要因となる堆積・洗掘状況や、構造物周辺の異常兆候を区間ごとに確認。写真記録と位置情報を紐付けて取りまとめ、優先度判断に使える巡視資料を作成しました。",
                "equipment": ["デジタルカメラ", "タブレット端末", "位置情報記録端末"]
            }
        }
    ],
    // Careers
    "careers": {
        "roles": [
            {
                "id": "role-surveyor",
                "title": "測量技術者（正社員）",
                "summary": "最新の測量技術を用い、公共事業の起点となる高精度なデータ作成をリードします。",
                "description": "道路、河川、地積調査など幅広い公共測量業務を担当していただきます。最新のドローン測量やGNSS測量を積極的に導入しており、技術者としてのキャリアアップを強力に支援します。",
                "requirements": ["普通自動車免許（AT限定可）", "測量士または測量士補の有資格者優遇", "未経験者も意欲があれば歓迎"],
                "jobDetails": [
                    { "label": "給与", "value": "月給 200,000円 〜 450,000円（経験・能力を考慮）" },
                    { "label": "諸手当", "value": "資格手当、住宅手当、家族手当、通勤手当" },
                    { "label": "勤務時間", "value": "8:30 〜 17:30（休憩60分）" },
                    { "label": "休日・休暇", "value": "土日祝（完全週休2日制）、夏季・冬季休暇、有給休暇" },
                    { "label": "勤務地", "value": "奈良県大和郡山市（現場は主に奈良県内）" }
                ]
            },
            {
                "id": "role-comp",
                "title": "補償調査・コンサルタント（正社員）",
                "summary": "建物の調査や積算を通じて、公共事業における権利者の正当な補償を支えます。",
                "description": "公共事業の用地取得に伴う、家屋や工作物の調査および補償額の算定業務です。住民の方々と対話し、公平で正確な調査結果をまとめる極めて社会貢献度の高い仕事です。",
                "requirements": ["PC基本操作（Excel, Word）", "対人コミュニケーションを大切にできる方", "建築・不動産関連の知識があれば尚可"],
                "jobDetails": [
                    { "label": "給与", "value": "月給 230,000円 〜 400,000円（経験・能力を考慮）" },
                    { "label": "諸手当", "value": "資格手当（補償業務管理士等）、役職手当、残業手当" },
                    { "label": "勤務時間", "value": "8:30 〜 17:30（休憩60分）" },
                    { "label": "休日・休暇", "value": "年間休日120日以上、完全週休2日制（土日祝）" },
                    { "label": "福利厚生", "value": "社会保険完備、退職金制度、資格取得支援制度" }
                ]
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
    else if (document.getElementById('page-work-detail')) {
        renderWorkDetail();
        const header = document.getElementById('main-header');
        if (header) {
            header.classList.add('header-transparent');
            header.classList.remove('bg-brandNavy');
        }
        document.getElementById('page-work-detail').classList.add('active');
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
        const dataPath = el.getAttribute('data-path'); // Use data-path specificially

        // Check for Home
        if (dataPath === '/' && (path.endsWith('/') || path.endsWith('index.html'))) {
            // For home, we only strict match the end of the path to avoid it being active on all subpages
            // But valid home paths: /repo/index.html, /repo/, /index.html
            // Simple check: if NOT works/carriers/contact
            if (!path.includes('works') && !path.includes('careers') && !path.includes('contact') && !path.includes('privacy') && !path.includes('sitemap')) {
                el.classList.add('active', 'text-brandGold');
            }
        }
        else if (dataPath !== '/' && path.includes(dataPath.replace(/\//g, ''))) {
            // Removing slashes for safer check, e.g. "works" in "/repo/works/index.html"
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
        appData.site.registrations
            .filter(r => r.label !== '補償コンサルタント登録')
            .forEach(r => {
            const li = document.createElement('li');
            li.className = 'text-gray-400';
            li.innerHTML = `${r.label} <span class="text-gray-500 text-xs ml-1 block">${r.value}</span>`;
            regList.appendChild(li);
            });
    }
}

function getWorkLink(work) {
    if (!work || !work.slug) return getPath('/works/');
    return getPath(`/works/${work.slug}/`);
}

function findWorkBySlug(slug) {
    if (!slug) return null;
    return appData.works.find(work => work.slug === slug) || null;
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
    const currentScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHeader(currentScrollY);
            lastScrollY = currentScrollY;
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
    const surveyWorks = works.filter(w => w.type === 'survey');
    const worksHtml = surveyWorks.slice(0, 3).map((w, index) => `
        <a href="${getWorkLink(w)}" class="reveal delay-${index * 100} group relative block h-80 overflow-hidden bg-gray-100">
            <img src="${getPath(w.image)}" alt="${w.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
            <div class="absolute inset-0 bg-brandNavy/40 transition duration-500 group-hover:bg-brandNavy/20"></div>
            <div class="absolute bottom-0 left-0 w-full p-8 text-white">
                <div class="text-xs font-mono mb-2 opacity-80">${w.year} / SURVEY</div>
                <h3 class="text-xl font-bold font-sans leading-snug group-hover:underline decoration-brandGold underline-offset-4">${w.title}</h3>
            </div>
        </a>
    `).join('');

    // Service Images (Updated Paths to JPG)
    container.innerHTML = `
        <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img src="${getPath('/images/hero.jpg')}" class="w-full h-full object-cover animate-[scale-in_20s_infinite_alternate]" style="animation: scale-in 30s linear infinite alternate;">
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
                    <a href="${getPath('/works/')}" class="bg-brandGold text-brandNavy px-8 py-4 font-bold font-en tracking-widest hover:bg-white transition-colors">VIEW WORKS</a>
                    <a href="${getPath('/contact/')}" class="border border-white text-white px-8 py-4 font-bold font-en tracking-widest hover:bg-white hover:text-brandNavy transition-colors">CONTACT US</a>
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
                ${site.registrations.filter(r => r.label !== '補償コンサルタント登録').map(r => `
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
                                <img src="${getPath('/images/service_survey.jpg')}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                            </div>
                            <div>
                                <div class="text-brandGold font-en font-bold text-sm tracking-widest mb-2">01. SURVEY</div>
                                <h3 class="text-2xl font-bold text-brandNavy mb-4">測量・調査</h3>
                                <p class="text-gray-500 text-sm leading-relaxed mb-6">基準点測量から用地測量まで、最新の機器と技術を駆使して高精度な成果を作成します。</p>
                            </div>
                        </div>
                        <div class="group reveal delay-200 grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div class="md:order-2 overflow-hidden bg-gray-100 aspect-[4/3] relative">
                                <img src="${getPath('/images/service_compensation.jpg')}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
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
                    <a href="${getPath('/works/')}" class="group flex items-center gap-2 text-brandNavy font-en font-bold tracking-widest hover:text-brandGold transition-colors mt-8">
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
                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">会社名</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.companyName}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">設立日</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.founded}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">資本金</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.capital}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">測量業者登録</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.license}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">代表者</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.ceo}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">所在地</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.area}</div>
                         <div class="md:col-span-12 h-[1px] bg-line hidden md:block"></div>

                         <div class="md:col-span-4 py-3 md:py-5 font-bold text-brandNavy flex items-center bg-gray-50 md:bg-transparent px-4 md:px-0">事業内容</div>
                         <div class="md:col-span-8 py-3 md:py-5 border-b border-line md:border-b-0 md:border-t-0 text-gray-600 flex items-center px-4 md:px-0">${site.business.join('、')}</div>
                    </dl>
                    <div class="mt-12 h-80 md:h-[450px] w-full bg-gray-100 shadow-inner rounded-sm overflow-hidden border border-line">
                        <iframe src="https://maps.google.com/maps?q=${site.area}&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 md:py-32 bg-white overflow-hidden">
            <div class="container mx-auto px-6 max-w-[1400px]">
                <div class="relative bg-brandNavy overflow-hidden rounded-sm group min-h-[450px] flex items-center">
                    <!-- Background Design: Large Ghost Text -->
                    <div class="absolute -bottom-10 -right-10 text-[120px] md:text-[200px] font-en font-bold text-white/[0.03] select-none pointer-events-none tracking-tighter italic">
                        RECRUIT
                    </div>
                    
                    <!-- Surveying Motif: Viewfinder Corners -->
                    <div class="absolute inset-0 pointer-events-none p-6 md:p-10 opacity-40">
                        <div class="absolute top-6 left-6 w-12 h-12 border-t border-l border-brandGold/40 group-hover:w-16 group-hover:h-16 transition-all duration-700"></div>
                        <div class="absolute top-6 right-6 w-12 h-12 border-t border-r border-brandGold/40 group-hover:w-16 group-hover:h-16 transition-all duration-700"></div>
                        <div class="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-brandGold/40 group-hover:w-16 group-hover:h-16 transition-all duration-700"></div>
                        <div class="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-brandGold/40 group-hover:w-16 group-hover:h-16 transition-all duration-700"></div>
                    </div>

                    <!-- Background Image & Gradient -->
                    <div class="absolute inset-0 z-0">
                        <img src="${getPath('/images/recruit.jpg')}" class="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition duration-1000 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-r from-brandNavy via-brandNavy/60 to-transparent"></div>
                    </div>
                    
                    <div class="relative z-10 w-full py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div class="reveal flex-grow">
                            <div class="flex items-center gap-4 mb-6">
                                <span class="w-8 h-[1px] bg-brandGold"></span>
                                <span class="text-brandGold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Careers</span>
                            </div>
                            <h2 class="text-4xl md:text-6xl font-en font-bold text-white mb-8 leading-tight">
                                未来を測り、<br class="hidden md:block">
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">地図に残す</span>仕事を。
                            </h2>
                            <p class="text-gray-300 text-base md:text-lg tracking-wide max-w-xl leading-relaxed pl-6 border-l border-white/20">
                                公共事業という大きな舞台で、あなたの技術が社会の基盤を支えます。<br class="hidden md:block">
                                正確さを追求し、誠実に土地と向き合う仲間を求めています。
                            </p>
                        </div>
                        
                        <!-- Premium Circular CTA -->
                        <div class="reveal delay-200 shrink-0">
                            <a href="${getPath('/careers/')}" class="relative inline-flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full border border-white/20 text-white font-sans font-bold tracking-[0.1em] group/btn transition-all duration-700 hover:border-brandGold overflow-hidden bg-brandNavy/30 backdrop-blur-sm px-4">
                                <span class="relative z-10 group-hover/btn:text-brandNavy transition-colors duration-500 text-sm md:text-lg">応募する</span>
                                <div class="absolute inset-0 bg-brandGold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderWorks() {
    const container = document.getElementById('page-works');
    if (!container) return;

    if (currentFilter !== 'all' && currentFilter !== 'survey') {
        currentFilter = 'all';
    }

    const surveyWorks = appData.works.filter(w => w.type === 'survey');
    let filteredWorks = [];
    if (appData && surveyWorks) {
        filteredWorks = surveyWorks.filter(w => {
            if (bookmarkFilter && !bookmarkedWorks.includes(w.id)) return false;
            if (currentFilter === 'all') return true;
            return w.type === currentFilter;
        });
    }

    const gridHtml = filteredWorks.map(w => {
        return `
        <a href="${getWorkLink(w)}" class="reveal cursor-pointer group block">
            <div class="overflow-hidden aspect-[4/3] bg-gray-100 relative mb-4">
                <img src="${getPath(w.image)}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                    <i data-lucide="arrow-up-right" class="w-5 h-5 text-brandNavy"></i>
                </div>
            </div>
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-mono text-gray-400">${w.year}</span>
                <span class="text-xs font-bold tracking-wider text-brandGold uppercase">測量</span>
            </div>
            <h3 class="text-lg font-bold text-brandNavy leading-snug group-hover:text-blue-600 transition-colors">${w.title}</h3>
        </a>
    `}).join('');

    container.innerHTML = `
        <div class="pt-32 pb-20 container mx-auto px-6 min-h-screen">
            <div class="mb-16 reveal">
                <h1 class="text-5xl md:text-6xl font-en font-bold text-brandNavy mb-6">WORKS</h1>
                <div class="w-16 h-1 bg-brandGold mb-8"></div>
                <p class="text-gray-500 mb-12 leading-relaxed text-left">
                    公共測量業務を中心に、長年にわたり蓄積された技術と信頼の実績をご紹介します。<br>
                    道路、河川、地籍調査など、多岐にわたるプロジェクトを通じて、社会基盤の整備に貢献しています。
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                ${gridHtml}
            </div>
        </div>
    `;

    setTimeout(initScrollReveal, 50);
}

function renderWorkDetail() {
    const container = document.getElementById('page-work-detail');
    if (!container) return;

    const slug = container.dataset.workSlug || '';
    const work = findWorkBySlug(slug);
    if (!work) {
        container.innerHTML = `
            <div class="pt-32 pb-24 container mx-auto px-6 min-h-screen max-w-3xl">
                <h1 class="text-3xl font-bold text-brandNavy mb-4">実績が見つかりませんでした</h1>
                <p class="text-gray-600 mb-8">指定された実績ページは存在しないか、公開が終了しています。</p>
                <a href="${getPath('/works/')}" class="inline-flex items-center gap-2 bg-brandNavy text-white px-6 py-3 font-bold hover:bg-brandGold hover:text-brandNavy transition-colors">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> 実績一覧へ戻る
                </a>
            </div>
        `;
        return;
    }

    const gallery = Array.isArray(work.gallery) && work.gallery.length > 0 ? work.gallery : [work.image];
    const hasMultipleImages = gallery.length > 1;
    const gallerySlidesHtml = gallery.map((imagePath, index) => `
        <div class="w-full shrink-0 bg-gray-100">
            <img src="${getPath(imagePath)}" alt="${work.title}（${index + 1}枚目）" class="w-full h-full object-cover max-h-[640px]">
        </div>
    `).join('');
    const galleryDotsHtml = gallery.map((_, index) => `
        <button type="button"
            onclick="goToWorkSlide(${index})"
            class="w-2.5 h-2.5 rounded-full transition-colors ${index === 0 ? 'bg-brandGold' : 'bg-white/40 hover:bg-white/70'}"
            data-gallery-dot="${index}"
            aria-label="写真${index + 1}枚目を表示"></button>
    `).join('');

    const relatedWorks = appData.works.filter(item => item.id !== work.id).slice(0, 3);
    const relatedWorksHtml = relatedWorks.map(item => `
        <a href="${getWorkLink(item)}" class="group block border border-line bg-white hover:border-brandNavy transition-colors overflow-hidden">
            <div class="h-40 overflow-hidden bg-gray-100">
                <img src="${getPath(item.image)}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-5">
                <p class="text-[11px] text-gray-400 mb-2 tracking-widest">${item.year} / SURVEY</p>
                <h3 class="text-sm font-bold text-brandNavy leading-relaxed group-hover:text-brandGold transition-colors">${item.title}</h3>
            </div>
        </a>
    `).join('');

    container.innerHTML = `
        <article class="pb-24 bg-[#eef1f5]">
            <section class="relative pt-36 pb-24 bg-brandNavy overflow-hidden">
                <div class="absolute inset-0 opacity-20">
                    <img src="${getPath(work.image)}" alt="${work.title}" class="w-full h-full object-cover scale-105">
                </div>
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(197,160,89,0.35),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_45%)]"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-brandNavy/95 via-brandNavy/85 to-[#091223]/90"></div>
                <div class="absolute right-[-120px] top-[120px] text-white/[0.06] font-en text-[140px] md:text-[220px] tracking-tight leading-none select-none">WORKS</div>
                <div class="container mx-auto px-6 relative z-10 text-white">
                    <a href="${getPath('/works/')}" class="inline-flex items-center gap-2 text-sm text-brandGold hover:text-white transition-colors mb-8">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> 業務実績一覧へ戻る
                    </a>
                    <div class="reveal active">
                        <p class="text-[11px] font-en tracking-[0.24em] text-brandGold mb-5">PROJECT DETAIL</p>
                        <h1 class="text-2xl md:text-5xl font-bold leading-relaxed md:leading-tight max-w-5xl">${work.title}</h1>
                        <div class="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">
                            <div class="border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3">
                                <p class="text-[10px] text-gray-300 mb-1 tracking-widest">YEAR</p>
                                <p class="text-sm font-bold">${work.year}年度</p>
                            </div>
                            <div class="border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3">
                                <p class="text-[10px] text-gray-300 mb-1 tracking-widest">CLIENT</p>
                                <p class="text-sm font-bold">${work.client}</p>
                            </div>
                            <div class="border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3">
                                <p class="text-[10px] text-gray-300 mb-1 tracking-widest">AREA</p>
                                <p class="text-sm font-bold">${work.area}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container mx-auto px-6 pt-16">
                <div class="mb-16" data-work-gallery data-index="0" data-total="${gallery.length}">
                    <div class="relative overflow-hidden border border-line bg-white">
                        <div id="work-gallery-track" class="flex transition-transform duration-500 ease-out" style="transform: translateX(0%);">
                            ${gallerySlidesHtml}
                        </div>
                        ${hasMultipleImages ? `
                        <button type="button"
                            onclick="changeWorkSlide(-1)"
                            class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brandNavy/75 text-white flex items-center justify-center hover:bg-brandNavy transition-colors"
                            aria-label="前の写真">
                            <i data-lucide="chevron-left" class="w-5 h-5"></i>
                        </button>
                        <button type="button"
                            onclick="changeWorkSlide(1)"
                            class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brandNavy/75 text-white flex items-center justify-center hover:bg-brandNavy transition-colors"
                            aria-label="次の写真">
                            <i data-lucide="chevron-right" class="w-5 h-5"></i>
                        </button>
                        ` : ''}
                        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                ${hasMultipleImages ? galleryDotsHtml : ''}
                            </div>
                            <p id="work-gallery-count" class="text-xs font-en tracking-widest text-white/90">${gallery.length > 0 ? `1 / ${gallery.length}` : ''}</p>
                        </div>
                    </div>
                </div>

                <div class="grid lg:grid-cols-12 gap-8 items-start">
                    <div class="lg:col-span-8 bg-white border border-line p-8 md:p-10 reveal">
                        <p class="text-[11px] font-en tracking-[0.2em] text-brandGold mb-4">OVERVIEW</p>
                        <h2 class="text-2xl md:text-3xl font-bold text-brandNavy mb-6">業務概要</h2>
                        <p class="text-gray-700 leading-loose">${work.summary}</p>
                    </div>
                    <aside class="lg:col-span-4 lg:row-span-2 bg-brandNavy text-white p-7 reveal h-full">
                        <p class="text-[11px] font-en tracking-[0.2em] text-brandGold mb-4">SPEC</p>
                        <h3 class="text-sm font-bold mb-4 tracking-widest">使用機材</h3>
                        <div class="flex flex-wrap gap-2">
                            ${work.details.equipment.map(equipment => `<span class="px-3 py-1 text-xs border border-white/20 text-white bg-white/5">${equipment}</span>`).join('')}
                        </div>
                    </aside>
                    <div class="lg:col-span-8 bg-white border border-line p-8 md:p-10 reveal delay-100">
                        <p class="text-[11px] font-en tracking-[0.2em] text-brandGold mb-4">HIGHLIGHT</p>
                        <h3 class="text-xl md:text-2xl font-bold text-brandNavy mb-5">業務のポイント</h3>
                        <p class="text-gray-700 leading-loose">${work.details.point}</p>
                    </div>
                </div>
            </section>

            <section class="container mx-auto px-6 mt-20">
                <div class="bg-brandNavy text-white p-10 md:p-14 text-center">
                    <p class="text-[11px] tracking-[0.2em] text-brandGold mb-4">お問い合わせ</p>
                    <h2 class="text-2xl md:text-3xl font-bold mb-5">この実績についてご相談ください</h2>
                    <p class="text-gray-300 mb-8">業務内容・進め方・概算のご相談まで、担当者が丁寧にご案内します。</p>
                    <a href="${getPath('/contact/?type=quote')}" class="inline-flex items-center justify-center gap-2 bg-brandGold text-brandNavy px-8 py-4 font-bold hover:bg-white transition-colors">
                        この実績について問い合わせる <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </section>

            <section class="container mx-auto px-6 mt-20">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-2xl font-bold text-brandNavy">関連実績</h2>
                    <a href="${getPath('/works/')}" class="text-sm text-brandNavy hover:text-brandGold transition-colors">一覧を見る</a>
                </div>
                <div class="grid md:grid-cols-3 gap-6">
                    ${relatedWorksHtml}
                </div>
            </section>
        </article>
    `;

    setTimeout(initScrollReveal, 50);
}

function renderCareers() {
    const container = document.getElementById('page-careers');
    const { careers } = appData;
    const visibleRoles = careers.roles.filter(role => role.id !== 'role-comp');

    const rolesHtml = visibleRoles.map(role => `
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
                 <img src="${getPath('/images/recruit.jpg')}" class="w-full h-full object-cover">
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
                        <img src="${getPath('/images/recruit.jpg')}" class="w-full h-full object-cover">
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
                    <img src="${getPath('/images/recruit.jpg')}" class="w-full h-full object-cover opacity-50">
                    <div class="absolute inset-0 bg-brandNavy/50"></div>
                </div>
                <div class="relative z-10">
                    <h2 class="text-2xl font-bold mb-4">Entry / Contact</h2>
                    <p class="text-gray-100 mb-8 max-w-lg mx-auto">採用についてのお問い合わせはこちら</p>
                    <a href="${getPath('/contact/?type=recruit')}" class="peer inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 font-bold hover:bg-white hover:text-blue-600 transition duration-300 relative z-20">
                        応募フォームへ <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                    <!-- Section Background Sweep layer triggered by button hover -->
                    <div class="absolute -inset-8 md:-inset-16 bg-white/10 -translate-x-full peer-hover:translate-x-0 transition-transform duration-1000 ease-in-out pointer-events-none -z-10"></div>
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
                    <p class="text-[10px] text-gray-400 mt-2 opacity-70">※外部サービス（Google フォーム）を使用しています。クリックすると別タブでフォームが開きます。</p>
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
                            <li><a href="${getPath('/')}" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="home" class="w-4 h-4"></i> ホーム</a></li>
                            <li><a href="${getPath('/works/')}" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="briefcase" class="w-4 h-4"></i> 業務実績</a></li>
                            <li><a href="${getPath('/careers/')}" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="users" class="w-4 h-4"></i> 採用情報</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 class="text-xl font-bold text-brandNavy mb-6 border-b border-brandGold pb-2 inline-block">SUPPORT</h3>
                        <ul class="space-y-4">
                            <li><a href="${getPath('/contact/')}" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="mail" class="w-4 h-4"></i> お問い合わせ</a></li>
                             <li><a href="${getPath('/privacy/')}" class="font-bold text-brandNavy hover:text-brandGold transition-colors flex items-center gap-2"><i data-lucide="shield" class="w-4 h-4"></i> プライバシーポリシー</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setWorkSlide(index) {
    const galleryRoot = document.querySelector('[data-work-gallery]');
    if (!galleryRoot) return;

    const total = Number(galleryRoot.dataset.total || 0);
    if (!total) return;

    const normalizedIndex = ((index % total) + total) % total;
    galleryRoot.dataset.index = String(normalizedIndex);

    const track = document.getElementById('work-gallery-track');
    if (track) {
        track.style.transform = `translateX(-${normalizedIndex * 100}%)`;
    }

    document.querySelectorAll('[data-gallery-dot]').forEach((dotElement, dotIndex) => {
        const isActive = dotIndex === normalizedIndex;
        dotElement.classList.toggle('bg-brandGold', isActive);
        dotElement.classList.toggle('bg-white/40', !isActive);
    });

    const countElement = document.getElementById('work-gallery-count');
    if (countElement) {
        countElement.textContent = `${normalizedIndex + 1} / ${total}`;
    }
}

window.setFilter = (type) => {
    currentFilter = type;
    renderWorks();
};

window.changeWorkSlide = (step) => {
    const galleryRoot = document.querySelector('[data-work-gallery]');
    if (!galleryRoot) return;
    const currentIndex = Number(galleryRoot.dataset.index || 0);
    setWorkSlide(currentIndex + step);
};

window.goToWorkSlide = (index) => {
    setWorkSlide(index);
};

window.openCareerModal = (id) => {
    const role = appData.careers.roles.find(r => r.id === id);
    if (!role) return;
    const modalContent = document.getElementById('modal-content');

    // Set to single column for careers
    modalContent.className = 'bg-white';

    modalContent.innerHTML = `
        <div class="p-8 md:p-16 overflow-y-auto max-h-[90vh] text-ink">
            <div class="mb-10 text-center">
                <span class="inline-block px-3 py-1 bg-brandGold/10 text-brandGold text-[10px] font-bold tracking-widest uppercase rounded-full mb-4">Recruitment</span>
                <h2 class="text-3xl md:text-5xl font-bold text-brandNavy mb-6 leading-tight">${role.title}</h2>
                <div class="w-12 h-1 bg-brandGold mx-auto mb-8"></div>
                <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">${role.description}</p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div>
                    <h4 class="text-sm font-bold text-brandNavy mb-6 border-b border-line pb-2 flex items-center gap-2">
                        <i data-lucide="clipboard-list" class="w-4 h-4 text-brandGold"></i> 応募条件
                    </h4>
                    <ul class="space-y-4">
                        ${role.requirements.map(r => `
                            <li class="flex items-start gap-3 text-sm text-gray-600">
                                <span class="w-1.5 h-1.5 bg-brandGold rounded-full mt-1.5"></span>
                                ${r}
                            </li>
                        `).join('')}
                    </ul>
                    
                    <div class="mt-10 p-6 bg-gray-50 rounded border border-gray-100">
                        <p class="text-xs font-bold text-brandNavy mb-2">求める人物像</p>
                        <p class="text-xs text-gray-500 leading-relaxed">私たちは、誠実さと正確さを大切にし、地域の未来を支える責任感を持った方を求めています。技術の習得に意欲的な方を歓迎します。</p>
                    </div>
                </div>

                <div>
                    <h4 class="text-sm font-bold text-brandNavy mb-6 border-b border-line pb-2 flex items-center gap-2">
                        <i data-lucide="info" class="w-4 h-4 text-brandGold"></i> 勤務条件・待遇
                    </h4>
                    <dl class="grid gap-4">
                        ${role.jobDetails.map(d => `
                            <div class="grid grid-cols-3 gap-4 border-b border-gray-50 pb-3">
                                <dt class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">${d.label}</dt>
                                <dd class="col-span-2 text-sm text-brandNavy font-medium">${d.value}</dd>
                            </div>
                        `).join('')}
                    </dl>
                </div>
            </div>

            <div class="mt-16 pt-8 text-center border-t border-line">
                <p class="text-xs text-gray-400 mb-8">※選考プロセスについてはエントリー後に担当者よりご連絡いたします。</p>
                <a href="${getPath('/contact/?type=recruit')}" onclick="closeModal()" class="inline-flex items-center justify-center gap-3 w-full md:w-auto min-w-[320px] bg-brandNavy text-white px-10 py-5 font-bold tracking-widest hover:bg-brandGold transition-all duration-300 group">
                    この職種に応募する <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform"></i>
                </a>
            </div>
        </div>
    `;
    const modal = document.getElementById('work-modal');
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); document.getElementById('modal-panel').classList.remove('scale-95', 'opacity-0'); }, 10);
    if (window.lucide) lucide.createIcons();
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

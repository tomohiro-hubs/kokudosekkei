import React, { useEffect, useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, CheckCircle, ExternalLink, MapPin, ChevronRight, Bookmark, Clock } from 'lucide-react';
import { SiteData, Work } from './types';

// --- Context & Custom Hooks ---
const DataContext = createContext<SiteData | null>(null);

function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
}

// LocalStorage Helper for Bookmarks & History
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue] as const;
}

// --- Layout Components ---
const Header = () => {
  const { site } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navs = [
    { path: '/', label: '事業紹介' },
    { path: '/works', label: '実績紹介' },
    { path: '/careers', label: '採用情報' },
  ];

  return (
    <header className="bg-brandNavy text-white sticky top-0 z-50 shadow-md h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-wider truncate mr-4">{site.companyName}</Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 text-sm">
            {navs.map(n => (
              <Link key={n.path} to={n.path} className={`hover:text-accentCyan transition ${location.pathname === n.path ? 'text-accentCyan font-bold' : 'text-gray-300'}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="bg-accentCyan text-brandNavy px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition whitespace-nowrap">
            お問い合わせ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brandNavy2 border-t border-brandNavy px-4 py-4 space-y-4 shadow-xl z-50">
          {navs.map(n => (
            <Link key={n.path} to={n.path} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white py-2 border-b border-brandNavy/50">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-center bg-accentCyan text-brandNavy py-3 rounded font-bold mt-4">
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const { site } = useData();
  return (
    <footer className="bg-brandNavy text-gray-400 py-12 text-sm mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{site.companyName}</h3>
          <p className="mb-2 flex items-center gap-2"><MapPin size={16}/> {site.area}</p>
          <p className="mb-2 flex items-center gap-2"><Phone size={16}/> {site.contact.tel}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">登録情報</h4>
          <ul className="space-y-2">
            {site.registrations.map((r, i) => (
              <li key={i}>{r.label}: {r.value}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-col items-start gap-2">
            <Link to="/works" className="hover:text-white transition">実績一覧</Link>
            <Link to="/careers" className="hover:text-white transition">採用情報</Link>
            <Link to="/contact" className="hover:text-white transition">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        © {new Date().getFullYear()} {site.companyName}
      </div>
    </footer>
  );
};

// --- Page Components ---

const Home = () => {
  const { site, services, works } = useData();
  
  return (
    <div className="animate-fade-in">
      {/* Hero FullBleed */}
      <section className="relative bg-brandNavy text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brandNavy2 opacity-50 z-0 pattern-grid-lg"></div>
        {/* Abstract Background - CSS pattern could be added here */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            測量と補償で、<br/>公共事業の“確実さ”を支える。
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">{site.catch}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/works" className="bg-accentCyan text-brandNavy px-6 py-3 rounded-xl font-bold hover:bg-white transition shadow-lg shadow-accentCyan/20">
              実績を見る
            </Link>
            <Link to="/contact" className="border border-gray-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* TrustBar */}
      <div className="bg-white border-b border-line shadow-sm relative z-20">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-brandNavy font-bold">
          {site.registrations.map((r, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="text-accentCyan" size={18} />
              <span>{r.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <CheckCircle className="text-accentCyan" size={18} />
            <span>測量士 {site.qualified[0].count}名在籍</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-paper">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map(s => (
              <div key={s.id} className="bg-white p-8 rounded-xl shadow-sm border border-line hover:shadow-md transition">
                <h3 className="text-xl font-bold text-brandNavy mb-3">{s.title}</h3>
                <p className="text-ink mb-6 text-sm leading-relaxed">{s.summary}</p>
                <ul className="space-y-2">
                  {s.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 bg-accentCyan rounded-full"></div>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-brandNavy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-10">私たちの強み</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "ワンストップ対応", d: "測量から補償調査まで一貫した社内体制" },
              { t: "責任ある成果", d: "有資格者による多重チェック体制" },
              { t: "説明責任の遂行", d: "権利者・発注者への誠実な根拠提示" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-brandNavy2 rounded-xl border border-brandNavy2 hover:border-accentCyan/30 transition">
                <h3 className="text-lg font-bold text-accentCyan mb-2">{item.t}</h3>
                <p className="text-sm text-gray-300">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-brandNavy">最新の実績</h2>
            <Link to="/works" className="text-accentCyan font-bold text-sm flex items-center hover:underline">
              一覧へ <ChevronRight size={16}/>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {works.slice(0, 3).map(w => (
              <Link to="/works" key={w.id} className="block border border-line p-5 rounded-xl hover:shadow-md transition bg-paper group">
                <div className="text-xs text-muted mb-2">{w.year}年度 / {w.type === 'survey' ? '測量' : '補償'}</div>
                <h3 className="font-bold text-brandNavy mb-2 line-clamp-2 group-hover:text-brandNavy2">{w.title}</h3>
                <p className="text-xs text-ink line-clamp-2">{w.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 bg-paper">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brandNavy mb-4">確実な成果を積み上げる技術者へ。</h2>
          <Link to="/careers" className="inline-block bg-brandNavy text-white px-8 py-3 rounded-xl font-bold hover:bg-brandNavy2 transition shadow-lg">
            採用情報を見る
          </Link>
        </div>
      </section>
    </div>
  );
};

const Works = () => {
  const { works } = useData();
  const [filterType, setFilterType] = useState<'all' | 'survey' | 'compensation'>('all');
  const [filterBookmark, setFilterBookmark] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('bookmarkedWorks', []);
  const [history, setHistory] = useLocalStorage<string[]>('recentWorks', []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks((prev: string[]) => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const handleOpen = (work: Work) => {
    setSelectedWork(work);
    // Add to history unique and limit 10
    const newHistory = [work.id, ...history.filter((h: string) => h !== work.id)].slice(0, 10);
    setHistory(newHistory);
  };

  const filtered = works.filter(w => {
    if (filterBookmark && !bookmarks.includes(w.id)) return false;
    if (filterType === 'all') return true;
    return w.type === filterType;
  });

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in min-h-[calc(100vh-16rem)]">
      <h1 className="text-3xl font-bold text-brandNavy mb-8">業務実績</h1>
      
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-8 pb-4 border-b border-line items-center">
        <div className="flex bg-white p-1 rounded-lg border border-line">
          {(['all', 'survey', 'compensation'] as const).map(t => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-4 py-2 rounded-md text-sm font-bold transition ${filterType === t ? 'bg-brandNavy text-white shadow-sm' : 'text-muted hover:bg-paper'}`}
            >
              {t === 'all' ? 'すべて' : t === 'survey' ? '測量' : '補償'}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setFilterBookmark(!filterBookmark)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-bold transition ml-auto md:ml-0 ${filterBookmark ? 'bg-brandNavy text-white border-brandNavy' : 'border-line text-muted hover:bg-white bg-paper'}`}
        >
          <Bookmark size={16} fill={filterBookmark ? "currentColor" : "none"} /> ブックマークのみ
        </button>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-muted bg-white rounded-xl border border-line border-dashed">
          該当する実績がありません。
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(w => (
            <div 
              key={w.id} 
              onClick={() => handleOpen(w)}
              className="bg-white border border-line rounded-xl p-6 hover:shadow-md transition cursor-pointer group relative flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-xs font-bold px-2 py-1 rounded ${w.type === 'survey' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                  {w.type === 'survey' ? '測量' : '補償'}
                </span>
                <button onClick={(e) => toggleBookmark(w.id, e)} className="text-muted hover:text-yellow-400 transition p-1">
                  <Bookmark size={20} fill={bookmarks.includes(w.id) ? "#FACC15" : "none"} className={bookmarks.includes(w.id) ? "text-yellow-400" : ""} />
                </button>
              </div>
              <div className="text-xs text-muted mb-1">{w.year}年度 / {w.area}</div>
              <h3 className="font-bold text-brandNavy mb-3 group-hover:text-brandNavy2 text-lg leading-snug">{w.title}</h3>
              <p className="text-sm text-ink line-clamp-3 mt-auto">{w.summary}</p>
            </div>
          ))}
        </div>
      )}

      {/* Recently Viewed (Footer of section) */}
      {history.length > 0 && (
        <div className="mt-16 pt-8 border-t border-line">
          <h4 className="text-sm font-bold text-muted mb-4 flex items-center gap-2"><Clock size={16}/> 最近見た実績</h4>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {history.map((id: string) => {
              const w = works.find(item => item.id === id);
              if (!w) return null;
              return (
                <div key={id} onClick={() => handleOpen(w)} className="flex-shrink-0 w-64 bg-white border border-line p-3 rounded-lg text-xs cursor-pointer hover:shadow-sm transition">
                  <span className="font-bold block truncate text-brandNavy mb-1">{w.title}</span>
                  <span className="text-muted">{w.year}年度</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandNavy/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedWork(null)}>
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedWork(null)} className="absolute top-4 right-4 text-muted hover:text-brandNavy bg-paper p-2 rounded-full transition hover:bg-line"><X size={20}/></button>
            
            <div className="mb-6 pr-8">
              <span className="text-sm text-accentCyan font-bold tracking-wider">{selectedWork.year}年度 / {selectedWork.client}</span>
              <h2 className="text-2xl font-bold text-brandNavy mt-2 leading-tight">{selectedWork.title}</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-paper p-5 rounded-xl border border-line">
                <h4 className="font-bold text-brandNavy mb-2 text-sm">概要</h4>
                <p className="text-ink leading-relaxed text-sm">{selectedWork.summary}</p>
              </div>

              {selectedWork.details && (
                <div className="grid gap-6">
                  <div>
                    <h4 className="font-bold text-brandNavy mb-2 text-sm border-b border-line pb-1">課題とアプローチ</h4>
                    <div className="grid gap-3">
                       <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                          <p className="text-sm text-ink"><span className="font-bold text-red-800 block mb-1 text-xs">課題</span>{selectedWork.details.issue}</p>
                       </div>
                       <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <p className="text-sm text-ink"><span className="font-bold text-blue-800 block mb-1 text-xs">アプローチ</span>{selectedWork.details.approach}</p>
                       </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brandNavy mb-2 text-sm border-b border-line pb-1">主な成果物</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.details.deliverables.map((d,i) => (
                        <span key={i} className="text-xs bg-brandNavy text-white px-3 py-1.5 rounded-full font-medium">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-line flex justify-end">
               <button onClick={(e) => toggleBookmark(selectedWork.id, e)} className="flex items-center gap-2 text-brandNavy font-bold text-sm hover:opacity-70 transition px-4 py-2 rounded-lg hover:bg-paper">
                  <Bookmark size={18} fill={bookmarks.includes(selectedWork.id) ? "#FACC15" : "none"} className={bookmarks.includes(selectedWork.id) ? "text-yellow-400" : ""} />
                  {bookmarks.includes(selectedWork.id) ? "ブックマーク中" : "ブックマークする"}
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Careers = () => {
  const { careers, site } = useData();
  
  return (
    <div className="animate-fade-in">
      <div className="bg-paper py-16 text-center border-b border-line">
        <h1 className="text-3xl font-bold text-brandNavy mb-4">採用情報</h1>
        <p className="text-muted">公共事業の“確実さ”を支える、プロフェッショナルへ。</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-xl border border-line text-center shadow-sm">
             <div className="text-xs text-muted mb-1">測量士</div>
             <div className="text-2xl font-bold text-brandNavy">{site.qualified[0].count}名</div>
          </div>
          {careers.numbers.filter(n => n.label !== '測量士').map((n, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-line text-center shadow-sm">
              <div className="text-xs text-muted mb-1">{n.label}</div>
              <div className={`text-2xl font-bold ${n.value === '確認中' ? 'text-gray-300' : 'text-brandNavy'}`}>{n.value}</div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <h2 className="text-xl font-bold text-brandNavy mb-6 border-l-4 border-accentCyan pl-3">募集職種</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {careers.roles.map(role => (
            <div key={role.id} className="bg-white p-8 rounded-xl shadow-sm border border-line flex flex-col h-full">
              <h3 className="text-lg font-bold text-brandNavy mb-3">{role.title}</h3>
              <p className="text-ink mb-6 text-sm leading-relaxed flex-grow">{role.summary}</p>
              <div className="bg-paper p-4 rounded-lg mt-auto">
                <div className="text-xs font-bold text-muted mb-2">応募要件</div>
                <ul className="space-y-2">
                  {role.requirements.map((r, i) => (
                    <li key={i} className="text-sm text-brandNavy flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accentCyan rounded-full mt-1.5 shrink-0"></div> 
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-brandNavy text-white p-8 md:p-12 rounded-2xl text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">まずは話を聞いてみませんか？</h2>
            <p className="text-gray-300 mb-8 text-sm">経験・未経験は問いません。真摯に取り組める方を歓迎します。</p>
            <Link 
              to="/contact?type=recruit" 
              className="inline-block bg-accentCyan text-brandNavy px-8 py-3 rounded-xl font-bold hover:bg-white transition"
            >
              採用について問い合わせる
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { site } = useData();
  const location = useLocation();
  const [type, setType] = useState('biz'); // biz, quote, recruit

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('type') === 'recruit') setType('recruit');
  }, [location]);

  const guides = {
    biz: "業務のご相談や、技術的なご質問はこちらからお願いいたします。",
    quote: "概算のお見積りも可能です。現場の状況を分かる範囲でご記入ください。",
    recruit: "採用に関するご質問、エントリーはこちらから。面接希望日時があればご記入ください。"
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in max-w-3xl min-h-[calc(100vh-16rem)]">
      <h1 className="text-3xl font-bold text-brandNavy mb-8 text-center">お問い合わせ</h1>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-line mb-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-bold text-brandNavy mb-2">お問い合わせ種別</label>
            <div className="flex flex-col gap-2">
              {[
                { id: 'biz', label: '業務のご相談' },
                { id: 'quote', label: 'お見積り依頼' },
                { id: 'recruit', label: '採用について' }
              ].map(opt => (
                <label key={opt.id} className={`flex items-center p-3 rounded-lg border cursor-pointer transition ${type === opt.id ? 'border-brandNavy bg-paper font-bold text-brandNavy' : 'border-line hover:bg-gray-50 text-ink'}`}>
                  <input 
                    type="radio" 
                    name="type" 
                    value={opt.id} 
                    checked={type === opt.id} 
                    onChange={(e) => setType(e.target.value)}
                    className="mr-3 accent-brandNavy h-4 w-4"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-paper p-5 rounded-xl flex items-center border border-line border-dashed">
            <p className="text-sm text-ink leading-relaxed">
              <span className="font-bold text-accentCyan block mb-2 text-xs uppercase tracking-wider">Guide</span>
              {guides[type as keyof typeof guides]}
            </p>
          </div>
        </div>

        <div className="text-center mb-8 bg-paper p-4 rounded-xl">
          <p className="text-xs font-bold text-muted mb-2 uppercase tracking-widest">Phone</p>
          <a href={`tel:${site.contact.tel}`} className="text-2xl font-bold text-brandNavy hover:text-brandNavy2 flex justify-center items-center gap-2 transition">
            <Phone size={24}/> {site.contact.tel}
          </a>
          <p className="text-xs text-muted mt-1">{site.contact.hours}</p>
        </div>
        
        <div className="text-center">
           <a 
             href={site.contact.formUrl} 
             target="_blank" 
             rel="noopener noreferrer"
             className="block w-full bg-brandNavy text-white font-bold py-4 rounded-xl hover:bg-brandNavy2 transition shadow-md flex justify-center items-center gap-2 transform hover:-translate-y-0.5"
           >
             お問い合わせフォームを開く <ExternalLink size={18}/>
           </a>
           <p className="text-xs text-muted mt-3">Google Formsへ移動します</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Logic ---

function App() {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Determine the base URL dynamically or assume relative path
    fetch('./data.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then(setData)
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-paper text-brandNavy font-bold animate-pulse">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brandNavy border-t-accentCyan rounded-full animate-spin"></div>
        <p>情報を整理しています...</p>
      </div>
    </div>
  );
  
  if (error || !data) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper text-ink p-4 text-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md border border-red-100">
        <h2 className="text-xl font-bold mb-2 text-brandNavy">読み込みエラー</h2>
        <p className="mb-6 text-sm text-muted">必要な情報の取得に失敗しました。<br/>時間をおいて再読み込みしてください。</p>
        <div className="flex flex-col gap-3">
          <button onClick={() => window.location.reload()} className="bg-brandNavy text-white px-6 py-3 rounded-lg font-bold hover:bg-brandNavy2 transition">再読み込み</button>
          <a href="mailto:contact@example.com" className="text-sm text-muted hover:text-brandNavy underline">管理者へ連絡</a>
        </div>
      </div>
    </div>
  );

  return (
    <DataContext.Provider value={data}>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans text-ink bg-paper antialiased selection:bg-accentCyan selection:text-brandNavy">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </DataContext.Provider>
  );
}

export default App;

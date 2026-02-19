import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [activeTab, setActiveTab] = useState<'url' | 'email'>('url');
  const [url, setUrl] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const navigate = useNavigate();

  const handleScan = () => {
    if (activeTab === 'url' && url) {
      navigate('/scan', { state: { url } });
    } else if (activeTab === 'email' && emailContent) {
      // 1. Extract URL from email content (simple regex)
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const foundUrl = emailContent.match(urlRegex);
      
      // 2. Determine URL to send
      // If we find a link, we scan that link AND the content.
      // If no link, we send a placeholder "http://email-analysis.local" so the backend
      // knows to rely purely on the "AI Boost" (Content Analysis).
      const targetUrl = foundUrl ? foundUrl[0] : 'http://email-analysis.local';

      navigate('/scan', { 
        state: { 
          url: targetUrl,
          content: emailContent 
        } 
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 flex flex-col items-center text-center">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl"></div>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide mb-8 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        AI-Powered Security
      </div>

      {/* Hero Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 max-w-4xl">
        Is that link safe? <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Check before you click.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Advanced AI-powered phishing detection for emails and URLs. Protect yourself from malicious attacks in seconds.
      </p>

      {/* Input Section */}
      <div className="w-full max-w-3xl mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
        
        <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'url' 
                  ? 'bg-slate-50 dark:bg-slate-800/50 text-primary border-b-2 border-primary' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined">link</span>
              URL Scanner
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'email' 
                  ? 'bg-slate-50 dark:bg-slate-800/50 text-primary border-b-2 border-primary' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined">mail</span>
              Email Analyzer
            </button>
          </div>

          {/* Input Area */}
          <div className="p-2">
            {activeTab === 'url' ? (
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-grow flex items-center px-4 relative h-12">
                  <span className="material-symbols-outlined text-slate-400 mr-3 pointer-events-none select-none">search</span>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste a suspicious URL here..."
                    className="w-full h-full bg-transparent border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-0 focus:outline-none text-base"
                    onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                  />
                </div>
                <button
                  onClick={handleScan}
                  disabled={!url}
                  className="flex-shrink-0 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white h-12 px-8 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-sm transform active:scale-95"
                >
                  Analyze
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 p-2">
                 <div className="relative">
                  <textarea
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    placeholder="Paste the full email content (headers & body) here..."
                    className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none text-sm resize-none"
                  />
                  <span className="absolute bottom-3 right-3 material-symbols-outlined text-slate-400 pointer-events-none">content_paste</span>
                 </div>
                 <button
                  onClick={handleScan}
                  disabled={!emailContent}
                  className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white h-12 px-8 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-sm transform active:scale-95"
                >
                  <span className="material-symbols-outlined filled">security</span>
                  Analyze Email
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
          <span className="material-symbols-outlined text-green-500 text-xl">verified_user</span>
          <span className="font-medium">10,000+ items scanned today</span>
        </div>
        <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="material-symbols-outlined text-yellow-500 text-base filled">star</span>
          ))}
          <span className="ml-1">Trusted by thousands</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl text-left">
        {[
          { icon: 'bolt', color: 'blue', title: 'Real-time Analysis', desc: 'Instant results powered by advanced machine learning models.' },
          { icon: 'psychology', color: 'purple', title: 'AI Detection', desc: 'Detects sophisticated phishing patterns that bypass traditional filters.' },
          { icon: 'lock', color: 'green', title: 'Secure & Private', desc: 'Your data is processed securely and never shared with third parties.' },
        ].map((feature, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div className={`size-10 rounded-full bg-${feature.color}-50 dark:bg-${feature.color}-900/30 flex items-center justify-center text-${feature.color}-600 dark:text-${feature.color}-400`}>
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">{feature.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

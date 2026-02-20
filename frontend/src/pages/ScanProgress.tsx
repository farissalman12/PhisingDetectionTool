import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scanService } from '../services/api';

export const ScanProgress = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing scan...');
  const url = location.state?.url;
  const content = location.state?.content;

  useEffect(() => {
    if (!url) {
      navigate('/');
      return;
    }

    const startScan = async () => {
      let interval: ReturnType<typeof setInterval>;
      try {
        // Start simulated progress
        let currentProgress = 0;
        interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 5) + 2;
          if (currentProgress <= 85) setProgress(currentProgress);
        }, 400);

        // 1. Puter AI Call
        let aiScore, aiExplanation;
        try {
          if (window.puter?.ai?.chat) {
            setStatus('Initializing AI analysis...');
            const sysPrompt = `Analyze this input for phishing or scams. Reply strictly with JSON ONLY: {"score": <0-100 risk score>, "explanation": "<concise 1-sentence reason>"}\n\nURL: ${url}\nContent: ${content || 'None'}`;
            const aiResponse: any = await window.puter.ai.chat(sysPrompt);
            const text = typeof aiResponse === 'string' ? aiResponse : (aiResponse?.message || aiResponse?.text || '');
            const match = text.match(/\{[\s\S]*\}/);
            if (match) {
              const parsed = JSON.parse(match[0]);
              aiScore = parsed.score;
              aiExplanation = parsed.explanation;
            }
          }
        } catch(e) { console.warn("AI analysis skipped or failed:", e); }

        setStatus('Querying threat intelligence databases...');
        // 2. Start the scan via API
        const scan = await scanService.analyzeUrl(url, content, aiScore, aiExplanation);
        
        clearInterval(interval);
        setProgress(100);
        setStatus('Analysis complete!');
        
        setTimeout(() => {
          navigate(`/result/${scan.id}`, { state: { scan } });
        }, 400);

      } catch (error) {
        console.error('Scan failed:', error);
        alert('Scan failed. Please try again.');
        navigate('/');
      }
    };

    startScan();
  }, [url, navigate]);

  return (
    <div className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[640px] bg-white dark:bg-[#1a192e] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="flex flex-col items-center justify-center pt-12 pb-8 px-8 relative">
          
          {/* Radar Animation */}
          <div className="relative w-32 h-32 flex items-center justify-center mb-8">
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s', animationDelay: '0.6s' }}></div>
            <div className="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-20" style={{ animationDuration: '2s', animationDelay: '1.2s' }}></div>
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-[32px] animate-pulse">radar</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-3 tracking-tight">
            Analyzing Security...
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm text-base font-medium">
            Checking reputation databases and AI heuristics to ensure safety.
          </p>
        </div>

        <div className="px-8 sm:px-12 pb-10">
          <div className="flex justify-between items-end mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {status}
            </span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{progress}%</span>
          </div>
          
          <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-primary rounded-full relative transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            >
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[spin_1s_linear_infinite]" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#232238] rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${progress > 10 ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200'}`}>
                {progress > 10 ? (
                   <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                ) : (
                   <span className="material-symbols-outlined text-primary text-[20px] animate-spin">sync</span>
                )}
                <span className={`font-medium text-sm ${progress > 10 ? 'line-through decoration-slate-300' : ''}`}>Checking Google Safe Browsing...</span>
              </div>
              
              <div className={`flex items-center gap-3 ${progress > 40 ? 'text-slate-400 dark:text-slate-500' : (progress > 10 ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400 dark:text-slate-600')}`}>
                 {progress > 40 ? (
                   <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                ) : (
                   <span className={`material-symbols-outlined text-[20px] ${progress > 10 ? 'text-primary animate-spin' : 'text-slate-300'}`}>sync</span>
                )}
                <span className={`font-medium text-sm ${progress > 40 ? 'line-through decoration-slate-300' : ''}`}>Resolving DNS records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

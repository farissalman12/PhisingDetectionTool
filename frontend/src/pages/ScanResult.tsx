import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { scanService } from '../services/api';
import type { Scan } from '../services/api';

export const ScanResult = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [scan, setScan] = useState<Scan | null>(location.state?.scan || null);
  const [loading, setLoading] = useState(!scan);

  useEffect(() => {
    if (!scan && id) {
      const fetchScan = async () => {
        try {
          const data = await scanService.getScan(id);
          setScan(data);
        } catch (error) {
          console.error('Failed to fetch scan:', error);
          navigate('/');
        } finally {
          setLoading(false);
        }
      };
      fetchScan();
    }
  }, [id, scan, navigate]);

  if (loading) return <div className="p-8 text-center">Loading result...</div>;
  if (!scan) return <div className="p-8 text-center">Scan not found.</div>;

  const getRiskLevel = (score: number) => {
    if (score >= 70) return 'high';
    if (score >= 30) return 'medium';
    return 'low';
  };

  const riskLevel = getRiskLevel(scan.riskScore);

  const riskConfig = {
    high: {
      color: 'rose',
      label: 'High Risk',
      icon: 'gpp_bad',
      title: 'Phishing Detected',
      desc: 'Critical Threat Level',
      // Explicit classes for Tailwind to pick up
      containerBorder: 'border-rose-200 dark:border-rose-900/50',
      headerBg: 'bg-rose-50 dark:bg-rose-950/20',
      headerBorder: 'border-rose-100 dark:border-rose-900/30',
      iconBg: 'bg-rose-100 dark:bg-rose-900/40',
      iconColor: 'text-rose-600 dark:text-rose-400',
      titleColor: 'text-rose-700 dark:text-rose-400',
      subtitleColor: 'text-rose-600/80 dark:text-rose-400/80',
      badgeText: 'text-rose-800 dark:text-rose-200',
      badgeBorder: 'border-rose-200 dark:border-rose-900/30',
      gaugeColor: 'bg-rose-600',
      scoreColor: 'text-rose-600',
    },
    medium: {
      color: 'orange',
      label: 'Suspicious',
      icon: 'warning',
      title: 'Suspicious Activity',
      desc: 'Medium Threat Level',
      containerBorder: 'border-orange-200 dark:border-orange-900/50',
      headerBg: 'bg-orange-50 dark:bg-orange-950/20',
      headerBorder: 'border-orange-100 dark:border-orange-900/30',
      iconBg: 'bg-orange-100 dark:bg-orange-900/40',
      iconColor: 'text-orange-600 dark:text-orange-400',
      titleColor: 'text-orange-700 dark:text-orange-400',
      subtitleColor: 'text-orange-600/80 dark:text-orange-400/80',
      badgeText: 'text-orange-800 dark:text-orange-200',
      badgeBorder: 'border-orange-200 dark:border-orange-900/30',
      gaugeColor: 'bg-orange-600',
      scoreColor: 'text-orange-600',
    },
    low: {
      color: 'emerald',
      label: 'Safe',
      icon: 'check_circle',
      title: 'No Threats Found',
      desc: 'Low Threat Level',
      containerBorder: 'border-emerald-200 dark:border-emerald-900/50',
      headerBg: 'bg-emerald-50 dark:bg-emerald-950/20',
      headerBorder: 'border-emerald-100 dark:border-emerald-900/30',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      titleColor: 'text-emerald-700 dark:text-emerald-400',
      subtitleColor: 'text-emerald-600/80 dark:text-emerald-400/80',
      badgeText: 'text-emerald-800 dark:text-emerald-200',
      badgeBorder: 'border-emerald-200 dark:border-emerald-900/30',
      gaugeColor: 'bg-emerald-600',
      scoreColor: 'text-emerald-600',
    },
  };

  const config = riskConfig[riskLevel];

  return (
    <div className="flex-1 w-full max-w-[1000px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
      <div className={`bg-white dark:bg-[#1a1929] rounded-xl border shadow-sm overflow-hidden ${config.containerBorder}`}>
        <div className={`px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${config.headerBg} ${config.headerBorder}`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${config.iconBg} ${config.iconColor}`}>
              <span className="material-symbols-outlined text-2xl">{config.icon}</span>
            </div>
            <div>
              <h1 className={`text-lg font-bold leading-tight ${config.titleColor}`}>
                {config.title}
              </h1>
              <p className={`text-sm font-medium ${config.subtitleColor}`}>
                {config.desc}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <span className={`font-mono bg-white dark:bg-black/20 px-2 py-1 rounded text-xs border ${config.badgeText} ${config.badgeBorder}`}>
                {scan.url}
            </span>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Risk Score Gauge */}
          <div className="md:col-span-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="relative w-48 h-24 mb-4">
              {/* Background Grey Arch */}
              <div 
                className="absolute inset-0 w-full h-full rounded-t-full bg-slate-100 dark:bg-slate-800"
                style={{
                    background: `conic-gradient(from 180deg at 50% 100%, var(--tw-gradient-stops))`, 
                    '--tw-gradient-from': '#f1f5f9', // slate-100
                    '--tw-gradient-to': '#f1f5f9',
                    '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)'
                } as any}
              ></div>

              {/* Colored Fill Arch */}
              <div 
                className={`absolute inset-0 w-full h-full rounded-t-full transition-all duration-1000 ease-out`}
                style={{
                  background: `conic-gradient(from 270deg at 50% 100%, currentColor 0deg, currentColor ${scan.riskScore * 1.8}deg, transparent ${scan.riskScore * 1.8}deg, transparent 180deg)`,
                  color: riskLevel === 'high' ? '#e11d48' : (riskLevel === 'medium' ? '#ea580c' : '#10b981')
                }}
              ></div>
              
              {/* Inner White Cutout (Mask) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-18 bg-white dark:bg-[#1a1929] rounded-t-full flex items-end justify-center pb-2">
                 <span className={`text-5xl font-extrabold tracking-tighter ${config.scoreColor}`}>{scan.riskScore}</span>
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide uppercase">Risk Score</p>
              <p className={`text-sm font-medium mt-1 ${config.scoreColor}`}>{config.label}</p>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology_alt</span>
                Analysis Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {riskLevel === 'high'
                    ? `This URL has a high risk score of ${scan.riskScore}. It may be attempting to impersonate legitimate services or download malicious content.`
                    : (riskLevel === 'medium' 
                        ? 'The URL shows some suspicious characteristics. Proceed with caution.' 
                        : 'The URL appears relatively safe but always verify sources.')
                  }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Detailed Analysis */}
      <div className="flex flex-col gap-4">
        <div className="border-b border-slate-200 dark:border-slate-700">
            <nav aria-label="Tabs" className="flex gap-6 overflow-x-auto">
                <button className={`border-b-2 pb-3 text-sm font-bold whitespace-nowrap ${riskLevel === 'high' ? 'border-rose-600 text-rose-600' : (riskLevel === 'medium' ? 'border-orange-500 text-orange-600' : 'border-emerald-500 text-emerald-600')}`}>
                    Heuristics & Checks
                </button>
            </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Technical Heuristics */}
            <div className="bg-white dark:bg-[#1a1929] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#201e30] flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-slate-400 text-lg">code</span>
                        Technical Heuristics
                    </h4>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${config.badgeText} ${config.bgBase}`}>
                        {scan.riskScore > 0 ? 'Issues Detected' : 'All Checks Passed'}
                    </span>
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-800">
                    {/* Simulated Heuristic Items (since backend provides aggregated rules, we map them) */}
                     {/* 1. Keywords */}
                    <div className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Suspicious Keywords</p>
                            <p className="text-xs text-slate-500">Checks for words like 'login', 'verify'</p>
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded ${scan.heuristicScore > 10 ? 'text-rose-600 bg-rose-50 dark:bg-rose-900/10' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10'}`}>
                            <span className="material-symbols-outlined text-[16px]">{scan.heuristicScore > 10 ? 'cancel' : 'check_circle'}</span>
                            {scan.heuristicScore > 10 ? 'Failed' : 'Pass'}
                        </div>
                    </div>

                    {/* 2. TLD Check */}
                     <div className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Domain Safety (TLD)</p>
                            <p className="text-xs text-slate-500">Checks for high-risk extensions (.xyz, .ru)</p>
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded ${scan.heuristicScore > 30 ? 'text-rose-600 bg-rose-50 dark:bg-rose-900/10' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10'}`}>
                            <span className="material-symbols-outlined text-[16px]">{scan.heuristicScore > 30 ? 'cancel' : 'check_circle'}</span>
                             {scan.heuristicScore > 30 ? 'Failed' : 'Pass'}
                        </div>
                    </div>

                     {/* 3. AI Analysis */}
                     <div className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Content Analysis</p>
                            <p className="text-xs text-slate-500">Semantic analysis of text content</p>
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded ${scan.aiScore > 30 ? 'text-rose-600 bg-rose-50 dark:bg-rose-900/10' : 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10'}`}>
                            <span className="material-symbols-outlined text-[16px]">{scan.aiScore > 30 ? 'cancel' : 'check_circle'}</span>
                             {scan.aiScore > 30 ? 'Flagged' : 'Clean'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Reputation Sources */}
            <div className="bg-white dark:bg-[#1a1929] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#201e30] flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                        <span className="material-symbols-outlined text-slate-400 text-lg">public</span>
                        Reputation Status
                    </h4>
                    <span className="text-xs font-medium text-slate-500">Live API Check</span>
                </div>
                 <div className="divide-y divide-slate-200 dark:divide-slate-800">
                    <div className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-[10px]">G</div>
                            <div>
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">Google Safe Browsing</p>
                                <p className="text-xs text-slate-500">Relationship: Database</p>
                            </div>
                        </div>
                        <div className={`flex items-center gap-1.5 text-xs font-bold uppercase ${scan.riskScore > 80 ? 'text-rose-600' : 'text-emerald-600'}`}>
                            <span className="material-symbols-outlined text-[18px]">{scan.riskScore > 80 ? 'gpp_bad' : 'check_circle'}</span>
                            {scan.riskScore > 80 ? 'Malicious' : 'Clean'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

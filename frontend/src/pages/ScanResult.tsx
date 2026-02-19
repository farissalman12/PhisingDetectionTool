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
            <div className="relative w-40 h-20 mb-2">
              <div className="absolute inset-0 w-full h-full rounded-t-full bg-slate-100 dark:bg-slate-800"></div>
              <div 
                className={`absolute inset-0 w-full h-full rounded-t-full origin-bottom transition-all duration-1000 ${config.gaugeColor}`} 
                style={{ transform: `rotate(${scan.riskScore * 1.8}deg)`, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              ></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-white dark:bg-[#1a1929] rounded-t-full flex items-end justify-center pb-1">
                <span className={`text-3xl font-bold ${config.scoreColor}`}>{scan.riskScore}</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Risk Score</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{config.label}</p>
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
    </div>
  );
};

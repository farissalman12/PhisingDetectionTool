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

  const isHighRisk = scan.riskScore >= 50;
  const isSuspicious = scan.riskScore > 10 && scan.riskScore < 50;
  
  const riskColor = isHighRisk ? 'rose' : (isSuspicious ? 'orange' : 'emerald');
  const riskLabel = isHighRisk ? 'High Risk' : (isSuspicious ? 'Suspicious' : 'Safe');
  const riskIcon = isHighRisk ? 'gpp_bad' : (isSuspicious ? 'warning' : 'check_circle');

  return (
    <div className="flex-1 w-full max-w-[1000px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6">
      <div className={`bg-white dark:bg-[#1a1929] rounded-xl border border-${riskColor}-200 dark:border-${riskColor}-900/50 shadow-sm overflow-hidden`}>
        <div className={`bg-${riskColor}-50 dark:bg-${riskColor}-950/20 px-6 py-4 border-b border-${riskColor}-100 dark:border-${riskColor}-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-${riskColor}-100 dark:bg-${riskColor}-900/40 rounded-lg text-${riskColor}-600 dark:text-${riskColor}-400`}>
              <span className="material-symbols-outlined text-2xl">{riskIcon}</span>
            </div>
            <div>
              <h1 className={`text-lg font-bold text-${riskColor}-700 dark:text-${riskColor}-400 leading-tight`}>
                {isHighRisk ? 'Phishing Detected' : (isSuspicious ? 'Suspicious Activity' : 'No Threats Found')}
              </h1>
              <p className={`text-sm text-${riskColor}-600/80 dark:text-${riskColor}-400/80 font-medium`}>
                {isHighRisk ? 'Critical Threat Level' : (isSuspicious ? 'Medium Threat Level' : 'Low Threat Level')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <span className={`font-mono bg-white dark:bg-black/20 px-2 py-1 rounded text-xs text-${riskColor}-800 dark:text-${riskColor}-200 border border-${riskColor}-200 dark:border-${riskColor}-900/30`}>
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
                className={`absolute inset-0 w-full h-full rounded-t-full bg-${riskColor}-600 origin-bottom transition-all duration-1000`} 
                style={{ transform: `rotate(${scan.riskScore * 1.8}deg)`, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              ></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-white dark:bg-[#1a1929] rounded-t-full flex items-end justify-center pb-1">
                <span className={`text-3xl font-bold text-${riskColor}-600`}>{scan.riskScore}</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Risk Score</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{riskLabel}</p>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology_alt</span>
                Analysis Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {isHighRisk 
                    ? `This URL has a high risk score of ${scan.riskScore}. It may be attempting to impersonate legitimate services or download malicious content.`
                    : `The URL appears relatively safe but proceed with caution.`
                  }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

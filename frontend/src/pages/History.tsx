import { useEffect, useState } from 'react';
import { scanService } from '../services/api';
import type { Scan } from '../services/api';
import { Link } from 'react-router-dom';

export const History = () => {
  const [scans, setScans] = useState<Scan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await scanService.getRecentScans(20, 0);
        setScans(data);
      } catch (error) {
        console.error('Failed to fetch history:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Scan History</h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Recent scan results and analysis reports.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1a1929] shadow-sm rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-40">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">URL</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-48">Risk Score</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-24">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#1a192e]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">Loading history...</td>
                </tr>
              ) : scans.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No scans found.</td>
                </tr>
              ) : (
                scans.map((scan) => (
                  <tr key={scan.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      {new Date(scan.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-xs font-mono" title={scan.url}>
                        {scan.url}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        scan.riskScore > 75 
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300' 
                          : scan.riskScore > 30 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {scan.riskScore > 75 ? 'Phishing' : scan.riskScore > 30 ? 'Suspicious' : 'Safe'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-middle">
                      <div className="w-full max-w-[140px]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{scan.riskScore}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${
                                scan.riskScore > 75 ? 'bg-rose-500' : scan.riskScore > 30 ? 'bg-yellow-500' : 'bg-green-500'
                            }`} 
                            style={{ width: `${scan.riskScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to={`/result/${scan.id}`} state={{ scan }} className="text-primary hover:text-primary-dark font-semibold inline-flex items-center gap-1">
                        Details
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

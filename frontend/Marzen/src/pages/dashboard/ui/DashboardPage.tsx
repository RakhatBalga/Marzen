import { MarketIndices } from '@/widgets/market-indices';
import { LayoutDashboard, Star, Bell } from 'lucide-react';

export const DashboardPage = () => {
  return (
    <div className="mx-auto min-h-dvh max-w-[1440px] px-6 pt-24 pb-8">
      {/* Page header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <LayoutDashboard className="text-[#E91E63]" /> Market Overview
          </h1>
          <p className="text-gray-500 mt-1">Track world indices and your assets in real time.</p>
        </div>
        
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <Star size={20} className="text-gray-600" />
          </button>
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <Bell size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <MarketIndices />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: assets table placeholder */}
        <div className="lg:col-span-2 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200 h-[400px] flex items-center justify-center text-gray-400">
          AssetsTable will appear here from your plan
        </div>

        {/* Right column: AI analytics or news */}
        <div className="bg-[#E91E63]/5 rounded-[32px] p-8 border border-[#E91E63]/10">
          <h3 className="text-lg font-bold text-[#E91E63] mb-4">AI Market Insight</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            NASDAQ is showing steady growth following reports from tech giants. The semiconductor sector may be worth watching.
          </p>
        </div>
      </div>
    </div>
  );
};

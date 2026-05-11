import { ViewMode } from '@/types/inventory';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ViewToggle({
  viewMode,
  onViewModeChange,
}: ViewToggleProps) {
  return (
    <div className="flex bg-[#1a1f24] rounded-[4px] border border-white/10 w-fit p-1">
      {/* Grid View */}
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded-[2px] transition-all flex items-center justify-center ${
          viewMode === 'grid'
            ? 'bg-[#12422c] text-[#86e2b4]'
            : 'text-white/50 hover:text-white'
        }`}
        title="Grid view"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>

      {/* List View */}
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-2 rounded-[2px] transition-all flex items-center justify-center ${
          viewMode === 'list'
            ? 'bg-[#12422c] text-[#86e2b4]'
            : 'text-white/50 hover:text-white'
        }`}
        title="List view"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      </button>
    </div>
  );
}
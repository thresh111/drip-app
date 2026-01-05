import { SearchIcon, XIcon } from 'lucide-react';
import { useHashModal } from '../useHashModal';

export function SearchModal() {
  const { close } = useHashModal('search');

  return (
    <div className="w-[600px] rounded-xl border p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center gap-3 border-b border-(--border-secondary) pb-3">
        <SearchIcon className="size-5 text-(--text-tertiary)" />
        <input
          type="text"
          placeholder="搜索任务..."
          autoFocus
          className="flex-1 bg-transparent text-[16px] text-(--text-primary) outline-none placeholder:text-(--text-tertiary)"
        />
        <kbd className="rounded bg-(--fill-tsp-gray-main) px-2 py-1 text-xs text-(--text-tertiary)">ESC</kbd>
      </div>
      <div className="mt-4 text-center text-sm text-(--text-tertiary)">输入关键词开始搜索</div>

      <XIcon onClick={close}></XIcon>
    </div>
  );
}

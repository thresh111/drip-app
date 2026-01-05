import { Tooltip } from 'antd';
import { CommandIcon, PanelLeftIcon, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useHashModal } from '@/components/common/HashModal';
import SvgIcon from '@/components/common/svg-icon';
import { cn } from '@/lib/utils';

function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const { toggle } = useHashModal('search');

  // ⌘K 快捷键
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  return (
    <motion.div
      initial={false}
      animate={{ width: collapsed ? 54 : 300 }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      className={cn('start-0 z-10 flex h-screen flex-col overflow-hidden bg-(--background-nav)')}
    >
      <div className={'pointer-events-auto flex h-[56px] items-center justify-between py-[12px] ps-[13px] pe-[11px]'}>
        <div
          className={'relative flex h-[32px] w-[32px] items-center justify-center'}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: collapsed && logoHover ? 0 : 1,
            }}
            className={'absolute inset-0 flex items-center justify-center'}
          >
            <SvgIcon name={'manus-logo'} className={'size-7'} />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              opacity: collapsed && logoHover ? 1 : 0,
              pointerEvents: collapsed && logoHover ? 'auto' : 'none',
            }}
            className={'absolute inset-0 flex items-center justify-center rounded-md bg-(--fill-tsp-gray-main) transition-colors'}
          >
            <div className={'flex size-[32px] cursor-pointer items-center justify-center rounded-md hover:bg-(--fill-tsp-gray-main)'}>
              <Tooltip title={'展开侧栏'} arrow={false}>
                <PanelLeftIcon className={'size-[18px] text-(--icon-secondary)'} onClick={() => setCollapsed(false)} />
              </Tooltip>
            </div>
          </motion.div>
        </div>
        {!collapsed && (
          <div className={'flex size-[32px] cursor-pointer items-center justify-center rounded-md hover:bg-(--fill-tsp-gray-main)'}>
            <Tooltip title={'关闭侧栏'} arrow={false}>
              <PanelLeftIcon className={'size-[18px] text-(--icon-secondary)'} onClick={() => setCollapsed(true)} />
            </Tooltip>
          </div>
        )}
      </div>
      <div className={'flex min-h-0 flex-1 flex-col gap-[2px] px-[6px]'}>
        <div
          onClick={toggle}
          className={cn(
            'group pointer-events-auto flex h-[36px] w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 transition-colors hover:bg-(--fill-tsp-white-light)',
            collapsed && 'justify-center',
          )}
        >
          <div className={'flex size-[18px] shrink-0 items-center justify-center'}>
            <Tooltip title={collapsed ? '搜索' : ''} arrow={false} placement="right">
              <SearchIcon className={'size-[18px]'} />
            </Tooltip>
          </div>
          {!collapsed && <div className={'flex min-w-0 flex-1 items-center gap-[4px] text-[14px] text-(--text-primary)'}>任务</div>}
          {!collapsed && (
            <div className={'flex shrink-0 items-center gap-1'}>
              <div className="hidden items-center gap-1 text-sm text-(--text-tertiary) group-hover:inline-flex">
                <CommandIcon className={'size-[14px]'} />K
              </div>
            </div>
          )}
        </div>

        <div className={'mx-[6px] flex h-full min-h-0 flex-1 flex-col'}></div>
      </div>
    </motion.div>
  );
}

export default Nav;

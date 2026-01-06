import { Divider, Tooltip } from '@douyinfe/semi-ui';
import { CommandIcon, LibraryBigIcon, PanelLeftIcon, SearchIcon, SquarePenIcon, WorkflowIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useHashModal } from '@/components/common/HashModal';
import SvgIcon from '@/components/common/svg-icon';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggle } = useHashModal('search');
  const [collapsed, setCollapsed] = useState(false);
  const [compact, setCompact] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

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
      onAnimationComplete={() => {
        setCompact(collapsed);
      }}
      className={cn('bg-sidebar border-sidebar-border start-0 z-10 flex h-screen flex-col overflow-hidden border-r')}
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
            className={'absolute inset-0 flex items-center justify-center rounded-md transition-colors'}
          >
            <div className={'flex size-[32px] cursor-pointer items-center justify-center'}>
              <Tooltip content={'展开侧栏'} arrow={false} position={'bottom'}>
                <PanelLeftIcon className={'size-[18px]'} onClick={() => setCollapsed(false)} />
              </Tooltip>
            </div>
          </motion.div>
        </div>
        {!collapsed && (
          <div className={'flex size-[32px] cursor-pointer items-center justify-center rounded-md'}>
            <Tooltip content={'关闭侧栏'} arrow={false} position="bottom">
              <PanelLeftIcon className={'size-[18px]'} onClick={() => setCollapsed(true)} />
            </Tooltip>
          </div>
        )}
      </div>

      <div className={'flex min-h-0 flex-1 flex-col gap-[2px] px-[6px]'}>
        <div
          onClick={() => navigate('/')}
          className={cn(
            'group hover:bg-semi-fill-0 pointer-events-auto flex h-[36px] w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 transition-colors',
            compact && 'justify-center',
            location.pathname === '/' && 'bg-semi-fill-1',
          )}
        >
          <div className={'flex size-[18px] shrink-0 items-center justify-center'}>
            <Tooltip content={collapsed ? '新建任务' : ''} arrow={false} position="right">
              <SquarePenIcon className={'size-[18px]'} />
            </Tooltip>
          </div>
          {!collapsed && <div className={'text-semi-text-0 flex min-w-0 flex-1 items-center gap-[4px] text-[14px]'}>新建任务</div>}
        </div>

        <div
          onClick={toggle}
          className={cn(
            'group hover:bg-semi-fill-0 pointer-events-auto flex h-[36px] w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 transition-colors',
            compact && 'justify-center',
          )}
        >
          <div className={'flex size-[18px] shrink-0 items-center justify-center'}>
            <Tooltip content={collapsed ? '搜索' : ''} arrow={false} position="right">
              <SearchIcon className={'size-[18px]'} />
            </Tooltip>
          </div>
          {!collapsed && <div className={'text-semi-text-0 flex min-w-0 flex-1 items-center gap-[4px] text-[14px]'}>任务</div>}
          {!collapsed && (
            <div className={'flex shrink-0 items-center gap-1'}>
              <div className="text-semi-text-2 hidden items-center gap-1 text-sm group-hover:inline-flex">
                <CommandIcon className={'size-[14px]'} />K
              </div>
            </div>
          )}
        </div>

        <div
          className={cn(
            'group hover:bg-semi-fill-0 pointer-events-auto flex h-[36px] w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 transition-colors',
            compact && 'justify-center',
            location.pathname === '/knowledge-base' && 'bg-semi-fill-1',
          )}
          onClick={() => navigate('/knowledge-base')}
        >
          <div className={'flex size-[18px] shrink-0 items-center justify-center'}>
            <Tooltip content={collapsed ? '知识库' : ''} arrow={false} position="right">
              <LibraryBigIcon className={'size-[18px]'} />
            </Tooltip>
          </div>
          {!collapsed && <div className={'text-semi-text-0 flex min-w-0 flex-1 items-center gap-[4px] text-[14px]'}>知识库</div>}
        </div>

        <div
          className={cn(
            'group hover:bg-semi-fill-0 pointer-events-auto flex h-[36px] w-full cursor-pointer items-center gap-3 rounded-[10px] px-3 transition-colors',
            compact && 'justify-center',
            location.pathname === '/workflow' && 'bg-semi-fill-1',
          )}
          onClick={() => navigate('/workflow')}
        >
          <div className={'flex size-[18px] shrink-0 items-center justify-center'}>
            <Tooltip content={collapsed ? '工作流' : ''} arrow={false} position="right">
              <WorkflowIcon className={'size-[18px]'} />
            </Tooltip>
          </div>
          {!collapsed && <div className={'text-semi-text-0 flex min-w-0 flex-1 items-center gap-[4px] text-[14px]'}>工作流</div>}
        </div>

        {!collapsed && (
          <Divider>
            <span className="text-semi-text-1 text-sm">最近任务</span>
          </Divider>
        )}
      </div>
    </motion.div>
  );
}

export default Nav;

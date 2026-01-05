import { Tooltip } from 'antd';
import { PanelLeftIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import SvgIcon from '@/components/common/svg-icon';
import { cn } from '@/lib/utils';

function Nav() {
  const [collapsed, setCollapsed] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{ width: collapsed ? 54 : 300 }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      className={cn('start-0 z-10 flex h-screen flex-col overflow-hidden bg-(--background-nav)')}
    >
      <div className={'pointer-events-auto flex items-center justify-between py-[12px] ps-[13px] pe-[11px]'}>
        <div className={'relative flex items-center'} onMouseEnter={() => setLogoHover(true)} onMouseLeave={() => setLogoHover(false)}>
          <motion.div
            initial={false}
            animate={{
              opacity: collapsed && logoHover ? 0 : 1,
              scale: collapsed && logoHover ? 0.98 : 1,
            }}
          >
            <SvgIcon name={'manus-logo'} className={'size-7'} />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              opacity: collapsed && logoHover ? 1 : 0,
              scale: collapsed && logoHover ? 1 : 0.95,
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
    </motion.div>
  );
}

export default Nav;

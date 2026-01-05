import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { getRegisteredModals, subscribeRegistry } from './registry';
import { useActiveModals, useHashModal } from './useHashModal';

interface ModalWrapperProps {
  id: string;
  children: React.ReactNode;
  zIndex?: number;
}

function ModalWrapper({ id, children, zIndex = 1000 }: ModalWrapperProps) {
  const { close } = useHashModal(id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-auto fixed inset-0"
      style={{ zIndex }}
    >
      <div className="fixed inset-0 h-full w-full bg-transparent backdrop-blur-none" onClick={close} />

      <div className="pointer-events-none relative flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

function getRegistrySnapshot() {
  return getRegisteredModals();
}

export function HashModalRoot() {
  const registry = useSyncExternalStore(subscribeRegistry, getRegistrySnapshot, getRegistrySnapshot);
  const activeModals = useActiveModals();

  // 禁止背景滚动
  useEffect(() => {
    if (activeModals.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModals.length]);

  const modalsToRender = activeModals
    .filter((id) => registry.has(id))
    .map((id) => {
      const config = registry.get(id)!;
      return { id, ...config };
    });

  return createPortal(
    <AnimatePresence>
      {modalsToRender.map(({ id, component: Component, zIndex }) => (
        <ModalWrapper key={id} id={id} zIndex={zIndex}>
          <Component />
        </ModalWrapper>
      ))}
    </AnimatePresence>,
    document.body,
  );
}

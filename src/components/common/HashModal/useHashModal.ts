import { useCallback, useSyncExternalStore } from 'react';

/** 解析 hash 字符串为数组 */
function parseHash(hash: string): string[] {
  const cleanHash = hash.replace(/^#/, '');
  if (!cleanHash) return [];
  return cleanHash.split(',').filter(Boolean);
}

/** 将数组转为 hash 字符串 */
function toHashString(modals: string[]): string {
  return modals.length > 0 ? `#${modals.join(',')}` : '';
}

/** 获取当前活跃的弹窗列表 */
export function getActiveModals(): string[] {
  return parseHash(window.location.hash);
}

/** 订阅 hash 变化 */
function subscribeHash(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}

/** 获取 hash 快照 */
function getHashSnapshot() {
  return window.location.hash;
}

/**
 * Hash 弹窗控制 Hook
 * @param id 弹窗唯一标识
 */
export function useHashModal(id: string) {
  const hash = useSyncExternalStore(subscribeHash, getHashSnapshot, getHashSnapshot);
  const activeModals = parseHash(hash);
  const isOpen = activeModals.includes(id);

  const open = useCallback(() => {
    const current = getActiveModals();
    if (!current.includes(id)) {
      window.location.hash = toHashString([...current, id]);
    }
  }, [id]);

  const close = useCallback(() => {
    const current = getActiveModals();
    const next = current.filter((m) => m !== id);
    if (next.length > 0) {
      window.location.hash = toHashString(next);
    } else {
      history.pushState(null, '', window.location.pathname + window.location.search);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  }, [id]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return { isOpen, open, close, toggle };
}

/** Hook: 获取所有活跃弹窗 */
export function useActiveModals() {
  const hash = useSyncExternalStore(subscribeHash, getHashSnapshot, getHashSnapshot);
  return parseHash(hash);
}

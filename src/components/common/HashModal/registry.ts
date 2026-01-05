import type { ComponentType } from 'react';

export interface ModalConfig {
  component: ComponentType;
  zIndex?: number;
}

type ModalRegistry = Map<string, ModalConfig>;

const registry: ModalRegistry = new Map();
const listeners: Set<() => void> = new Set();

/** 注册弹窗组件 */
export function registerHashModal(id: string, component: ComponentType, options?: Omit<ModalConfig, 'component'>) {
  registry.set(id, { component, ...options });
  listeners.forEach((listener) => listener());
}

/** 注销弹窗组件 */
export function unregisterHashModal(id: string) {
  registry.delete(id);
  listeners.forEach((listener) => listener());
}

/** 获取所有已注册的弹窗 */
export function getRegisteredModals(): ModalRegistry {
  return registry;
}

/** 订阅注册表变化 */
export function subscribeRegistry(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

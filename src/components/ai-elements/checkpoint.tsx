'use client';

import { Tooltip, Button, Divider } from '@douyinfe/semi-ui-19';
import { cn } from '@/lib/utils';
import { BookmarkIcon, type LucideProps } from 'lucide-react';
import type { ComponentProps, HTMLAttributes } from 'react';

export type CheckpointProps = HTMLAttributes<HTMLDivElement> & {
  tooltip?: string;
  onClick?: () => void;
};

export const Checkpoint = ({ className, tooltip, content, onClick, ...props }: CheckpointProps) => (
  <div className={cn('text-muted-foreground flex items-center gap-0.5 overflow-hidden', className)} {...props}>
    <Divider align="left">
      <CheckpointIcon />
      <Tooltip content={'回到这个节点'} position={'bottom'}>
        <div className="mx-2 flex items-center gap-2 text-sm">
          <Button theme={'borderless'}>{content}</Button>
        </div>
      </Tooltip>
    </Divider>
  </div>
);

type CheckpointIconProps = LucideProps;

const CheckpointIcon = ({ className, children, ...props }: CheckpointIconProps) =>
  children ?? <BookmarkIcon className={cn('size-5 shrink-0', className)} {...props} />;

export type CheckpointTriggerProps = ComponentProps<typeof Button> & {};

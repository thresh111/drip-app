import { Popover, Tag, Carousel, Typography, Button } from '@douyinfe/semi-ui';
import { IconChevronLeft, IconChevronRight } from '@douyinfe/semi-icons';
import { useRef, useState, useCallback } from 'react';

interface Source {
  title: string;
  url: string;
  description: string;
}

interface InlineCitationProps {
  citation: {
    text: string;
    sources: Source[];
  };
}

export const InlineCitation = ({ citation }: InlineCitationProps) => {
  return (
    <span className="group inline-flex items-center gap-1">
      <span className="group-hover:bg-accent rounded-sm px-0.5 transition-colors">{citation.text}</span>
      <Popover position={'top'} visible={true} content={<InlineCitationContent sources={citation.sources} />}>
        <Tag className={'ml-1 cursor-pointer rounded-full'} shape={'circle'}>
          {citation.sources[0] ? (
            <>
              {new URL(citation.sources[0].url).hostname} {citation.sources.length > 1 && `+${citation.sources.length - 1}`}
            </>
          ) : (
            'unknown'
          )}
        </Tag>
      </Popover>
    </span>
  );
};

interface InlineCitationContentProps {
  sources: Source[];
}

export const InlineCitationContent = ({ sources }: InlineCitationContentProps) => {
  const carouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = sources.length;

  const handlePrev = useCallback(() => {
    carouselRef.current?.prev();
  }, []);

  const handleNext = useCallback(() => {
    carouselRef.current?.next();
  }, []);

  const handleChange = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="w-80 overflow-hidden">
      <div className="bg-secondary flex items-center justify-between gap-2 p-2">
        <div className="flex items-center gap-1">
          <Button theme="borderless" type="tertiary" size="small" icon={<IconChevronLeft />} onClick={handlePrev} aria-label="上一个" />
          <Button theme="borderless" type="tertiary" size="small" icon={<IconChevronRight />} onClick={handleNext} aria-label="下一个" />
        </div>
        <div className="text-muted-foreground px-3 py-1 text-xs">
          {currentIndex + 1}/{total}
        </div>
      </div>

      <Carousel
        ref={carouselRef}
        theme="primary"
        showArrow={false}
        showIndicator={false}
        onChange={handleChange}
        style={{ height: 160, overflow: 'hidden' }}
      >
        {sources.map((source, index) => (
          <div key={index} className="flex h-[160px] flex-col gap-2 space-y-2 p-4" style={{ overflowY: 'auto' }}>
            <Typography.Title heading={6} style={{ margin: 0 }}>
              {source.title}
            </Typography.Title>
            <Typography.Text link={{ href: source.url, target: '_blank' }} type="tertiary" size="small">
              {source.url}
            </Typography.Text>
            <Typography.Paragraph size="small">{source.description}</Typography.Paragraph>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

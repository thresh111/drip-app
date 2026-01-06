import { InlineCitation } from '@/components/ai-elements/inline-citation';

const citation = {
  text: 'The technology continues to evolve rapidly, with new breakthroughs being announced regularly',
  sources: [
    {
      title: 'Advances in Natural Language Processing',
      url: 'https://example.com/nlp-advances',
      description:
        'A comprehensive study on the recent developments in natural language processing technologies and their applications.A comprehensive study on the recent developments in natural language processing technologies and their applications.A comprehensive study on the recent developments in natural language processing technologies and their applications.',
    },
    {
      title: 'Breakthroughs in Machine Learning',
      url: 'https://mlnews.org/breakthroughs',
      description: 'An overview of the most significant machine learning breakthroughs in the past year.',
    },
    {
      title: 'AI in Healthcare: Current Trends',
      url: 'https://healthai.com/trends',
      description: 'A report on how artificial intelligence is transforming healthcare and diagnostics.',
    },
    {
      title: 'Ethics of Artificial Intelligence',
      url: 'https://aiethics.org/overview',
      description: 'A discussion on the ethical considerations and challenges in the development of AI.',
    },
    {
      title: 'Scaling Deep Learning Models',
      url: 'https://deeplearninghub.com/scaling-models',
      description: 'Insights into the technical challenges and solutions for scaling deep learning architectures.',
    },
    {
      title: 'Natural Language Understanding Benchmarks',
      url: 'https://nlubenchmarks.com/latest',
      description: 'A summary of the latest benchmarks and evaluation metrics for natural language understanding systems.',
    },
  ],
};

function InlineCitationDemo() {
  return <InlineCitation citation={citation} />;
}

export default InlineCitationDemo;

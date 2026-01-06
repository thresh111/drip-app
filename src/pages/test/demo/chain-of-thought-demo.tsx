import {
  ChainOfThought,
  ChainOfThoughtHeader,
  ChainOfThoughtContent,
  ChainOfThoughtStep,
  ChainOfThoughtSearchResults,
  ChainOfThoughtSearchResult,
  ChainOfThoughtImage,
} from '@/components/ai-elements/chain-of-thought';

import { SearchIcon, ImageIcon } from 'lucide-react';
import { Image } from '@douyinfe/semi-ui';

function ChainOfThoughtDemo() {
  return (
    <ChainOfThought defaultOpen>
      <ChainOfThoughtHeader />
      <ChainOfThoughtContent>
        <ChainOfThoughtStep icon={SearchIcon} label="Searching for profiles for Hayden Bleasel" status="complete">
          <ChainOfThoughtSearchResults>
            {['https://www.x.com', 'https://www.instagram.com', 'https://www.github.com'].map((website) => (
              <ChainOfThoughtSearchResult key={website}>{new URL(website).hostname}</ChainOfThoughtSearchResult>
            ))}
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep icon={ImageIcon} label="Found the profile photo for Hayden Bleasel" status="complete">
          <ChainOfThoughtImage caption="Hayden Bleasel's profile photo from x.com, showing a Ghibli-style man.">
            <Image alt="Example generated image" src={'https://lipsum.app/id/24/1600x900'} className="aspect-square h-[150px] border" />
          </ChainOfThoughtImage>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep
          label="Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company."
          status="complete"
        />

        <ChainOfThoughtStep icon={SearchIcon} label="Searching for recent work..." status="active">
          <ChainOfThoughtSearchResults>
            {['https://www.github.com', 'https://www.dribbble.com'].map((website) => (
              <ChainOfThoughtSearchResult key={website}>{new URL(website).hostname}</ChainOfThoughtSearchResult>
            ))}
          </ChainOfThoughtSearchResults>
        </ChainOfThoughtStep>
      </ChainOfThoughtContent>
    </ChainOfThought>
  );
}

export default ChainOfThoughtDemo;

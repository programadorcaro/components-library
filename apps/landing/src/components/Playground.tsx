import { useState } from 'react';
import { ComponentDoc, StoryConfig } from './ComponentDoc';

export interface PlaygroundProps {
  stories: StoryConfig<any>[];
}

export function Playground({
  stories,
}: PlaygroundProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(
    stories[0]?.id || ''
  );

  const sortedStories = [...stories].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const selectedStory = sortedStories.find((s) => s.id === selectedStoryId);

  const StoryComponent = selectedStory;

  return (
    <div className="playground">
      <div className="playground-sidebar">
        <h3 className="playground-sidebar-title">Components</h3>

        <div className="playground-stories-list">
          {sortedStories.map((story) => (
            <button
              key={story.id}
              className={`playground-story-button ${
                selectedStoryId === story.id ? 'active' : ''
              }`}
              onClick={() => setSelectedStoryId(story.id)}
              type="button"
            >
              {story.title}
            </button>
          ))}
        </div>
      </div>

      <div className="playground-content">
        {StoryComponent && <ComponentDoc story={StoryComponent} />}
      </div>
    </div>
  );
}

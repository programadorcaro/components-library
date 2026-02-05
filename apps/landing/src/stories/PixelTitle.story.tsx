import { PixelTitle } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const pixelTitleStory: StoryConfig = {
  id: 'pixel-title',
  title: 'PixelTitle',
  component: PixelTitle,
  description:
    'Título pixel art com efeitos de glitch e flutuação para headings impactantes.',
  isVoidElement: false,
  complexExample: `import { PixelTitle } from '@les-ui/pixel';

<PixelTitle text="Game Over" glitch={true} float={true} />`,
  defaultProps: {
    text: 'Game Over',
    glitch: true,
    float: true,
  },
  propsConfig: {
    text: {
      type: 'text',
      default: 'Game Over',
      label: 'Text',
      description: 'Texto do título',
    },
    glitch: {
      type: 'boolean',
      default: true,
      label: 'Glitch',
      description: 'Aplicar efeito de glitch',
    },
    float: {
      type: 'boolean',
      default: true,
      label: 'Float',
      description: 'Aplicar efeito de flutuação',
    },
  },
  presets: [
    {
      name: 'Default Title',
      props: {
        text: 'Game Over',
        glitch: true,
        float: true,
      },
    },
    {
      name: 'No Float',
      props: {
        text: 'Level Complete',
        glitch: true,
        float: false,
      },
    },
    {
      name: 'No Glitch',
      props: {
        text: 'Welcome',
        glitch: false,
        float: true,
      },
    },
    {
      name: 'Simple',
      props: {
        text: 'Menu',
        glitch: false,
        float: false,
      },
    },
  ],
};

import { Skeleton } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const skeletonStory: StoryConfig = {
  id: 'skeleton',
  title: 'Skeleton',
  component: Skeleton,
  description:
    'Placeholder de carregamento com estilo pixel art para exibir enquanto o conteúdo está sendo carregado.',
  isVoidElement: true,
  defaultProps: {
    width: 200,
    height: 20,
  },
  propsConfig: {
    width: {
      type: 'number',
      default: 200,
      label: 'Width',
      description: 'Largura em pixels',
    },
    height: {
      type: 'number',
      default: 20,
      label: 'Height',
      description: 'Altura em pixels',
    },
  },
  presets: [
    {
      name: 'Small Skeleton',
      props: {
        width: 100,
        height: 16,
      },
    },
    {
      name: 'Medium Skeleton',
      props: {
        width: 200,
        height: 20,
      },
    },
    {
      name: 'Large Skeleton',
      props: {
        width: 400,
        height: 100,
      },
    },
    {
      name: 'Square Skeleton',
      props: {
        width: 50,
        height: 50,
      },
    },
  ],
};

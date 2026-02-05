import { ProgressBar } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const progressStory: StoryConfig = {
  id: 'progress',
  title: 'ProgressBar',
  component: ProgressBar,
  description:
    'Barra de progresso pixel art para exibir o progresso de tarefas ou carregamento.',
  isVoidElement: true,
  defaultProps: {
    value: 65,
    max: 100,
    variant: 'default' as const,
  },
  propsConfig: {
    value: {
      type: 'number',
      default: 65,
      label: 'Value',
      description: 'Valor atual do progresso',
    },
    max: {
      type: 'number',
      default: 100,
      label: 'Max',
      description: 'Valor máximo do progresso',
    },
    variant: {
      type: 'select',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'accent', label: 'Accent' },
        { value: 'success', label: 'Success' },
      ],
      default: 'default',
      label: 'Variant',
      description: 'Variante de cor da barra',
    },
  },
  presets: [
    {
      name: 'Medium Progress',
      props: {
        value: 65,
        max: 100,
        variant: 'default' as const,
      },
    },
    {
      name: 'Almost Done',
      props: {
        value: 85,
        max: 100,
        variant: 'success' as const,
      },
    },
    {
      name: 'Accent Progress',
      props: {
        value: 40,
        max: 100,
        variant: 'accent' as const,
      },
    },
    {
      name: 'Just Started',
      props: {
        value: 15,
        max: 100,
        variant: 'default' as const,
      },
    },
  ],
  complexExample: `import { ProgressBar } from '@les-ui/pixel';

<ProgressBar value={65} max={100} variant="default" />`,
};

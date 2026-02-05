import { StoryConfig } from '../components/ComponentDoc';
import { CardExample } from '../components/examples/CardExample';

export const cardStory: StoryConfig = {
  id: 'card',
  title: 'Card',
  component: CardExample,
  description:
    'Contêiner flexível com estilo pixel art para exibir conteúdo relacionado de forma estruturada.',
  isVoidElement: false,
  defaultProps: {
    variant: 'default' as const,
  },
  propsConfig: {
    variant: {
      type: 'select',
      options: [
        { value: 'default', label: 'Default' },
        { value: 'accent', label: 'Accent' },
        { value: 'danger', label: 'Danger' },
        { value: 'success', label: 'Success' },
      ],
      default: 'default',
      label: 'Variant',
      description: 'Variante de cor do card',
    },
  },
  presets: [
    {
      name: 'Default Card',
      props: {
        variant: 'default' as const,
      },
    },
    {
      name: 'Accent Card',
      props: {
        variant: 'accent' as const,
      },
    },
    {
      name: 'Danger Card',
      props: {
        variant: 'danger' as const,
      },
    },
    {
      name: 'Success Card',
      props: {
        variant: 'success' as const,
      },
    },
  ],
};

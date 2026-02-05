import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

const CardExample = (props: any) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>Character Card</CardTitle>
    </CardHeader>
    <CardBody>
      <p style={{ fontSize: '14px', color: '#999' }}>Level 42 Warrior</p>
    </CardBody>
    <CardFooter>
      <span style={{ fontSize: '12px', color: '#666' }}>View Details</span>
    </CardFooter>
  </Card>
);

export const cardStory: StoryConfig = {
  id: 'card',
  title: 'Card',
  component: CardExample,
  description:
    'Contêiner principal com estilo pixel art para agrupar conteúdo relacionado.',
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
      name: 'Accent Quest Card',
      props: {
        variant: 'accent' as const,
      },
    },
    {
      name: 'Danger Boss Card',
      props: {
        variant: 'danger' as const,
      },
    },
    {
      name: 'Success Achievement Card',
      props: {
        variant: 'success' as const,
      },
    },
  ],
};

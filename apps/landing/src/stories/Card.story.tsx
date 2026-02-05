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
      <CardTitle>Game Stats</CardTitle>
    </CardHeader>
    <CardBody>
      <p style={{ fontSize: '14px', color: '#999' }}>
        Track your progress, achievements and rankings with real-time
        statistics.
      </p>
    </CardBody>
    <CardFooter>
      <span style={{ fontSize: '12px', color: '#666' }}>View stats →</span>
    </CardFooter>
  </Card>
);

CardExample.displayName = 'Card';

export const cardStory: StoryConfig = {
  id: 'card',
  title: 'Card',
  component: CardExample,
  description:
    'Contêiner flexível com estilo pixel art para exibir conteúdo relacionado de forma estruturada.',
  isVoidElement: false,
  complexExample: `import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@les-ui/pixel';

<Card variant="default">
  <CardHeader>
    <CardTitle>Game Stats</CardTitle>
  </CardHeader>
  <CardBody>
    <p style={{ fontSize: '14px', color: '#999' }}>
      Track your progress, achievements and rankings with real-time
      statistics.
    </p>
  </CardBody>
  <CardFooter>
    <span style={{ fontSize: '12px', color: '#666' }}>View stats →</span>
  </CardFooter>
</Card>`,
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

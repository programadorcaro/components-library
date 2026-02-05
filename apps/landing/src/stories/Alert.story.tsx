import { Alert } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

export const alertStory: StoryConfig = {
  id: 'alert',
  title: 'Alert',
  component: Alert,
  description:
    'Componentes de alerta com ícones para exibir mensagens importantes ou de status.',
  isVoidElement: false,
  defaultProps: {
    variant: 'info' as const,
    children: 'This is an important information message.',
  },
  propsConfig: {
    variant: {
      type: 'select',
      options: [
        { value: 'info', label: 'Info' },
        { value: 'success', label: 'Success' },
        { value: 'warning', label: 'Warning' },
        { value: 'danger', label: 'Danger' },
      ],
      default: 'info',
      label: 'Variant',
      description: 'Variante de cor do alerta',
    },
  },
  presets: [
    {
      name: 'Info Alert',
      props: {
        variant: 'info' as const,
        children: 'This is an important information message.',
      },
    },
    {
      name: 'Success Alert',
      props: {
        variant: 'success' as const,
        children: 'Your changes have been saved successfully!',
      },
    },
    {
      name: 'Warning Alert',
      props: {
        variant: 'warning' as const,
        children: 'Please review your settings before proceeding.',
      },
    },
    {
      name: 'Danger Alert',
      props: {
        variant: 'danger' as const,
        children: 'An error occurred. Please try again later.',
      },
    },
  ],
  complexExample: `import { Alert } from '@les-ui/pixel';

<Alert variant="info">This is an important information message.</Alert>`,
};

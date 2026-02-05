import { StoryConfig } from '../components/ComponentDoc';
import { SelectExample } from '../components/examples/SelectExample';

export const selectStory: StoryConfig = {
  id: 'select',
  title: 'Select',
  component: SelectExample,
  description:
    'Dropdown com estilo pixel art para seleção de opções.',
  isVoidElement: true,
  defaultProps: {
    placeholder: 'Select an option...',
    disabled: false,
  },
  propsConfig: {
    placeholder: {
      type: 'text',
      default: 'Select an option...',
      label: 'Placeholder',
      description: 'Texto exibido quando nenhuma opção está selecionada',
    },
    disabled: {
      type: 'boolean',
      default: false,
      label: 'Disabled',
      description: 'Desabilitar o select',
    },
  },
  presets: [
    {
      name: 'Default Select',
      props: {
        placeholder: 'Select an option...',
        disabled: false,
      },
    },
    {
      name: 'Character Select',
      props: {
        placeholder: 'Choose your character...',
        disabled: false,
      },
    },
    {
      name: 'Difficulty Select',
      props: {
        placeholder: 'Select difficulty...',
        disabled: false,
      },
    },
    {
      name: 'Disabled Select',
      props: {
        placeholder: 'Select an option...',
        disabled: true,
      },
    },
  ],
};

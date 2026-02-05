import { Select } from '@les-ui/pixel';
import { StoryConfig } from '../components/ComponentDoc';

const SelectExample = (props: any) => (
  <Select
    {...props}
    options={[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]}
  />
);

SelectExample.displayName = 'Select';

export const selectStory: StoryConfig = {
  id: 'select',
  title: 'Select',
  component: SelectExample,
  description:
    'Dropdown com estilo pixel art para seleção de opções.',
  isVoidElement: true,
  complexExample: `import { Select } from '@les-ui/pixel';

<Select
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  placeholder="Select an option..."
  disabled={false}
/>`,
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

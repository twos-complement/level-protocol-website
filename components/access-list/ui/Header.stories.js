import HeaderUI, { VARIANTS } from './Header'

const Template = ({ ...args }) => <HeaderUI {...args} />

export const Header = Template.bind({})
Header.args = {
  count: 100,
  maximum: undefined,
  title: 'Alpha List',
  variant: 'primary',
}

const Story = {
  title: 'Access List / Header',
  component: HeaderUI,
  argTypes: {
    title: {
      description: 'The title text is required.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    count: {
      description:
        'The current count of items in the list, capped a maximum if provided.',
      table: {
        type: {
          summary: 'integer',
        },
      },
      control: {
        type: 'range',
        min: 1,
        max: 10000,
        step: 1,
      },
    },
    maximum: {
      description: 'The maximum number to be shown in the list.',
      table: {
        type: {
          summary: 'integer',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
      control: {
        type: 'range',
        min: 1,
        max: 10000,
        step: 1,
      },
    },
    variant: {
      description: `The list level: ${VARIANTS.join(', ')}.`,
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      options: VARIANTS,
      control: {
        type: 'select',
      },
    },
  },
}

export default Story

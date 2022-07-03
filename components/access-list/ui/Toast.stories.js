import Icon from './Icon'
import ToastUI from './Toast'

const Template = ({ ...args }) => <ToastUI {...args} />

export const Toast = Template.bind({})
Toast.args = {
  buttonText: 'Join',
  href: '/join',
  icon: <Icon iconName="envelope" />,
  subText: 'Join the waitlist for the next available spot.',
  title: '100 Alpha Spots Claimed!',
}

const Story = {
  title: 'Access List / Toast',
  component: ToastUI,
  argTypes: {
    title: {
      description: 'The title text is required.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    subText: {
      description:
        'When provided, the sub text appears below the title and provides additional explanation.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      description: 'An optional icon to display.',
      table: {
        type: {
          summary: 'Icon [node]',
        },
      },
    },
    href: {
      description:
        'When provided with the `buttonText`, the href adds a button that links to an internal page.',
      table: {
        type: {
          summary: 'URL [relative-only]',
        },
      },
    },
    buttonText: {
      description:
        'When provided with the `href`, the optional internal link button displays this text.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
}

export default Story

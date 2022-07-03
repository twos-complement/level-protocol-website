import { LIST_VARIANTS } from './constants'
import MemberUI from './Member'

const Template = ({ ...args }) => <MemberUI {...args} />

export const Member = Template.bind({})
Member.args = {
  address: '0xEB0545F8B921d0D685D4e08Fb4B6154355C97B5c',
  colorHue: 84,
  colorLightness: 36,
  ens: undefined,
  nftSrc: undefined,
  variant: 'primary',
}

const Story = {
  title: 'Access List / Member',
  component: MemberUI,
  argTypes: {
    address: {
      description: 'The member address.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    colorHue: {
      description: 'The color hue chosen by the member.',
      table: {
        type: {
          summary: 'degree',
        },
        defaultValue: {
          summary: 0,
        },
      },
      control: {
        type: 'range',
        min: 1,
        max: 360,
        step: 0.1,
      },
    },
    colorLightness: {
      description: 'The color lightness chosen by the member.',
      table: {
        type: {
          summary: 'percentage',
        },
        defaultValue: {
          summary: 0,
        },
      },
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 0.1,
      },
    },
    ens: {
      description: 'The member ens address.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    nftSrc: {
      description: 'The pfp uri selected by the member.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '/images/illustrations/nft/nft.png',
        },
      },
    },
    variant: {
      description: `The list level: ${LIST_VARIANTS.join(', ')}.`,
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
      options: LIST_VARIANTS,
      control: {
        type: 'select',
      },
    },
  },
}

export default Story

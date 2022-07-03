import { LIST_VARIANTS } from './constants'
import ContainerUI from './Container'

const MEMBER = {
  address: '0xEB0545F8B921d0D685D4e08Fb4B6154355C97B5c',
  colorHue: 84,
  colorLightness: 36,
  ens: null,
  github: null,
  nftAddress: '0x0',
  nftId: '0',
  nftSrc: null,
  _id: '331331060064321607',
}

const MEMBERS = Array(100).fill(MEMBER)

const Template = ({ ...args }) => <ContainerUI {...args} />

export const Container = Template.bind({})
Container.args = {
  members: MEMBERS,
  variant: 'primary',
}

const Story = {
  title: 'Access List / Container',
  component: ContainerUI,
  argTypes: {
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

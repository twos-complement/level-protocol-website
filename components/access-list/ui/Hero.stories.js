import HeroUI from './Hero'

const Template = ({ ...args }) => <HeroUI {...args} />

export const Hero = Template.bind({})
Hero.args = {
  totalReserved: 855,
}

const Story = {
  title: 'Access List / Hero',
  component: HeroUI,
  argTypes: {
    totalReserved: {
      description: 'The current total reserved LVL token spaces.',
      table: {
        type: {
          summary: 'integer',
        },
        defaultValue: {
          summary: 0,
        },
      },
      control: {
        type: 'range',
        min: 1,
        max: 10000,
        step: 1,
      },
    },
  },
}

export default Story

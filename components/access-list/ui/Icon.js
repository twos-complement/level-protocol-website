import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import AvatarSvg from '../assets/avatar.svg'
import EnvelopeSvg from '../assets/envelope-open.svg'
import WatchSvg from '../assets/watch.svg'

const ICONS = {
  avatar: AvatarSvg,
  envelope: EnvelopeSvg,
  watch: WatchSvg,
}

export const ICON_NAMES = Object.keys(ICONS)
export const SIZES = ['extra-small', 'small', 'medium']

const StyledIcon = styled.figure`
  margin: 0;
  padding: 0;
  width: var(--size, 4.8rem);
  height: var(--size, 4.8rem);

  > svg {
    width: inherit;
    height: inherit;
  }

  ${({ size }) => {
    switch (size) {
      case 'extra-small':
        return css`
          --size: 2.4rem;
        `
      case 'small':
        return css`
          --size: 3.2rem;
        `
      case 'medium':
      default:
        return css`
          --size: 4.8rem;
        `
    }
  }}
`

const Icon = ({ iconName, size, ...props }) => {
  const IconSvg = ICONS[iconName]

  return (
    <StyledIcon size={size}>
      <IconSvg {...props} />
    </StyledIcon>
  )
}

Icon.propTypes = {
  iconName: PropTypes.oneOf(ICON_NAMES).isRequired,
  size: PropTypes.oneOf(SIZES),
}

Icon.defaultProps = {
  size: 'medium',
}

export default Icon

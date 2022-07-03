import styled from 'styled-components'
import PropTypes from 'prop-types'

import EnvelopeSvg from '../assets/envelope-open.svg'

const ICONS = {
  envelope: EnvelopeSvg,
}

export const ICON_NAMES = Object.keys(ICONS)

const StyledIcon = styled.figure`
  margin: 0;
  padding: 0;
  width: 4.8rem;
  height: 4.8rem;

  > svg {
    width: inherit;
    height: inherit;
  }
`

const Icon = ({ iconName, ...props }) => {
  const IconSvg = ICONS[iconName]

  return (
    <StyledIcon>
      <IconSvg {...props} />
    </StyledIcon>
  )
}

Icon.propTypes = {
  iconName: PropTypes.oneOf(ICON_NAMES).isRequired,
}

Icon.defaultProps = {}

export default Icon

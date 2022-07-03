import styled from 'styled-components'
import PropTypes from 'prop-types'

import { LIST_VARIANTS } from './constants'
import Icon from './Icon'

const H2 = styled.h2`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr repeat(3, min-content) 1fr;
  grid-gap: 0.8rem;
  margin: 3.2rem 0 1.2rem;
  color: ${props => props.theme.colors.mutedBlack};

  * {
    font-family: ${props => props.theme.fontStacks.chicago};
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.5;
  }
`

const Line = styled.span`
  --line-color: ${props => props.theme.colors.mutedBlack};

  align-self: stretch;
  justify-self: stretch;
  background: linear-gradient(
    0deg,
    transparent 0%,
    transparent calc(50% - 0.2rem),
    var(--line-color) calc(50% - 0.2rem),
    var(--line-color) calc(50% + 0.2rem),
    transparent calc(50% + 0.2rem),
    transparent 100%
  );

  &:first-child {
    margin-right: 1.6rem;
  }

  &:last-child {
    margin-left: 1.6rem;
  }
`

const Title = styled.span`
  text-transform: lowercase;
  white-space: nowrap;
`

const Counts = styled.span`
  white-space: nowrap;
`

const Maximum = styled.span`
  &::before {
    content: '/';
  }
`

const AccessListHeader = ({ count, maximum, title, variant }) => (
  <H2>
    <Line />
    <Title>{title}</Title>
    {variant === 'primary' ? (
      <Icon iconName="avatar" size="small" />
    ) : (
      <Icon iconName="watch" size="extra-small" />
    )}
    <Counts>
      <span>{maximum ? Math.min(count, maximum) : count}</span>
      {maximum ? <Maximum>{maximum}</Maximum> : null}
    </Counts>
    <Line />
  </H2>
)

AccessListHeader.propTypes = {
  count: PropTypes.number.isRequired,
  maximum: PropTypes.number,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(LIST_VARIANTS),
}

AccessListHeader.defaultProps = {
  maximum: undefined,
  variant: 'primary',
}

export default AccessListHeader

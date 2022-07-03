import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import theme from '../../../util/theme'

const propTypesColor = { color: PropTypes.oneOf(Object.keys(theme.colors)) }

export const h1Styles = css`
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-family: ${props => props.theme.fontStacks.chicago};
  font-size: clamp(4.5rem, 6.5vw, 12.5rem);
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  letter-spacing: -0.09em;
`

export const H1 = styled.h1`
  ${h1Styles};
`
H1.propTypes = { ...propTypesColor }
H1.defaultProps = { color: 'trueBlack' }

export const h3Styles = css`
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-family: ${props => props.theme.fontStacks.chicago};
  font-size: clamp(1.6rem, 2.344vw, 1.8rem);
  font-weight: 500;
  line-height: 1.8;
`

export const H3 = styled.h3`
  ${h3Styles};
`
H3.propTypes = { ...propTypesColor }
H3.defaultProps = { color: 'trueBlack' }

export const bodyStyles = css`
  margin: 0;
  color: ${props => props.theme.colors[props.color]};
  font-family: ${props => props.theme.fontStacks.matter};
  font-weight: 600;
  line-height: 1.5;
`

export const Body1 = styled.p`
  ${bodyStyles}
  font-size: clamp(2rem, 2.6vw, 2.2rem);
`

Body1.propTypes = { ...propTypesColor }
Body1.defaultProps = { color: 'trueBlack' }

export const Body2 = styled.p`
  ${bodyStyles}
  font-size: clamp(1.6rem, 2.083vw, 2.2rem);
`

Body2.propTypes = { ...propTypesColor }
Body2.defaultProps = { color: 'trueBlack' }

export const Body3 = styled.p`
  ${bodyStyles}
  font-size: clamp(1.6rem, 2.344vw, 1.8rem);
  font-weight: 400;
  line-height: calc(22 / 18);
`

Body3.propTypes = { ...propTypesColor }
Body3.defaultProps = { color: 'trueBlack' }

export const InlineBody2 = styled.span`
  ${bodyStyles}
  font-size: clamp(1.6rem, 3vw, 2.2rem);
`

InlineBody2.propTypes = { ...propTypesColor }
InlineBody2.defaultProps = { color: 'trueBlack' }

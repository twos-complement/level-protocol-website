import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Body3, bodyStyles, H3 } from './Typography'

const StyledToast = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr min-content;
  padding: clamp(2rem, 3.125vw, 2.4rem) clamp(2rem, 5.208vw, 4rem);
  background-color: ${props => props.theme.colors.vibrantCream};
  border: 0.2rem solid ${props => props.theme.colors.trueBlack};
  border-radius: 0.8rem;
  box-shadow: 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  > svg:first-child,
  > img:first-child,
  > figure:first-child {
    align-self: start;
    grid-row: span 2;
    margin: 0.5rem 1.6rem auto 0;

    ${props =>
      props.theme.bp.mdMinus(`
      display: none;
    `)}
  }

  ${props =>
    props.theme.bp.lgPlus(`
    justify-self: end;
    max-width: 52rem;
    margin-bottom: -13.5rem;
    transform: translate(3.7rem, -3.2rem);
  `)}
`

const Title = styled(H3)`
  grid-column: 2;
`

const SubText = styled(Body3)`
  grid-column: 2;
  grid-row: 2;
`

const Button = styled.a`
  ${bodyStyles}
  align-self: start;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 clamp(2rem, 4.167vw, 3.2rem);
  padding: 0.8rem 1.6rem;
  min-height: 4.8rem;
  color: ${props => props.theme.colors.mutedBlack};
  font-family: ${props => props.theme.fontStacks.chicago};
  font-size: 1.8rem;
  line-height: 1;
  background-color: ${props => props.theme.colors.vibrantCream};
  border: 0.2rem solid ${props => props.theme.colors.mutedBlack};
  border-radius: 0.6rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 144ms ease, background-color 144ms ease;
  cursor: ${props => props.theme.cursors.select};

  &:hover {
    color: ${props => props.theme.colors.vibrantCream};
    background-color: ${props => props.theme.colors.mutedBlack};
  }

  ${props =>
    props.theme.bp.mdPlus(`
    align-self: center;
  `)}
`

const AccessListToast = ({ buttonText, href, icon, subText, title }) => (
  <StyledToast>
    {icon}
    <Title>{title}</Title>
    {subText ? <SubText>{subText}</SubText> : null}
    {buttonText && href ? (
      <Link href={href} passHref>
        <Button>{buttonText}</Button>
      </Link>
    ) : null}
  </StyledToast>
)

AccessListToast.propTypes = {
  buttonText: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.node,
  subText: PropTypes.string,
  title: PropTypes.string.isRequired,
}

AccessListToast.defaultProps = {
  buttonText: undefined,
  href: undefined,
  icon: undefined,
  subText: undefined,
}

export default AccessListToast

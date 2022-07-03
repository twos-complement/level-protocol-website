import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Body1, Body2, bodyStyles, H1, InlineBody2 } from './Typography'

const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  border: 0.4rem solid ${props => props.theme.colors.mutedBlack};
  border-radius: 3.2rem;
  box-sizing: border-box;

  ${props =>
    props.theme.bp.mdPlus(`
    grid-template-columns: repeat(2, auto);
  `)}
`

const TitleBlock = styled.div`
  grid-row: 2;
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-gap: clamp(1rem, 2.348vw, 3rem);
  padding: clamp(2.4rem, 4.286vw, 6rem);
`

const Title = styled(H1)`
  grid-column: 2;
  white-space: nowrap;
`

const ReservedBlock = styled(Body2)`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0.4rem;
  margin: clamp(-0.6rem, -3.125vw, 0rem) 0 clamp(-0.6rem, -3.125vw, 0rem)
    clamp(-0.6rem, -3.125vw, 0rem);
`

const Count = styled.span`
  margin: 0;
  padding: 0.6rem 0.8rem;
  color: ${props => props.theme.colors.vibrantPixel};
  font-family: ${props => props.theme.fontStacks.chicago};
  font-size: clamp(3rem, 3.125vw, 4rem);
  font-weight: 500;
  line-height: 1;
  background-color: ${props => props.theme.colors.mutedBlack};
  border-radius: 0.8rem;
`

const Reserved = styled(InlineBody2)`
  text-transform: lowercase;
`

const Description = styled(Body1)`
  grid-row: 1;
  padding: clamp(2.4rem, 3.125vw, 4rem);
  border-bottom: 0.4rem solid ${props => props.theme.colors.mutedBlack};

  ${props =>
    props.theme.bp.mdPlus(`
    grid-column: span 2;
  `)}
`

const Prompt = styled.div`
  grid-row: 3;
  display: flex;
  align-items: center;
  padding: clamp(2.4rem, 3.125vw, 4rem);
  border-top: 0.4rem solid ${props => props.theme.colors.mutedBlack};

  ${props =>
    props.theme.bp.mdPlus(`
    align-self: stretch;
    grid-row: 2;
    border-top: none;
    border-left: 0.4rem solid ${props.theme.colors.mutedBlack};
  `)}
`

const ExternalLink = styled.a`
  ${bodyStyles}
  margin: clamp(-0.4rem, -0.3125vw, -0.2rem) 0;
  padding: clamp(0.2rem, 0.3125vw, 0.4rem) clamp(0.8rem, 1.28vw, 1rem);
  color: ${props => props.theme.colors.vibrantPixel};
  font-family: ${props => props.theme.fontStacks.chicago};
  font-size: clamp(1.4rem, 3vw, 2rem);
  background-color: ${props => props.theme.colors.mutedBlack};
  border-radius: 0.4rem;
  text-decoration: none;
  cursor: ${props => props.theme.cursors.select};

  &:hover {
    text-decoration: underline;
  }
`

const AccessListHero = ({ totalReserved }) => (
  <Header>
    <TitleBlock>
      <Title color="mutedBlack">Access List</Title>
      <ReservedBlock>
        <Count>{totalReserved}</Count>
        <Reserved color="mutedBlack">Reserved</Reserved>
      </ReservedBlock>
    </TitleBlock>
    <Description color="mutedBlack">
      A limited number of access passes are available for early supporters.
    </Description>
    <Prompt color="mutedBlack">
      <Body2 color="mutedBlack">
        To access the alpha launch, be sure to follow{' '}
        <ExternalLink
          href="https://twitter.com/lvlprotocol"
          rel="noreferrer"
          target="_blank"
        >
          @lvlprotocol
        </ExternalLink>{' '}
        on Twitter and create your access pass profile using lvldex.
      </Body2>
    </Prompt>
  </Header>
)

AccessListHero.propTypes = {
  totalReserved: PropTypes.number,
}

AccessListHero.defaultProps = {
  totalReserved: 0,
}

export default AccessListHero

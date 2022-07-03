import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { LIST_VARIANTS } from './constants'
import Member from './Member'

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(var(--member-row-count, 5), 1fr);
  margin: 0;

  ${({ theme, variant }) =>
    variant === 'primary'
      ? css`
          --member-row-count: 5;

          grid-row-gap: clamp(2.4rem, 2.5vw, 3.2rem);

          ${theme.bp.mdPlus(`
            --member-row-count: 10;
          `)}
        `
      : css`
          --member-row-count: 10;

          grid-row-gap: 3.2rem;

          ${theme.bp.mdPlus(`
            --member-row-count: 20;
          `)}

          ${theme.bp.lgPlus(`
            --member-row-count: 30;
          `)}
        `}
`

const AccessListContainer = ({ members, variant }) => (
  <Container variant={variant}>
    {members.map(({ _id, nftSrc, ...member }) => (
      <Member
        {...member}
        nftSrc={nftSrc || undefined}
        variant={variant}
        key={member._id}
      />
    ))}
  </Container>
)

AccessListContainer.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  variant: PropTypes.oneOf(LIST_VARIANTS),
}

AccessListContainer.defaultProps = {
  variant: 'primary',
}

export default AccessListContainer

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const ALIGNMENTS = ['stretch', 'start', 'center', 'end']
export const BALANCES = ['auto', 'equal', 'start', 'end', 'vertical']
export const BOUNDARIES = ['none', 'little', 'some', 'lot']

const Section = styled.section`
  display: grid;
  align-items: ${({ alignment }) => alignment};

  ${({ boundary, theme }) => {
    switch (boundary) {
      case 'little':
        return css`
          padding: 6.4rem 0;
        `
      case 'some':
        return css`
          padding: 9rem 0;

          ${theme.bp.lgPlus(' padding: 12rem 0; ')}
        `
      case 'lot':
        return css`
          padding: 13.1rem 0;

          ${theme.bp.lgPlus(' padding: 26.2rem 0; ')}
        `
      case 'none':
      default:
        return ''
    }
  }}

  ${({ balance, theme }) =>
    balance === 'vertical'
      ? css`
          justify-items: center;
          grid-template-columns: 1fr;
          grid-gap: 5.6rem;
        `
      : css`
          grid-gap: 6.4rem;

          ${theme.bp.lgPlus(
            ' grid-template-rows: 1fr; grid-auto-flow: column; ',
          )}
        `}

  ${({ balance, theme }) => {
    switch (balance) {
      case 'start':
        return css`
          justify-items: center;
          grid-template-columns: 1fr;

          ${theme.bp.lgPlus(' grid-template-columns: 61.8% auto; ')}
        `
      case 'end':
        return css`
          justify-items: center;
          grid-template-columns: 1fr;

          ${theme.bp.lgPlus(' grid-template-columns: auto 61.8%; ')}

          > *:last-child {
            grid-row: 1;

            ${theme.bp.lgPlus(' grid-row: auto; ')}
          }
        `
      case 'equal':
        return css`
          align-items: stretch;
          justify-items: center;
          grid-template-columns: 1fr;

          ${theme.bp.lgPlus(' grid-template-columns: 1fr 1fr; ')}
        `
      case 'auto':
      default:
        return ''
    }
  }}
`

Section.propTypes = {
  alignment: PropTypes.oneOf(ALIGNMENTS),
  balance: PropTypes.oneOf(BALANCES),
  boundary: PropTypes.oneOf(BOUNDARIES),
}

Section.defaultProps = {
  alignment: 'center',
  balance: 'auto',
  boundary: 'none',
}

export default Section

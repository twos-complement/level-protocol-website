import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'

const StyledArrowPad = styled.div`
  align-self: center;
  justify-self: start;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 5fr 1fr 4fr 1fr 5fr;
  grid-template-rows: 5fr 1fr 4fr 1fr 5fr;

  > * {
    &:nth-child(1) {
      // up
      grid-column: 2 / span 3;
      grid-row: 1 / span 2;
    }

    &:nth-child(2) {
      // down
      grid-column: 2 / span 3;
      grid-row: 4 / span 2;
    }

    &:nth-child(3) {
      // left
      grid-column: 1 / span 2;
      grid-row: 2 / span 3;
    }

    &:nth-child(4) {
      // right
      grid-column: 4 / span 2;
      grid-row: 2 / span 3;
    }
  }
`

const DPad = ({ up, down, left, right }) => (
  <StyledArrowPad>
    <Button onClick={up} text="UP" variant="arrow" />
    <Button onClick={down} text="DOWN" variant="arrow" />
    <Button onClick={left} text="LEFT" variant="arrow" />
    <Button onClick={right} text="RIGHT" variant="arrow" />
  </StyledArrowPad>
)

DPad.propTypes = {
  up: PropTypes.func,
  down: PropTypes.func,
  left: PropTypes.func,
  right: PropTypes.func,
}

DPad.defaultProps = {
  up: () => null,
  down: () => null,
  left: () => null,
  right: () => null,
}

export default DPad

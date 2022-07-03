import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { LIST_VARIANTS } from './constants'
import { Body1 } from '../../ui/AltTypography'
import useTruncatedAddress from '../../hooks/useTruncatedAddress'

const Anchor = styled.a`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: 1.2rem;
  text-decoration: none;
  cursor: ${props => props.theme.cursors.select};
`

const Avatar = styled.div`
  width: var(--member-size, 5.4rem);
  height: var(--member-size, 5.4rem);

  ${({ colorHue, colorLightness, src, theme, variant }) =>
    variant === 'primary'
      ? css`
          --member-size: 5.4rem;

          background-image: url(${src});
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;

          ${theme.bp.lgPlus(`
            --member-size: 9rem;
          `)}
        `
      : css`
          --member-size: 2.4rem;

          background-color: hsl(${colorHue}deg, 100%, ${colorLightness}%);
          border-radius: 0.6rem;
          box-shadow: 0.2rem 0.2rem 0 rgba(0, 0, 0, 1);
        `}
`

const Address = styled(Body1)`
  line-height: 1;
  text-shadow: 0 0.2rem 0.4rem #000000;
  white-space: nowrap;
`

const AccessListMember = ({
  address,
  colorHue,
  colorLightness,
  ens,
  nftSrc,
  variant,
}) => {
  const { truncatedAddress } = useTruncatedAddress(ens || address)

  return (
    <Link href={`/token/${address}`} passHref>
      <Anchor>
        <Avatar
          colorHue={colorHue}
          colorLightness={colorLightness}
          src={nftSrc}
          variant={variant}
        />
        {variant === 'primary' ? (
          <Address color="vibrantPixel">{truncatedAddress}</Address>
        ) : null}
      </Anchor>
    </Link>
  )
}

AccessListMember.propTypes = {
  address: PropTypes.string.isRequired,
  colorHue: PropTypes.number,
  colorLightness: PropTypes.number,
  ens: PropTypes.string,
  nftSrc: PropTypes.string,
  variant: PropTypes.oneOf(LIST_VARIANTS),
}

AccessListMember.defaultProps = {
  colorHue: 0,
  colorLightness: 100,
  ens: undefined,
  nftSrc: '/images/illustrations/nft/nft.png',
  variant: 'primary',
}

export default AccessListMember

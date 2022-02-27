import withMethods from '../../util/api/withMethods'
import withAuth from '../../util/api/withAuth'
import withValidParams from '../../util/api/withValidParams'
import { getNftContract } from '../../util/contract'
import { createMember } from '../../util/fauna'

async function verifyOwnership({ address, nftAddress, nftId }) {
  // Allow 0x0 for custom lvl PFP:
  if (nftAddress === '0x0') return true

  const contract = getNftContract(nftAddress)
  const owner = await contract.ownerOf(nftId)

  if (owner !== address) throw new Error(`Invalid owner of ${nftId}!`)

  return true
}

const handler = async (req, res, { auth: { address } }) => {
  const { nftId, nftAddress, colorHue, colorLightness } = req.body

  await verifyOwnership({ address, nftAddress, nftId })
  await createMember({
    address,
    nftId,
    nftAddress,
    colorHue,
    colorLightness,
  })

  res.statusCode = 200
  res.json({ success: true })
}

export default withValidParams(
  {
    nftId: {
      presence: true,
    },
    nftAddress: {
      presence: true,
    },
    colorHue: {
      presence: true,
    },
    colorLightness: {
      presence: true,
    },
  },
  withAuth(withMethods(['POST'], handler)),
)

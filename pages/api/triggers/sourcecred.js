import etl from '../../../util/integrations/sourcecred/etl'
import withAuth from '../../../util/api/withAuth'
import withMethods from '../../../util/api/withMethods'

const handler = async (req, res, { auth: { address } }) => {
  await etl(address)
  res.statusCode = 200
  return res.json({ success: true })
}

export default withAuth(withMethods(['POST'], handler))

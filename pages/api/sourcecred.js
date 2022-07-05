import { getSourcecredContributions } from '../../util/sourcecred'

// TODO: allow each community to configure their own instance:
const SOURCECRED_URL =
  'https://raw.githubusercontent.com/twos-complement/sourcecred/gh-pages/'

const SourcecredAPI = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const data = await getSourcecredContributions(SOURCECRED_URL)
      res.statusCode = 200
      res.json({
        data,
      })
    } catch (error) {
      console.log(error) // eslint-disable-line no-console
      res.statusCode = 500
      res.json({ error })
    }
  }
}

export default SourcecredAPI

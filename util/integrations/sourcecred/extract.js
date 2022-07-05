import * as sc from 'sourcecred'

export const extract = async ({ instanceUrl }) => {
  const instance =
    sc.sourcecred.instance.readInstance.getNetworkReadInstance(instanceUrl)
  const credGrainView = await instance.readCredGrainView()
  const credGraph = await instance.readCredGraph()

  return credGrainView
    .participants()
    .map(participant => participant.identity)
    .filter(identity => identity.subtype === 'USER') // Filtering to only get USERS and not BOTS
    .map(identity => {
      const intervalStartTime = credGrainView
        .intervals()
        .find(
          interval => interval.endTimeMs > new Date('8/15/2021'),
        ).startTimeMs
      const userWeekNode = Array.from(credGraph.nodes()).find(
        node =>
          node.address.includes(identity.id) &&
          node.address.includes(intervalStartTime),
      )
      const contributions = Array.from(
        credGraph.inNeighbors(userWeekNode.address),
      ).map(edge => credGraph.node(edge.src))

      return { name: identity.name, contributions }
    })
}

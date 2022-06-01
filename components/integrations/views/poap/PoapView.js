import { useState } from 'react'
import styled from 'styled-components'
import { H4, H2, Body1 } from '../../../ui/Typography'
import Button from '../../../ui/Button'
import useCommunity from '../../../hooks/useCommunity'
import useWeb3 from '../../../hooks/useWeb3'
import PoapTrigger from './PoapTrigger'
import PoapEventInput from './PoapEventInput'
import { useCreatePoapEvents } from './poapApi'

const IntegrationsHeader = styled.div`
  margin-bottom: 3.6rem;
`

const PoapView = () => {
  // const { isAdmin, currentCommunity } = useCommunity()
  const { community } = useCommunity()
  const isAdmin = true // TODO: Temp
  const { disconnect } = useWeb3()
  const { isCreatingPoapEvents, createPoapEvents } = useCreatePoapEvents()

  const handleSubmitEventIds = async eventIds => {
    createPoapEvents(community._id, eventIds)
  }

  const integrationsOptions = isAdmin ? (
    <>
      <IntegrationsHeader>
        <H2>{community?.name} POAP Integration</H2>
        <Button onClick={disconnect}>Disconnect</Button>
        <PoapTrigger />
        <div>
          <PoapEventInput onSubmit={handleSubmitEventIds} />
        </div>
      </IntegrationsHeader>
    </>
  ) : (
    <>
      <Body1 color="white">You do not have enough permissions.</Body1>
      <Button onClick={disconnect}>Disconnect</Button>
    </>
  )

  return integrationsOptions
}

export default PoapView
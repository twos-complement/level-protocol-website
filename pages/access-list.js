import styled from 'styled-components'

import {
  getAccessListFirst480,
  getAccessListMostRecent,
} from '../util/api/fauna'
import Public from '../components/layouts/Public'
import PublicMenuBar from '../components/ui/PublicMenuBar'
import AccessListContainer from '../components/access-list/ui/Container'
import Hero from '../components/access-list/ui/Hero'
import Toast from '../components/access-list/ui/Toast'
import Header from '../components/access-list/ui/Header'
import Icon from '../components/access-list/ui/Icon'

const ALPHA_LIST_MAXIMUM = 100

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: clamp(6rem, 8.203vw, 10.5rem) clamp(2rem, 5.078vw, 6.5rem);
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`

const AccessListPage = ({ first480 }) => {
  const alphaList = first480.slice(0, ALPHA_LIST_MAXIMUM)
  const waitList = first480.slice(ALPHA_LIST_MAXIMUM)

  return (
    <Public variant="light">
      <PublicMenuBar />
      <Container>
        <Toast
          buttonText="Join"
          href="/join"
          icon={<Icon iconName="envelope" />}
          subText="Join the waitlist for the next available spot."
          title="100 Alpha Spots Claimed!"
        />
        <Hero totalReserved={first480.length} />
        <Header
          count={alphaList.length}
          maximum={ALPHA_LIST_MAXIMUM}
          title="Alpha List"
          variant="primary"
        />
        <AccessListContainer members={alphaList} variant="primary" />
        {waitList.length ? (
          <>
            <Header
              count={waitList.length}
              title="Waitlist"
              variant="secondary"
            />
            <AccessListContainer members={waitList} variant="secondary" />
          </>
        ) : null}
      </Container>
    </Public>
  )
}

export async function getStaticProps() {
  const first480 = await getAccessListFirst480()
  const mostRecent = await getAccessListMostRecent()

  return {
    props: {
      first480,
      mostRecent,
    },
  }
}

export default AccessListPage

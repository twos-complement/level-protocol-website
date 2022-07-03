import styled from 'styled-components'

import {
  getAccessListFirst480,
  getAccessListMostRecent,
} from '../util/api/fauna'
import Public from '../components/layouts/Public'
import PublicMenuBar from '../components/ui/PublicMenuBar'
import AccessListMemberGrid from '../components/access-list/ui/AccessListMemberGrid'
import AccessListHero from '../components/access-list/ui/Hero'
import AccessListToast from '../components/access-list/ui/Toast'
import Icon from '../components/access-list/ui/Icon'

const Container = styled.div`
  padding-top: 130px;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`

const AccessListsContianer = styled.div`
  padding: 60px 0;
`

const AccessListPage = ({ first480 }) => {
  // Split up first three access list groups:
  const first30 = first480.slice(0, 30)
  const second100 = first480.slice(30, 100)
  const third350 = first480.slice(130, 350)

  return (
    <Public variant="light">
      <PublicMenuBar />
      <Container>
        <AccessListToast
          buttonText="Join"
          href="/join"
          icon={<Icon iconName="envelope" />}
          subText="Join the waitlist for the next available spot."
          title="100 Alpha Spots Claimed!"
        />
        <AccessListHero totalReserved={first480.length} />
        <AccessListsContianer>
          <AccessListMemberGrid members={first30} size="large" />
          <AccessListMemberGrid members={second100} size="medium" />
          <AccessListMemberGrid members={third350} size="small" />
        </AccessListsContianer>
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

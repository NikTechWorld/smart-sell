// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

import PostOutline from 'mdi-material-ui/PostOutline'
import ListBoxOutline from 'mdi-material-ui/ListBoxOutline'
import Advertisements from 'mdi-material-ui/Advertisements'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardSupport from 'src/views/cards/CardSupport'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'
// import Trophy from 'src/views/dashboard/Trophy'
// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  // Hooks
  const { settings, saveSettings } = useSettings()
  const router = useRouter()
  useEffect(() => {
    saveSettings({ ...settings, hidden: true })

return () => {
      saveSettings({ ...settings, hidden: false })
    }
  },)

return (
    <ApexChartWrapper className='dashboard'>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          {/* <Trophy /> */}
          <CardSupport
            heading={'Poster of The Day'}
            icon={<PostOutline />}
            description={'Send daily greetings to clients'}
            actionCallBack={() => router.push('/poster-of-the-day')}
            actionText='OPEN'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Trophy /> */}
          <CardSupport
            heading={'Marketing Collaterals'}
            icon={<Advertisements />}
            description={'Greetings, leaflets, EDMs, and More'}
            actionCallBack={() => router.push('/marketing-collaterals')}
            actionText='OPEN'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <Trophy /> */}
          <CardSupport
            heading={'Plan list'}
            icon={<ListBoxOutline />}
            description={'List of All available Plans '}
            actionCallBack={() => router.push('/plans-list')}
            actionText='OPEN'
          />
        </Grid>

        {/* <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid> */}
        {/* <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard

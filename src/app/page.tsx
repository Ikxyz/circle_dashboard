'use client'

import { Avatar } from 'src/components/avatar'
import { Badge } from '@components/badge'
import { Button } from 'src/components/button'
import { Divider } from 'src/components/divider'
import { Heading, Subheading } from 'src/components/heading'
import { Select } from 'src/components/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'src/components/table'
import ConnectWallet from '@/components/connectWallet'
import { Stat } from '@/components/stats'
import { useHomePage } from './http'
import { useState } from 'react'
import { useActiveAccount } from 'thirdweb/react'

export default function HomePage() {
  const [timeframe, setTimeframe] = useState('week')
  const activeAccount = useActiveAccount()
  const walletAddress = activeAccount?.address?.toString() || ''

  const {
    trendingCircles,
    isLoadingTrendingCircles,
    kpiData,
    isLoadingKpiData,
    userProfile,
    isLoadingUserProfile
  } = useHomePage(walletAddress, timeframe)

  // Handle timeframe change
  const handleTimeframeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeframe(e.target.value)
  }

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Get appropriate greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  // Get user's name to display in greeting
  const getUserDisplayName = () => {
    if (!walletAddress) return "Guest"

    if (userProfile?.name) return userProfile.name

    // If no name but we have a wallet address, show truncated address
    if (walletAddress) {
      const start = walletAddress.slice(0, 6)
      const end = walletAddress.slice(-4)
      return `${start}...${end}`
    }

    return "Guest"
  }

  return (
    <>
      <Heading>{getGreeting()}, {getUserDisplayName()}</Heading>
      <div className="mt-8 flex items-end justify-between">
        <div>
          {/* <Button>Connect Wallet</Button> */}
          <ConnectWallet />
        </div>

        <Subheading>Circles overview</Subheading>

        <div>
          <Select
            name="period"
            value={timeframe}
            onChange={handleTimeframeChange}
          >
            <option value="week">Last week</option>
            <option value="two_weeks">Last two weeks</option>
            <option value="month">Last month</option>
            <option value="quarter">Last quarter</option>
          </Select>
        </div>
      </div>

      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {isLoadingKpiData ? (
          <>
            <Stat title="Circles Balance" value="Loading..." change="" />
            <Stat title="Total Circles Created" value="Loading..." change="" />
            <Stat title="Total Circle Members" value="Loading..." change="" />
            <Stat title="Your Total Saved" value="Loading..." change="" />
          </>
        ) : (
          <>
            <Stat
              title="Circles Balance"
              value={`${kpiData?.kpi.circlesBalance.value.toFixed(4)} ETH`}
              change={kpiData?.kpi.circlesBalance.change || ""}
            />
            <Stat
              title="Total Circles Created"
              value={formatNumber(kpiData?.kpi.totalCircles.value || 0)}
              change={kpiData?.kpi.totalCircles.change || ""}
            />
            <Stat
              title="Total Circle Members"
              value={formatNumber(kpiData?.kpi.totalMembers.value || 0)}
              change={kpiData?.kpi.totalMembers.change || ""}
            />
            <Stat
              title="Your Total Saved"
              value={`${kpiData?.kpi.userTotalSaved.value.toFixed(4)} ETH`}
              change={kpiData?.kpi.userTotalSaved.change || ""}
            />
          </>
        )}
      </div>
      <Subheading className="mt-14">Highest Savers</Subheading>

      {isLoadingKpiData ? (
        <div className="text-center py-4">Loading leaderboard...</div>
      ) : (
        <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
          <TableHead>
            <TableRow>
              <TableHeader>Rank</TableHeader>
              <TableHeader>Joined Date</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader className="text-right">Amount Saved</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {kpiData?.leaderboard.map((saver) => (
              <TableRow key={saver.userId} href={`/profile/${saver.wallet}`} title={`Profile of ${saver.username}`}>
                <TableCell>{saver.rank}</TableCell>
                <TableCell className="text-zinc-500">
                  {new Date(saver.joinedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar src={saver.avatar} className="size-6" />
                    <span>{saver.username}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{saver.amountSaved.toFixed(4)} ETH</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}

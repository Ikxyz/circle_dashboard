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

export default function HomePage() {
  // For simplicity, using a hardcoded address here
  // In a real app, you'd get this from your wallet provider
  const address = "example-wallet-address";
  const { trendingCircles, isLoadingTrendingCircles } = useHomePage(address);

  // Mock data until we have real data from React Query
  const orders = [
    { id: 1, date: '2023-04-01', customer: { name: 'John Doe' }, amount: { usd: '0.1 ETH' }, url: '#' },
    { id: 2, date: '2023-04-02', customer: { name: 'Jane Smith' }, amount: { usd: '0.15 ETH' }, url: '#' },
    { id: 3, date: '2023-04-03', customer: { name: 'Bob Johnson' }, amount: { usd: '0.2 ETH' }, url: '#' },
  ];

  return (
    <>
      <Heading>Good afternoon, Soke</Heading>
      <div className="mt-8 flex items-end justify-between">
        <div>
          {/* <Button>Connect Wallet</Button> */}
          <ConnectWallet />
        </div>

        <Subheading>Circles overview</Subheading>

        <div>

          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>



      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Circles Balance" value="117.566 ETH" change="+4.5%" />
        <Stat title="Total Circles Created" value="55" change="+0.5%" />
        <Stat title="Total Cirle Members" value="239" change="+4.5%" />
        <Stat title="Your Total Saved" value="0.589 ETH" change="+21.2%" />
      </div>
      <Subheading className="mt-14">Highest Savers</Subheading>

      {isLoadingTrendingCircles ? (
        <div className="text-center py-4">Loading trending circles...</div>
      ) : (
        <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
          <TableHead>
            <TableRow>
              <TableHeader>Rank</TableHeader>
              <TableHeader>Joined Date</TableHeader>
              <TableHeader>Name</TableHeader>
              {/* <TableHeader>Saved</TableHeader> */}
              <TableHeader className="text-right">Amount Saved</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>
                <TableCell>{order.id}</TableCell>
                <TableCell className="text-zinc-500">{order.date}</TableCell>
                <TableCell>{order.customer.name}</TableCell>

                {/* <div className="flex items-center gap-2">
                    <Avatar src={order.event.thumbUrl} className="size-6" />
                    <span>{order.event.name}</span>
                  </div> */}

                <TableCell className="text-right">US{order.amount.usd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

    </>
  )
}

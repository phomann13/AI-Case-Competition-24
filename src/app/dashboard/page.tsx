import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { LatestOrders } from '@/components/dashboard/overview/latest-applicants';
import { LatestProducts } from '@/components/dashboard/overview/job-postings';
import { Sales } from '@/components/dashboard/overview/Viewers';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/applicants';
import { TotalProfit } from '@/components/dashboard/overview/sponsorships';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="33" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [12,11,8,1,1.3,2,4,5.2,6.8,8,6.1,8.2] },
            { name: 'Last year', data: [11,11.3, 2.3, 2.5, 4, 5.2, 8, 9, 10, 11, 12] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <LatestProducts
          products={[
            {
              id: 'JP-005',
              name: 'Software Engineer 1',
              image: '/assets/product-5.png',
              updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
              status: 'Open'
            },
            {
              id: 'JP-004',
              name: 'Software Engineer 2',
              image: '/assets/product-4.png',
              updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
              status: 'Open'
            },
            {
              id: 'JP-003',
              name: 'Network Engineer',
              image: '/assets/product-3.png',
              updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
              status: 'Open'
            },
            {
              id: 'JP-002',
              name: 'Hardware Engineer',
              image: '/assets/product-2.png',
              updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
              status: 'Open'
            },
            {
              id: 'JP-001',
              name: 'Product Manager',
              image: '/assets/product-1.png',
              updatedAt: dayjs().subtract(10, 'minutes').toDate(),
              status: 'Closed'
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'APP-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 0,
              status: 'scoring',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'APP-006',
              customer: { name: 'Cao Yu' },
              amount: 0,
              status: 'scoring',
              createdAt: dayjs().subtract(1000, 'minutes').toDate(),
            },
            {
              id: 'APP-005',
              customer: { name: 'Alexa Richardson' },
              amount: 96.5,
              status: 'scored',
              createdAt: dayjs().subtract(1456, 'minutes').toDate(),
            },
            {
              id: 'APP-004',
              customer: { name: 'Anje Keizer' },
              amount: 82.1,
              status: 'scored',
              createdAt: dayjs().subtract(5738, 'minutes').toDate(),
            },
            {
              id: 'APP-003',
              customer: { name: 'Clarke Gillebert' },
              amount: 98,
              status: 'awaiting',
              createdAt: dayjs().subtract(6000, 'minutes').toDate(),
            },
            {
              id: 'APP-002',
              customer: { name: 'Adam Denisov' },
              amount: 99,
              status: 'offered',
              createdAt: dayjs().subtract(6000, 'minutes').toDate(),
            },
            {
              id: 'APP-001',
              customer: { name: 'Sean Li' },
              amount: 99,
              status: 'sponsored',
              createdAt: dayjs().subtract(6500, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}

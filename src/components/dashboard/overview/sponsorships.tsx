import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Receipt as ReceiptIcon } from '@phosphor-icons/react/dist/ssr/Receipt';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import ArcDesign from '../../comp/arc-guage'
export interface TotalProfitProps {
  sx?: SxProps;
  value: string;
}

export function TotalProfit({ value, sx }: TotalProfitProps): React.JSX.Element {
  const settings = {
    width: 200,
    height: 200,
    value: 60,
  };
  return (
    <Card sx={sx}>
      <CardContent>
      <Stack sx={{ alignItems: 'center' }} spacing={2}>
        <ArcDesign/>
        <Typography color="text.secondary" variant="caption">
          Sponsorships accepted
        </Typography>
        </Stack>
      
      </CardContent>
    </Card>
  );
}

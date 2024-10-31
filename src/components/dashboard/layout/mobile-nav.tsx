'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowSquareUpRight as ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { CaretUpDown as CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';
import CloseIcon from '@mui/icons-material/Close';
import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';
import { navItems } from './config';
import { navIcons } from './nav-icons';
import { IconButton, MenuItem, Select } from '@mui/material';

export interface MobileNavProps {
  onClose?: () => void;
  open?: boolean;
  items?: NavItemConfig[];
}

export function MobileNav({ open, onClose, items = navItems }: MobileNavProps): React.JSX.Element {
  const pathname = usePathname();
  const [workspace, setWorkspace] = React.useState('ASHA'); // Default value

  const handleWorkspaceChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWorkspace(event.target.value as string);
    // Set session or perform any required action based on the selected value
    sessionStorage.setItem('workspace', event.target.value as string);
  };
  return (
    <Drawer
      PaperProps={{
        sx: {
          '--MobileNav-background': 'var(--mui-palette-neutral-950)',
          '--MobileNav-color': 'var(--mui-palette-common-white)',
          '--NavItem-color': 'var(--mui-palette-neutral-300)',
          '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
          '--NavItem-active-background': 'var(--mui-palette-primary-main)',
          '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
          '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
          '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
          '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
          bgcolor: 'var(--MobileNav-background)',
          color: 'var(--MobileNav-color)',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          width: 'var(--MobileNav-width)',
          zIndex: 'var(--MobileNav-zIndex)',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      }}
      onClose={onClose}
      open={open}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction = 'row' sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}>
        <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex' }}>
          <Logo color="light" height={32} width={122} />
        </Box>
        <Box >
        <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        padding: 0.5,
        color: 'grey.700',
        '&:hover': {
          color: 'grey.900',
        },
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
        </Box>
        </Stack>
        <Select
  sx={{
    flex: '1 1 auto',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Change the border color to white
      },
      '&:hover fieldset': {
        borderColor: 'white', // Change the border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Change the border color when focused
      },
    },
    '& .MuiSelect-select': {
      color: 'white', // Change the text color to white
    },
    alignItems: 'center',
            backgroundColor: 'var(--mui-palette-neutral-950)',
            border: '1px solid var(--mui-palette-neutral-700)',
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            p: '4px 12px',
  }}
  value={workspace}
  onChange={handleWorkspaceChange}
  variant="outlined"
  size="medium"
>
  <MenuItem value="ASHA">ASHA</MenuItem>
  <MenuItem value="User">User</MenuItem>
</Select>
        {/* Render navigation items */}
        {renderNavItems({ items: filterNavItems(navItems, workspace), pathname, onClose })}
      </Stack>
    </Drawer>
  );
}

function renderNavItems({ items = [], pathname, onClose }: { items?: NavItemConfig[]; pathname: string; onClose: any }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} onClose={onClose} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
  onClose: any;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title, onClose }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;
  
  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? 'a' : RouterLink,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
              onClick: onClose
            }
          : { role: 'button' })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '6px 16px',
          position: 'relative',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
        }}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <Typography
            component="span"
            sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
function filterNavItems(items: NavItemConfig[], workspace: string): NavItemConfig[] {
  return items.filter(item => {
    // Adjust logic based on your navigation structure
    if (workspace === 'ASHA') {
      return item.visibleTo === 'asha' || item.visibleTo === 'both';
    }
    return item.visibleTo === 'user' || item.visibleTo === 'both';
  });
}

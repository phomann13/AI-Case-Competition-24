"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { useParams, useRouter } from 'next/navigation'; 
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Chat as ChatIcon } from '@phosphor-icons/react/dist/ssr/Chat'; // Ensure you have the Chat icon

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>(''); // State for the message
  const router = useRouter(); // Router for navigation

  const handleMessageSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && message.trim()) {
      // Redirect to the chat page with the message
      router.push(`dashboard/chat?message=${encodeURIComponent(message)}`);
      setMessage(''); // Clear the input after submission
    }
  };

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' } }}
            >
              <ListIcon />
            </IconButton>
            <Tooltip title="Search">
              <TextField
                variant="standard"
                placeholder="Chat with me..."
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state
                onKeyDown={handleMessageSubmit}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          fontSize: 24,
                          animation: 'float 1.5s ease-in-out infinite',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <ChatIcon />
                      </Box>
                    </InputAdornment>
                  ),
                  // endAdornment: (
                  //   <InputAdornment position="end">
                  //     <Typography variant="body2" sx={{ animation: 'dots 1.2s steps(4, end) infinite' }}>
                  //       ...
                  //     </Typography>
                  //   </InputAdornment>
                  // ),
                }}
                sx={{ width: 300 }}
              />
            </Tooltip>
          </Stack>
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <UsersIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton>
                  <BellIcon />
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              src="/assets/avatar.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

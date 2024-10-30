import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Applicants', href: paths.dashboard.applicants, icon: 'users' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'jobPostings', title: 'Job Postings', href: paths.dashboard.jobPostings, icon: 'briefcase'},
  { key: 'recruitment', title: 'Recruitment', href: paths.dashboard.recruitment, icon: 'briefcase'},
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

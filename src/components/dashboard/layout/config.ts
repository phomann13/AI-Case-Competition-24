import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie',visibleTo:'asha'  },
  { key: 'customers', title: 'Applicants', href: paths.dashboard.applicants, icon: 'users',visibleTo:'asha' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected',visibleTo:'asha' },
  { key: 'jobPostings', title: 'Job Postings', href: paths.dashboard.jobPostings, icon: 'briefcase',visibleTo:'asha'},
  { key: 'ujobPostings', title: 'Job Postings', href: paths.dashboard.ujobPostings, icon: 'briefcase',visibleTo:'user'},
  { key: 'recruitment', title: 'Recruitment', href: paths.dashboard.recruitment, icon: 'globe',visibleTo:'asha'},
  { key: 'myjobs', title: 'My Jobs', href: paths.dashboard.myjobs, icon: 'paper',visibleTo:'user' },
  { key: 'interviews', title: 'Interviews', href: paths.dashboard.interviews, icon: 'interviews',visibleTo:'asha' },
  { key: 'predict', title: 'Predict', href: paths.dashboard.predict, icon: 'crosshair',visibleTo:'asha' },
  { key: 'faq', title: 'FAQ', href: paths.dashboard.faq, icon: 'question',visibleTo:'both'},
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six',visibleTo:'both' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user',visibleTo:'asha' },
  { key: 'uaccount', title: 'Account', href: paths.dashboard.uaccount, icon: 'user',visibleTo:'user' },
  
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

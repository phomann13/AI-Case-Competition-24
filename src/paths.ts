export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    applicants: '/dashboard/applicants',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    job_postings: '/dashboard/jobPostings'
  },
  errors: { notFound: '/errors/not-found' },
} as const;

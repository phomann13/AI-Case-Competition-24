export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    applicants: '/dashboard/applicants',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    jobPostings: '/dashboard/jobPostings',
    recruitment: '/dashboard/recruitment',
    applicantProfile: (id: string) => `/dashboard/applicants/${id}`, // Dynamic path for each applicant profile
  },
  errors: { notFound: '/errors/not-found' },
} as const;

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
    chat: '/dashboard/chat',
    summarizer: '/dashboard/summarizer',
    faq: '/dashboard/faq',
    ujobPostings: '/dashboard/user/jobPostings',
    uaccount: '/dashboard/user/account',
    myjobs: '/dashboard/user/myjobs'
  },
  errors: { notFound: '/errors/not-found' },
} as const;

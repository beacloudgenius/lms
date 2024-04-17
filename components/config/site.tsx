export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Cloud Genius®',
  description: 'Realize your dream.',
  mainNav: [
    // {
    //   title: 'Home',
    //   href: '/'
    // },
    { title: 'Meeting', href: '/meeting' },
    { title: 'Members', href: '/members' },
    { title: 'Guarantee', href: '/money-back-guarantee' }
    // { title: 'Login', href: '/auth' }
  ],
  links: {
    twitter: 'https://twitter.com/LVNilesh',
    github: 'https://github.com/beacloudgenius',
    docs: 'https://thecloudseminar.com'
  }
}


const dev: boolean = process.env.NODE_ENV !== 'production';

export const api = {
  contactPage: dev ? 'http://localhost:3000/api/contact/static-data' : 'https://leonardosimmons.vercel.app/api/contact/static-data',
  footer: dev ? 'http://localhost:3000/api/footer/static-data' : 'https://leonardosimmons.vercel.app/api/footer/static-data',
  indexPage: dev ? 'http://localhost:3000/api/index/static-data' : 'https://leonardosimmons.vercel.app/api/index/static-data',
  navbar: {
    desktop: dev ? 'http://localhost:3000/api/navbar/desktop-data' : 'https://leonardosimmons.vercel.app/api/navbar/desktop-data',
    mobile : dev ? 'http://localhost:3000/api/navbar/mobile-data' : 'https://leonardosimmons.vercel.app/api/navbar/mobile-data'
  },
  portfolioPage: dev ? 'http://localhost:3000/api/portfolio/static-data' : 'https://leonardosimmons.vercel.app/api/portfolio/static-data',
  NEXT_PUBLIC_CONTACT_ME_FORM_SUBMIT: dev ? 'http://localhost:4000/portfolio/contact-me-form-submit' : 'https://easy-company-node-server.herokuapp.com//portfolio/contact-me-form-submit'
};

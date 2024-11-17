import { BsLinkedin } from 'react-icons/bs';

const themeConfig = {
  logoLink: "/docs",
  logo: <span>BrightQR | Docs</span>,
  project: {
    link: 'https://github.com/mr-ademdev/BrightQR'
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  footer: {
    text: <span style={{fontSize:'20px', textAlign: 'center'}}>© {new Date().getFullYear()} <b style={{color: '#075985', fontSize:'20px'}}>QRCodo</b>. All rights reserved.</span>
  },
  chat: {
    link: 'https://www.linkedin.com/in/mr-adem/',
    icon: (
      <BsLinkedin style={{fontSize:'25px'}} />
    )
  },
  head: (
    <>
      <meta name="description" content="QRCodo Documentation - Learn how to use QRCodo effectively." />
      <meta name="keywords" content="QRCodo, QR Code, Documentation, Next.js, Nextra" />
    </>
  )
};

export default themeConfig;
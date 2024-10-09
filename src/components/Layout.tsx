import React from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'CareerCanvas' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        {/* Add header content here */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </>
  )
}

export default Layout
import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

import '@/styles'
import Banner from "@/sections/Banner";

export default function (props) {
    const {
        children,
        title,
        url,
        isHeaderFixed,
    } = props;

  return (
    <>
      <Head htmlAttributes={{ lang: 'ru' }}>
        <title>Красный панцирь | {title}</title>
        <script src='/src/main.js'  type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} isFixed={isHeaderFixed} />
      <Content isResetPaddingTop={isHeaderFixed}>
          {children}
      </Content>
      <Footer />
    </>
  )
}

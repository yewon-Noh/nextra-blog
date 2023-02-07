import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
    title: "yewonlog",
    description: "yewon-Noh's Tech Blog",
    canonical: "https://www.carrotins.com",
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "https://yewonlog.vercel.app/",
      title: "yewonlog - Yewon-Noh's Tech Blog",
      siteName: "yewonlog",
      images: [
        {
          url: "/images/image.png",
          width: 285,
          height: 167,
          alt: "이미지"
        }
      ]
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
  };

export default function Nextra({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...DEFAULT_SEO} />
            <Head>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="RSS"
                    href="/feed.xml"
                />
                <link
                    rel="preload"
                    href="/fonts/Inter-roman.latin.var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
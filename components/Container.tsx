import { siteMeta } from '@/lib/constants'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface ContainerProps {
  children?: React.ReactNode
  showGrid?: boolean
  showFooter?: boolean
  customMeta?: Partial<SiteMeta>
}

const Container = ({
  customMeta,
  showGrid = false,
  showFooter = true,
  children,
}: ContainerProps) => {
  const router = useRouter()

  const meta = {
    description: siteMeta.DESCRIPTION,
    thumbnail: siteMeta.THUMBNAIL,
    url: siteMeta.URL,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>
          {meta?.title ? `${meta.title} – ${siteMeta.TITLE}` : siteMeta.TITLE}
        </title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${router.asPath}`} />
        <link rel="canonical" href={`${meta.url}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={siteMeta.TITLE} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@konradtrosa" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.thumbnail} />
        {meta?.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`grid grid-rows-layout ${showGrid ? 'grid-bg' : ''}`}>
        <Header />
        <main>
          <div className="grid gap-32 max-w-6xl mx-auto px-6">{children}</div>
        </main>
        <Footer isVisible={showFooter} />
      </div>
    </>
  )
}

export default Container

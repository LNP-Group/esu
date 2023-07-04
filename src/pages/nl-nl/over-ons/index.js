import Head from 'next/head'
import NavBar from '@/components/NavBar'
import styles from '@/styles/About.module.css'
import { useRouter } from 'next/router'
import { pageMetadata } from '@/i18n/pageMetadata'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import { about } from '@/i18n/pages'

export default function About() {

    const router = useRouter()

    const pathname = router.pathname

    let localeString

    const locales = [
        'en-us',
        'ro-ro',
        'nl-nl',
        'sv-se'
    ]

    locales.forEach(locale => {
        if (pathname.includes(locale)) {
            localeString = locale
        }
    })

    return(
        <>
            <Head>
                <title>
                    {
                        localeString === 'en-us' ? `${pageMetadata.en.about.title} | ${websiteName}` :
                        localeString === 'ro-ro' ? `${pageMetadata.ro.about.title} | ${websiteName}` :
                        localeString === 'nl-nl' ? `${pageMetadata.nl.about.title} | ${websiteName}` :
                        localeString === 'sv-se' ? `${pageMetadata.sv.about.title} | ${websiteName}` :
                        `${pageMetadata.en.about.title} | ${websiteName}`
                    }
                </title>
                <meta name="description" content={
                    localeString === 'en-us' ? pageMetadata.en.about.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.description :
                    localeString === 'sv-se' ? pageMetadata.sv.about.description :
                    pageMetadata.en.about.description
                } />
                <link rel="canonical" href={
                    localeString === 'en-us' ? `${pageMetadata.en.about.canonicalUrl}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.about.canonicalUrl}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.about.canonicalUrl}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.about.canonicalUrl}` :
                    `${pageMetadata.en.about.canonicalUrl}`
                } />
                <meta property="og:title" content={
                    localeString === 'en-us' ? `${pageMetadata.en.about.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.about.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.about.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.about.title} | ${websiteName}` :
                    `${pageMetadata.en.about.title} | ${websiteName}`
                } />
                <meta property="og:description" content={
                    localeString === 'en-us' ? pageMetadata.en.about.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.description :
                    localeString === 'sv-se' ? pageMetadata.sv.about.description :
                    pageMetadata.en.about.description
                } />
                <meta property="og:url" content={
                    localeString === 'en-us' ? `${pageMetadata.en.about.canonicalUrl}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.about.canonicalUrl}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.about.canonicalUrl}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.about.canonicalUrl}` :
                    `${pageMetadata.en.about.canonicalUrl}`
                } />
                <meta property="og:locale" content={
                    localeString === 'en-us' ? 'en_US' :
                    localeString === 'ro-ro' ? 'ro_RO' :
                    localeString === 'nl-nl' ? 'nl_NL' :
                    localeString === 'sv-se' ? 'sv_SE' :
                    'en_US'
                } />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={websiteName} />
                <meta property="og:image" content={
                    localeString === 'en-us' ? pageMetadata.en.about.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.about.image.url :
                    pageMetadata.en.about.image.url
                } />
                <meta property="og:image:secure_url" content={
                    localeString === 'en-us' ? pageMetadata.en.about.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.about.image.url :
                    pageMetadata.en.about.image.url
                } />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={
                    localeString === 'en-us' ? pageMetadata.en.about.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.description :
                    localeString === 'sv-se' ? pageMetadata.sv.about.description :
                    pageMetadata.en.about.description
                } />
                <meta name="twitter:title" content={
                    localeString === 'en-us' ? `${pageMetadata.en.about.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.about.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.about.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.about.title} | ${websiteName}` :
                    `${pageMetadata.en.about.title} | ${websiteName}`
                } />
                <meta name="twitter:image" content={
                    localeString === 'en-us' ? pageMetadata.en.about.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.about.image.url :
                    pageMetadata.en.about.image.url
                } />
                <meta name="twitter:image:alt" content={
                    localeString === 'en-us' ? pageMetadata.en.about.image.alt :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.image.alt :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.image.alt :
                    localeString === 'sv-se' ? pageMetadata.sv.about.image.alt :
                    pageMetadata.en.about.image.alt
                } />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="627" />
                <meta name="twitter:site" content="@ESUFranchise" />
                <meta name="twitter:creator" content="@ESUFranchise" />
                {
                    localeString === 'en-us' ? pageMetadata.en.about.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'ro-ro' ? pageMetadata.ro.about.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'nl-nl' ? pageMetadata.nl.about.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'sv-se' ? pageMetadata.sv.about.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    pageMetadata.en.about.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    ))
                }
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.about}>
                    <h1>
                        {
                            localeString === 'en-us' ? about.en.title :
                            localeString === 'ro-ro' ? about.ro.title :
                            localeString === 'nl-nl' ? about.nl.title :
                            localeString === 'sv-se' ? about.sv.title :
                            about.en.title
                        }
                    </h1>
                    <p>
                        {
                            localeString === 'en-us' ? about.en.description :
                            localeString === 'ro-ro' ? about.ro.description :
                            localeString === 'nl-nl' ? about.nl.description :
                            localeString === 'sv-se' ? about.sv.description :
                            about.en.description
                        }
                    </p>
                    <p className="version">
                        {
                            localeString === 'en-us' ? about.en.version :
                            localeString === 'ro-ro' ? about.ro.version :
                            localeString === 'nl-nl' ? about.nl.version :
                            localeString === 'sv-se' ? about.sv.version :
                            about.en.version
                        }
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )

}
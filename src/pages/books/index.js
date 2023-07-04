import Head from 'next/head'
import { useRouter } from 'next/router'
import { pageMetadata } from '@/i18n/pageMetadata'
import { websiteName } from '@/metadata/global'
import { books } from '@/i18n/pages'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import styles from '@/styles/Books.module.css'
import { bookPaths } from '@/i18n/dynamicPagePaths'
import { home } from '@/i18n/pages'

export default function Books() {


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
            return localeString = locale
        }
    })

    return(
        <>
            <Head>
                <title>
                    {
                        localeString === 'en-us' ? `${books.en.title} | ${websiteName}` :
                        localeString === 'ro-ro' ? `${books.ro.title} | ${websiteName}` :
                        localeString === 'nl-nl' ? `${books.nl.title} | ${websiteName}` :
                        localeString === 'sv-se' ? `${books.sv.title} | ${websiteName}` :
                        `${books.en.title} | ${websiteName}`
                    }
                </title>
                <meta name="description" content={
                    localeString === 'en-us' ? pageMetadata.en.books.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.description :
                    localeString === 'sv-se' ? pageMetadata.sv.books.description :
                    pageMetadata.en.books.description
                } />
                <meta name="og:title" content={
                    localeString === 'en-us' ? `${books.en.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${books.ro.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${books.nl.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${books.sv.title} | ${websiteName}` :
                    `${books.en.title} | ${websiteName}`
                } />
                <meta name="og:description" content={
                    localeString === 'en-us' ? pageMetadata.en.books.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.description :
                    localeString === 'sv-se' ? pageMetadata.sv.books.description :
                    pageMetadata.en.books.description
                } />
                <meta name="og:url" content={
                    localeString === 'en-us' ? pageMetadata.en.books.canonicalUrl :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.canonicalUrl :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.canonicalUrl :
                    localeString === 'sv-se' ? pageMetadata.sv.books.canonicalUrl :
                    pageMetadata.en.books.canonicalUrl
                } />
                <meta name="og:image" content={
                    localeString === 'en-us' ? pageMetadata.en.books.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.books.image.url :
                    pageMetadata.en.books.image.url
                } />
                <meta name="og:image:alt" content={
                    localeString === 'en-us' ? pageMetadata.en.books.image.alt :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.image.alt :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.image.alt :
                    localeString === 'sv-se' ? pageMetadata.sv.books.image.alt :
                    pageMetadata.en.books.image.alt
                } />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="627" />
                <meta name="og:image:type" content="image/png" />
                <meta name="og:image:secure_url" content={
                    localeString === 'en-us' ? pageMetadata.en.books.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.books.image.url :
                    pageMetadata.en.books.image.url
                } />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={
                    localeString === 'en-us' ? `${books.en.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${books.ro.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${books.nl.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${books.sv.title} | ${websiteName}` :
                    `${books.en.title} | ${websiteName}`
                } />
                <meta name="twitter:description" content={
                    localeString === 'en-us' ? pageMetadata.en.books.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.description :
                    localeString === 'sv-se' ? pageMetadata.sv.books.description :
                    pageMetadata.en.books.description
                } />
                <meta name="twitter:image" content={
                    localeString === 'en-us' ? pageMetadata.en.books.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.books.image.url :
                    pageMetadata.en.books.image.url
                } />
                <meta name="twitter:image:alt" content={
                    localeString === 'en-us' ? pageMetadata.en.books.image.alt :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.image.alt :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.image.alt :
                    localeString === 'sv-se' ? pageMetadata.sv.books.image.alt :
                    pageMetadata.en.books.image.alt
                } />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="627" />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:domain" content="esufranchise.com" />
                <link rel="canonical" href={
                    localeString === 'en-us' ? pageMetadata.en.books.canonicalUrl :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.canonicalUrl :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.canonicalUrl :
                    localeString === 'sv-se' ? pageMetadata.sv.books.canonicalUrl :
                    pageMetadata.en.books.canonicalUrl
                } />
                {
                    localeString === 'en-us' ? pageMetadata.en.books.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'ro-ro' ? pageMetadata.ro.books.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'nl-nl' ? pageMetadata.nl.books.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'sv-se' ? pageMetadata.sv.books.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    pageMetadata.en.books.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    ))
                }
            </Head>
            <NavBar />
            <main className="books">
                <h1 className={styles.pageTitle}>
                    {
                        localeString === 'en-us' ? books.en.title :
                        localeString === 'ro-ro' ? books.ro.title :
                        localeString === 'nl-nl' ? books.nl.title :
                        localeString === 'sv-se' ? books.sv.title :
                        books.en.title
                    }
                </h1>
                <section className="phase-one">
                    <h2 className={styles.sectionHeader}>
                        {
                            localeString === 'en-us' ? books.en.phaseOne :
                            localeString === 'ro-ro' ? books.ro.phaseOne :
                            localeString === 'nl-nl' ? books.nl.phaseOne :
                            localeString === 'sv-se' ? books.sv.phaseOne :
                            books.en.phaseOne
                        }
                    </h2>
                    <div className={styles.bookList}>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.purpleBolt :
                            localeString === 'ro-ro' ? bookPaths.ro.purpleBolt :
                            localeString === 'nl-nl' ? bookPaths.nl.purpleBolt :
                            localeString === 'sv-se' ? bookPaths.sv.purpleBolt :
                            bookPaths.en.purpleBolt
                        } className={styles.tile}>
                        <   img src={
                                localeString === 'en-us' ? home.en.purpleBoltCover :
                                localeString === 'ro-ro' ? home.ro.purpleBoltCover :
                                localeString === 'nl-nl' ? home.nl.purpleBoltCover :
                                localeString === 'sv-se' ? home.sv.purpleBoltCover :
                                home.en.purpleBoltCover
                        } alt={
                                localeString === 'en-us' ? home.en.purpleBoltCoverAlt :
                                localeString === 'ro-ro' ? home.ro.purpleBoltCoverAlt :
                                localeString === 'nl-nl' ? home.nl.purpleBoltCoverAlt :
                                localeString === 'sv-se' ? home.sv.purpleBoltCoverAlt :
                                home.en.purpleBoltCoverAlt
                        } className={styles.tileImg} />
                        </Link>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.thor :
                            localeString === 'ro-ro' ? bookPaths.ro.thor :
                            localeString === 'nl-nl' ? bookPaths.nl.thor :
                            localeString === 'sv-se' ? bookPaths.sv.thor :
                            bookPaths.en.thor
                        } className={styles.tile}>
                            <img src={
                                localeString === 'en-us' ? home.en.thorCover :
                                localeString === 'ro-ro' ? home.ro.thorCover :
                                localeString === 'nl-nl' ? home.nl.thorCover :
                                localeString === 'sv-se' ? home.sv.thorCover :
                                home.en.thorCover
                            } alt={
                                localeString === 'en-us' ? home.en.thorCoverAlt :
                                localeString === 'ro-ro' ? home.ro.thorCoverAlt :
                                localeString === 'nl-nl' ? home.nl.thorCoverAlt :
                                localeString === 'sv-se' ? home.sv.thorCoverAlt :
                                home.en.thorCoverAlt
                            } className={styles.tileImg} />
                        </Link>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.madameWilhelmina :
                            localeString === 'ro-ro' ? bookPaths.ro.madameWilhelmina :
                            localeString === 'nl-nl' ? bookPaths.nl.madameWilhelmina :
                            localeString === 'sv-se' ? bookPaths.sv.madameWilhelmina :
                            bookPaths.en.madameWilhelmina
                        } className={styles.tile}>
                            <img src={
                                localeString === 'en-us' ? home.en.madameWilhelminaCover :
                                localeString === 'ro-ro' ? home.ro.madameWilhelminaCover :
                                localeString === 'nl-nl' ? home.nl.madameWilhelminaCover :
                                localeString === 'sv-se' ? home.sv.madameWilhelminaCover :
                                home.en.madameWilhelminaCover
                            } alt={
                                localeString === 'en-us' ? home.en.madameWilhelminaCoverAlt :
                                localeString === 'ro-ro' ? home.ro.madameWilhelminaCoverAlt :
                                localeString === 'nl-nl' ? home.nl.madameWilhelminaCoverAlt :
                                localeString === 'sv-se' ? home.sv.madameWilhelminaCoverAlt :
                                home.en.madameWilhelminaCoverAlt
                            } className={styles.tileImg} />
                        </Link>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.doctorHex :
                            localeString === 'ro-ro' ? bookPaths.ro.doctorHex :
                            localeString === 'nl-nl' ? bookPaths.nl.doctorHex :
                            localeString === 'sv-se' ? bookPaths.sv.doctorHex :
                            bookPaths.en.doctorHex
                        } className={styles.tile}>
                            <img src={
                                localeString === 'en-us' ? home.en.doctorHexCover :
                                localeString === 'ro-ro' ? home.ro.doctorHexCover :
                                localeString === 'nl-nl' ? home.nl.doctorHexCover :
                                localeString === 'sv-se' ? home.sv.doctorHexCover :
                                home.en.doctorHexCover
                            } alt={
                                localeString === 'en-us' ? home.en.doctorHexCoverAlt :
                                localeString === 'ro-ro' ? home.ro.doctorHexCoverAlt :
                                localeString === 'nl-nl' ? home.nl.doctorHexCoverAlt :
                                localeString === 'sv-se' ? home.sv.doctorHexCoverAlt :
                                home.en.doctorHexCoverAlt
                            } className={styles.tileImg} />
                        </Link>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.theGhost :
                            localeString === 'ro-ro' ? bookPaths.ro.theGhost :
                            localeString === 'nl-nl' ? bookPaths.nl.theGhost :
                            localeString === 'sv-se' ? bookPaths.sv.theGhost :
                            bookPaths.en.theGhost
                        } className={styles.tile}>
                            <img src={
                                localeString === 'en-us' ? home.en.theGhostCover :
                                localeString === 'ro-ro' ? home.ro.theGhostCover :
                                localeString === 'nl-nl' ? home.nl.theGhostCover :
                                localeString === 'sv-se' ? home.sv.theGhostCover :
                                home.en.theGhostCover
                            } alt={
                                localeString === 'en-us' ? home.en.theGhostCoverAlt :
                                localeString === 'ro-ro' ? home.ro.theGhostCoverAlt :
                                localeString === 'nl-nl' ? home.nl.theGhostCoverAlt :
                                localeString === 'sv-se' ? home.sv.theGhostCoverAlt :
                                home.en.theGhostCoverAlt
                            } className={styles.tileImg} />
                        </Link>
                        <Link href={
                            localeString === 'en-us' ? bookPaths.en.theEthereals :
                            localeString === 'ro-ro' ? bookPaths.ro.theEthereals :
                            localeString === 'nl-nl' ? bookPaths.nl.theEthereals :
                            localeString === 'sv-se' ? bookPaths.sv.theEthereals :
                            bookPaths.en.theEthereals
                        } className={styles.tile}>
                            <img src={
                                localeString === 'en-us' ? home.en.theEtherealsCover :
                                localeString === 'ro-ro' ? home.ro.theEtherealsCover :
                                localeString === 'nl-nl' ? home.nl.theEtherealsCover :
                                localeString === 'sv-se' ? home.sv.theEtherealsCover :
                                home.en.theEtherealsCover
                            } alt={
                                localeString === 'en-us' ? home.en.theEtherealsCoverAlt :
                                localeString === 'ro-ro' ? home.ro.theEtherealsCoverAlt :
                                localeString === 'nl-nl' ? home.nl.theEtherealsCoverAlt :
                                localeString === 'sv-se' ? home.sv.theEtherealsCoverAlt :
                                home.en.theEtherealsCoverAlt
                            } className={styles.tileImg} />
                        </Link>
                    </div>
                </section>
                <section className="phase-two">
                    <h2 className={styles.sectionHeader}>
                        {
                            localeString === 'en-us' ? books.en.phaseTwo :
                            localeString === 'ro-ro' ? books.ro.phaseTwo :
                            localeString === 'nl-nl' ? books.nl.phaseTwo :
                            localeString === 'sv-se' ? books.sv.phaseTwo :
                            books.en.phaseTwo
                        }
                    </h2>
                    <div className={`${styles.bookList} ${styles.phaseTwoList}`}>
                    <Link href={
                        localeString === 'en-us' ? bookPaths.en.dracula :
                        localeString === 'ro-ro' ? bookPaths.ro.dracula :
                        localeString === 'nl-nl' ? bookPaths.nl.dracula :
                        localeString === 'sv-se' ? bookPaths.sv.dracula :
                        bookPaths.en.dracula
                    } className={styles.tile}>
                        <img src={
                            localeString === 'en-us' ? home.en.draculaCover :
                            localeString === 'ro-ro' ? home.ro.draculaCover :
                            localeString === 'nl-nl' ? home.nl.draculaCover :
                            localeString === 'sv-se' ? home.sv.draculaCover :
                            home.en.draculaCover
                        } alt={
                            localeString === 'en-us' ? home.en.draculaCoverAlt :
                            localeString === 'ro-ro' ? home.ro.draculaCoverAlt :
                            localeString === 'nl-nl' ? home.nl.draculaCoverAlt :
                            localeString === 'sv-se' ? home.sv.draculaCoverAlt :
                            home.en.draculaCoverAlt
                        } className={styles.tileImg} />
                    </Link>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                    <div className={styles.tile}></div>
                </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
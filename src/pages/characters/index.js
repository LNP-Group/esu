import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { pageMetadata } from '@/i18n/pageMetadata'
import { websiteName } from '@/metadata/global'
import { characters } from '@/i18n/pages'
import { home } from '@/i18n/pages'
import Footer from '@/components/Footer'
import { bookPaths, characterPaths } from '@/i18n/dynamicPagePaths'
import styles from '@/styles/Characters.module.css'

export default function Characters() {

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
                        localeString === 'en-us' ? `${characters.en.title} | ${websiteName}` :
                        localeString === 'ro-ro' ? `${characters.ro.title} | ${websiteName}` :
                        localeString === 'nl-nl' ? `${characters.nl.title} | ${websiteName}` :
                        localeString === 'sv-se' ? `${characters.sv.title} | ${websiteName}` :
                        `${characters.en.title} | ${websiteName}`
                    }
                </title>
                <meta name="description" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.description :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.description :
                    pageMetadata.en.characters.description
                } />
                <link rel="canonical" href={
                    localeString === 'en-us' ? pageMetadata.en.characters.canonicalUrl :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.canonicalUrl :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.canonicalUrl :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.canonicalUrl :
                    pageMetadata.en.characters.canonicalUrl
                } />
                <meta property="og:title" content={
                    localeString === 'en-us' ? `${characters.en.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${characters.ro.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${characters.nl.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${characters.sv.title} | ${websiteName}` :
                    `${characters.en.title} | ${websiteName}`
                } />
                <meta property="og:description" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.description :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.description :
                    pageMetadata.en.characters.description
                } />
                <meta property="og:url" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.canonicalUrl :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.canonicalUrl :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.canonicalUrl :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.canonicalUrl :
                    pageMetadata.en.characters.canonicalUrl
                } />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.image.url :
                    pageMetadata.en.characters.image.url
                } />
                <meta property="og:image:alt" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.image.alt :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.image.alt :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.image.alt :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.image.alt :
                    pageMetadata.en.characters.image.alt
                } />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="627" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:locale" content={
                    localeString === 'en-us' ? 'en_US' :
                    localeString === 'ro-ro' ? 'ro_RO' :
                    localeString === 'nl-nl' ? 'nl_NL' :
                    localeString === 'sv-se' ? 'sv_SE' :
                    'en_US'
                } />
                <meta property="og:site_name" content="@ESUFranchise" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ESUFranchise" />
                <meta name="twitter:creator" content="@ESUFranchise" />
                <meta name="twitter:title" content={
                    localeString === 'en-us' ? `${characters.en.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${characters.ro.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${characters.nl.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${characters.sv.title} | ${websiteName}` :
                    `${characters.en.title} | ${websiteName}`
                } />
                <meta name="twitter:description" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.description :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.description :
                    pageMetadata.en.characters.description
                } />
                <meta name="twitter:image" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.image.url :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.image.url :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.image.url :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.image.url :
                    pageMetadata.en.characters.image.url
                } />
                <meta name="twitter:image:alt" content={
                    localeString === 'en-us' ? pageMetadata.en.characters.image.alt :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.image.alt :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.image.alt :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.image.alt :
                    pageMetadata.en.characters.image.alt
                } />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="627" />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:domain" content="esufranchise.com" />
                {
                    localeString === 'en-us' ? pageMetadata.en.characters.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'ro-ro' ? pageMetadata.ro.characters.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'nl-nl' ? pageMetadata.nl.characters.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'sv-se' ? pageMetadata.sv.characters.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    pageMetadata.en.characters.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    ))
                }
            </Head>
            <NavBar />
            <main className={styles.main} style={{minHeight: '100dvh'}}>
                <h1 className={styles.pageTitle}>
                    {
                        localeString === 'en-us' ? characters.en.title :
                        localeString === 'ro-ro' ? characters.ro.title :
                        localeString === 'nl-nl' ? characters.nl.title :
                        localeString === 'sv-se' ? characters.sv.title :
                        characters.en.title
                    }
                </h1>
                <h2 className={styles.sectionTitle}>
                    {
                        localeString === 'en-us' ? characters.en.theEthereals :
                        localeString === 'ro-ro' ? characters.ro.theEthereals :
                        localeString === 'nl-nl' ? characters.nl.theEthereals :
                        localeString === 'sv-se' ? characters.sv.theEthereals :
                        characters.en.theEthereals
                    }
                </h2>
                <div className={styles.characterList}>
                    <Link href={
                        localeString === 'en-us' ? characterPaths.en.purpleBolt :
                        localeString === 'ro-ro' ? characterPaths.ro.purpleBolt :
                        localeString === 'nl-nl' ? characterPaths.nl.purpleBolt :
                        localeString === 'sv-se' ? characterPaths.sv.purpleBolt :
                        characterPaths.en.purpleBolt
                    } className={styles.characterTile}>
                        <img src={
                            localeString === 'en-us' ? home.en.purpleBoltImg :
                            localeString === 'ro-ro' ? home.ro.purpleBoltImg :
                            localeString === 'nl-nl' ? home.nl.purpleBoltImg :
                            localeString === 'sv-se' ? home.sv.purpleBoltImg :
                            home.en.purpleBoltImg
                        } alt={
                            localeString === 'en-us' ? home.en.purpleBoltImgAlt :
                            localeString === 'ro-ro' ? home.ro.purpleBoltImgAlt :
                            localeString === 'nl-nl' ? home.nl.purpleBoltImgAlt :
                            localeString === 'sv-se' ? home.sv.purpleBoltImgAlt :
                            home.en.purpleBoltImgAlt
                        } className={styles.characterTileImg} />
                    </Link>
                    <Link href={
                        localeString === 'en-us' ? characterPaths.en.thor :
                        localeString === 'ro-ro' ? characterPaths.ro.thor :
                        localeString === 'nl-nl' ? characterPaths.nl.thor :
                        localeString === 'sv-se' ? characterPaths.sv.thor :
                        characterPaths.en.thor
                    } className={styles.characterTile}>
                        <img src={
                            localeString === 'en-us' ? home.en.thorImg :
                            localeString === 'ro-ro' ? home.ro.thorImg :
                            localeString === 'nl-nl' ? home.nl.thorImg :
                            localeString === 'sv-se' ? home.sv.thorImg :
                            home.en.thorImg
                        } alt={
                            localeString === 'en-us' ? home.en.thorImgAlt :
                            localeString === 'ro-ro' ? home.ro.thorImgAlt :
                            localeString === 'nl-nl' ? home.nl.thorImgAlt :
                            localeString === 'sv-se' ? home.sv.thorImgAlt :
                            home.en.thorImgAlt
                        } className={styles.characterTileImg} />
                    </Link>
                    <Link href={
                        localeString === 'en-us' ? characterPaths.en.madameWilhelmina :
                        localeString === 'ro-ro' ? characterPaths.ro.madameWilhelmina :
                        localeString === 'nl-nl' ? characterPaths.nl.madameWilhelmina :
                        localeString === 'sv-se' ? characterPaths.sv.madameWilhelmina :
                        characterPaths.en.madameWilhelmina
                    } className={styles.characterTile}>
                        <img src={
                            localeString === 'en-us' ? home.en.madameWilhelminaImg :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaImg :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaImg :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaImg :
                            home.en.madameWilhelminaImg
                        } alt={
                            localeString === 'en-us' ? home.en.madameWilhelminaImgAlt :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaImgAlt :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaImgAlt :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaImgAlt :
                            home.en.madameWilhelminaImgAlt
                        } className={styles.characterTileImg} />
                    </Link>
                    <Link href={
                        localeString === 'en-us' ? characterPaths.en.doctorHex :
                        localeString === 'ro-ro' ? characterPaths.ro.doctorHex :
                        localeString === 'nl-nl' ? characterPaths.nl.doctorHex :
                        localeString === 'sv-se' ? characterPaths.sv.doctorHex :
                        characterPaths.en.doctorHex
                    } className={styles.characterTile}>
                        <img src={
                            localeString === 'en-us' ? home.en.doctorHexImg :
                            localeString === 'ro-ro' ? home.ro.doctorHexImg :
                            localeString === 'nl-nl' ? home.nl.doctorHexImg :
                            localeString === 'sv-se' ? home.sv.doctorHexImg :
                            home.en.doctorHexImg
                        } alt={
                            localeString === 'en-us' ? home.en.doctorHexImgAlt :
                            localeString === 'ro-ro' ? home.ro.doctorHexImgAlt :
                            localeString === 'nl-nl' ? home.nl.doctorHexImgAlt :
                            localeString === 'sv-se' ? home.sv.doctorHexImgAlt :
                            home.en.doctorHexImgAlt
                        } className={styles.characterTileImg} />
                    </Link>
                    <Link href={
                        localeString === 'en-us' ? characterPaths.en.theGhost :
                        localeString === 'ro-ro' ? characterPaths.ro.theGhost :
                        localeString === 'nl-nl' ? characterPaths.nl.theGhost :
                        localeString === 'sv-se' ? characterPaths.sv.theGhost :
                        characterPaths.en.theGhost
                    } className={styles.characterTile}>
                        <img src={
                            localeString === 'en-us' ? home.en.theGhostImg :
                            localeString === 'ro-ro' ? home.ro.theGhostImg :
                            localeString === 'nl-nl' ? home.nl.theGhostImg :
                            localeString === 'sv-se' ? home.sv.theGhostImg :
                            home.en.theGhostImg
                        } alt={
                            localeString === 'en-us' ? home.en.theGhostImgAlt :
                            localeString === 'ro-ro' ? home.ro.theGhostImgAlt :
                            localeString === 'nl-nl' ? home.nl.theGhostImgAlt :
                            localeString === 'sv-se' ? home.sv.theGhostImgAlt :
                            home.en.theGhostImgAlt
                        } className={styles.characterTileImg} />
                    </Link>
                </div>
            </main>
            <Footer />

        </>
    )

}

import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { pageMetadata } from '@/i18n/pageMetadata'
import { websiteName } from '@/metadata/global'
import { home } from '@/i18n/pages'
import Footer from '@/components/Footer'
import { bookPaths, characterPaths } from '@/i18n/dynamicPagePaths'
import Loading from './loading'
import { Suspense } from 'react'
import Image from 'next/image'


export default function Home() {

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

  return (
    <>
      <Suspense fallback={<Loading />}>
          <Head>
            <title>
                {
                    localeString === 'en-us' ? `${pageMetadata.en.home.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.home.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.home.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.home.title} | ${websiteName}` :
                    `${pageMetadata.en.home.title} | ${websiteName}`
                }
            </title>
            <meta name="description" content={
                    localeString === 'en-us' ? pageMetadata.en.home.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.home.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.home.description :
                    localeString === 'sv-se' ? pageMetadata.sv.home.description :
                    pageMetadata.en.home.description
            } />
            <meta name="og:title" content={
                localeString === 'en-us' ? `${pageMetadata.en.home.title} | ${websiteName}` :
                localeString === 'ro-ro' ? `${pageMetadata.ro.home.title} | ${websiteName}` :
                localeString === 'nl-nl' ? `${pageMetadata.nl.home.title} | ${websiteName}` :
                localeString === 'sv-se' ? `${pageMetadata.sv.home.title} | ${websiteName}` :
                `${pageMetadata.en.home.title} | ${websiteName}`
            } />
            <meta name="og:description" content={
                localeString === 'en-us' ? pageMetadata.en.home.description :
                localeString === 'ro-ro' ? pageMetadata.ro.home.description :
                localeString === 'nl-nl' ? pageMetadata.nl.home.description :
                localeString === 'sv-se' ? pageMetadata.sv.home.description :
                pageMetadata.en.home.description
            } />
            <meta name="og:url" content={
                localeString === 'en-us' ? pageMetadata.en.home.canonicalUrl :
                localeString === 'ro-ro' ? pageMetadata.ro.home.canonicalUrl :
                localeString === 'nl-nl' ? pageMetadata.nl.home.canonicalUrl :
                localeString === 'sv-se' ? pageMetadata.sv.home.canonicalUrl :
                pageMetadata.en.home.canonicalUrl
            } />
            <meta name="og:image" content={
                localeString === 'en-us' ? pageMetadata.en.home.image.url :
                localeString === 'ro-ro' ? pageMetadata.ro.home.image.url :
                localeString === 'nl-nl' ? pageMetadata.nl.home.image.url :
                localeString === 'sv-se' ? pageMetadata.sv.home.image.url :
                pageMetadata.en.home.image.url
            } />
            <meta name="og:image:alt" content={
                localeString === 'en-us' ? pageMetadata.en.home.image.alt :
                localeString === 'ro-ro' ? pageMetadata.ro.home.image.alt :
                localeString === 'nl-nl' ? pageMetadata.nl.home.image.alt :
                localeString === 'sv-se' ? pageMetadata.sv.home.image.alt :
                pageMetadata.en.home.image.alt
            } />
            <meta name="og:image:width" content="1200" />
            <meta name="og:image:height" content="630" />
            <meta name="og:type" content="website" />
            <meta name="og:locale" content={
                localeString === 'en-us' ? "en_US" :
                localeString === 'ro-ro' ? "ro_RO" :
                localeString === 'nl-nl' ? "nl_NL" :
                localeString === 'sv-se' ? "sv_SE" :
                "en_US"
            } />
            <meta name="og:site_name" content={websiteName} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ESUfranchise" />
            <meta name="twitter:creator" content="@ESUfranchise" />
            <meta name="twitter:title" content={
                localeString === 'en-us' ? `${pageMetadata.en.home.title} | ${websiteName}` :
                localeString === 'ro-ro' ? `${pageMetadata.ro.home.title} | ${websiteName}` :
                localeString === 'nl-nl' ? `${pageMetadata.nl.home.title} | ${websiteName}` :
                localeString === 'sv-se' ? `${pageMetadata.sv.home.title} | ${websiteName}` :
                `${pageMetadata.en.home.title} | ${websiteName}`
            } />
            <meta name="twitter:description" content={
                localeString === 'en-us' ? pageMetadata.en.home.description :
                localeString === 'ro-ro' ? pageMetadata.ro.home.description :
                localeString === 'nl-nl' ? pageMetadata.nl.home.description :
                localeString === 'sv-se' ? pageMetadata.sv.home.description :
                pageMetadata.en.home.description
            } />
            <meta name="twitter:image" content={
                localeString === 'en-us' ? pageMetadata.en.home.image.url :
                localeString === 'ro-ro' ? pageMetadata.ro.home.image.url :
                localeString === 'nl-nl' ? pageMetadata.nl.home.image.url :
                localeString === 'sv-se' ? pageMetadata.sv.home.image.url :
                pageMetadata.en.home.image.url
            } />
            <meta name="twitter:image:alt" content={
                localeString === 'en-us' ? pageMetadata.en.home.image.alt :
                localeString === 'ro-ro' ? pageMetadata.ro.home.image.alt :
                localeString === 'nl-nl' ? pageMetadata.nl.home.image.alt :
                localeString === 'sv-se' ? pageMetadata.sv.home.image.alt :
                pageMetadata.en.home.image.alt
            } />
            <meta name="twitter:image:type" content="image/png" />
            <meta name="twitter:domain" content="esufranchise.com" />
            <link rel="canonical" href={
                    localeString === 'en-us' ? pageMetadata.en.home.canonicalUrl :
                    localeString === 'ro-ro' ? pageMetadata.ro.home.canonicalUrl :
                    localeString === 'nl-nl' ? pageMetadata.nl.home.canonicalUrl :
                    localeString === 'sv-se' ? pageMetadata.sv.home.canonicalUrl :
                    pageMetadata.en.home.canonicalUrl
            } />
            {
                localeString === 'en-us' ? pageMetadata.en.home.alternateUrls.map((alternateUrl, index) => (
                    <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                )) :
                localeString === 'ro-ro' ? pageMetadata.ro.home.alternateUrls.map((alternateUrl, index) => (
                    <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                )) :
                localeString === 'nl-nl' ? pageMetadata.nl.home.alternateUrls.map((alternateUrl, index) => (
                    <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                )) :
                localeString === 'sv-se' ? pageMetadata.sv.home.alternateUrls.map((alternateUrl, index) => (
                    <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                )) :
                pageMetadata.en.home.alternateUrls.map((alternateUrl, index) => (
                    <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                ))
            }
          </Head>
          <NavBar />
          <main>
            <div className={styles.header}>
                <video className={styles.homeVideo} autoPlay={true} loop={true} muted={true} playsInline={true}>
                    <source src="https://cdn.esufranchise.com/website/hero/purple-bolt-hero-teaser.mp4" type="video/mp4" />
                </video>
                <div className={styles.headerOpacity}/>
                <div className={styles.headerContent}>
                    <div className={styles.bookLogo}>
                        <Image
                            fill
                            src={
                                localeString === 'en-us' ? home.en.purpleBoltLogo :
                                localeString === 'ro-ro' ? home.ro.purpleBoltLogo :
                                localeString === 'nl-nl' ? home.nl.purpleBoltLogo :
                                localeString === 'sv-se' ? home.sv.purpleBoltLogo :
                                home.en.purpleBoltLogo
                            } alt={
                                localeString === 'en-us' ? home.en.purpleBoltLogoAlt :
                                localeString === 'ro-ro' ? home.ro.purpleBoltLogoAlt :
                                localeString === 'nl-nl' ? home.nl.purpleBoltLogoAlt :
                                localeString === 'sv-se' ? home.sv.purpleBoltLogoAlt :
                                home.en.purpleBoltLogoAlt
                            }
                        />
                    </div>
                    <div className={styles.headerText}>
                        <h1 className={styles.h1}>
                            {
                                localeString === 'en-us' ? home.en.releaseTeaser :
                                localeString === 'ro-ro' ? home.ro.releaseTeaser :
                                localeString === 'nl-nl' ? home.nl.releaseTeaser :
                                localeString === 'sv-se' ? home.sv.releaseTeaser :
                                home.en.releaseTeaser
                            }
                        </h1>
                        <div className="countdown"></div>
                    </div>
                </div>
            </div>
            <h2 className={styles.sectionHeader}>
                {
                    localeString === 'en-us' ? home.en.phaseOne :
                    localeString === 'ro-ro' ? home.ro.phaseOne :
                    localeString === 'nl-nl' ? home.nl.phaseOne :
                    localeString === 'sv-se' ? home.sv.phaseOne :
                    home.en.phaseOne
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
                <Image
                    fill
                    src={
                        localeString === 'en-us' ? home.en.purpleBoltCover :
                        localeString === 'ro-ro' ? home.ro.purpleBoltCover :
                        localeString === 'nl-nl' ? home.nl.purpleBoltCover :
                        localeString === 'sv-se' ? home.sv.purpleBoltCover :
                        home.en.purpleBoltCover
                    } 
                    alt={
                        localeString === 'en-us' ? home.en.purpleBoltCoverAlt :
                        localeString === 'ro-ro' ? home.ro.purpleBoltCoverAlt :
                        localeString === 'nl-nl' ? home.nl.purpleBoltCoverAlt :
                        localeString === 'sv-se' ? home.sv.purpleBoltCoverAlt :
                        home.en.purpleBoltCoverAlt
                    } 
                    className={styles.tileImg} 
                />
                </Link>
                <Link href={
                    localeString === 'en-us' ? bookPaths.en.thor :
                    localeString === 'ro-ro' ? bookPaths.ro.thor :
                    localeString === 'nl-nl' ? bookPaths.nl.thor :
                    localeString === 'sv-se' ? bookPaths.sv.thor :
                    bookPaths.en.thor
                } className={styles.tile}>
                    <Image
                        
                        fill
                        src={
                            localeString === 'en-us' ? home.en.thorCover :
                            localeString === 'ro-ro' ? home.ro.thorCover :
                            localeString === 'nl-nl' ? home.nl.thorCover :
                            localeString === 'sv-se' ? home.sv.thorCover :
                            home.en.thorCover
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.thorCoverAlt :
                            localeString === 'ro-ro' ? home.ro.thorCoverAlt :
                            localeString === 'nl-nl' ? home.nl.thorCoverAlt :
                            localeString === 'sv-se' ? home.sv.thorCoverAlt :
                            home.en.thorCoverAlt
                        }
                        className={styles.tileImg}
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? bookPaths.en.madameWilhelmina :
                    localeString === 'ro-ro' ? bookPaths.ro.madameWilhelmina :
                    localeString === 'nl-nl' ? bookPaths.nl.madameWilhelmina :
                    localeString === 'sv-se' ? bookPaths.sv.madameWilhelmina :
                    bookPaths.en.madameWilhelmina
                } className={styles.tile}>
                    <Image
                        fill
                        src={
                            localeString === 'en-us' ? home.en.madameWilhelminaCover :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaCover :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaCover :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaCover :
                            home.en.madameWilhelminaCover
                        }
                        alt={
                            localeString === 'en-us' ? home.en.madameWilhelminaCoverAlt :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaCoverAlt :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaCoverAlt :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaCoverAlt :
                            home.en.madameWilhelminaCoverAlt
                        }
                        className={styles.tileImg}
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? bookPaths.en.doctorHex :
                    localeString === 'ro-ro' ? bookPaths.ro.doctorHex :
                    localeString === 'nl-nl' ? bookPaths.nl.doctorHex :
                    localeString === 'sv-se' ? bookPaths.sv.doctorHex :
                    bookPaths.en.doctorHex
                } className={styles.tile}>
                    <Image
                        fill
                        src={
                            localeString === 'en-us' ? home.en.doctorHexCover :
                            localeString === 'ro-ro' ? home.ro.doctorHexCover :
                            localeString === 'nl-nl' ? home.nl.doctorHexCover :
                            localeString === 'sv-se' ? home.sv.doctorHexCover :
                            home.en.doctorHexCover
                        }
                        alt={
                            localeString === 'en-us' ? home.en.doctorHexCoverAlt :
                            localeString === 'ro-ro' ? home.ro.doctorHexCoverAlt :
                            localeString === 'nl-nl' ? home.nl.doctorHexCoverAlt :
                            localeString === 'sv-se' ? home.sv.doctorHexCoverAlt :
                            home.en.doctorHexCoverAlt
                        }
                    className={styles.tileImg}
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? bookPaths.en.theGhost :
                    localeString === 'ro-ro' ? bookPaths.ro.theGhost :
                    localeString === 'nl-nl' ? bookPaths.nl.theGhost :
                    localeString === 'sv-se' ? bookPaths.sv.theGhost :
                    bookPaths.en.theGhost
                } className={styles.tile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.theGhostCover :
                            localeString === 'ro-ro' ? home.ro.theGhostCover :
                            localeString === 'nl-nl' ? home.nl.theGhostCover :
                            localeString === 'sv-se' ? home.sv.theGhostCover :
                            home.en.theGhostCover
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.theGhostCoverAlt :
                            localeString === 'ro-ro' ? home.ro.theGhostCoverAlt :
                            localeString === 'nl-nl' ? home.nl.theGhostCoverAlt :
                            localeString === 'sv-se' ? home.sv.theGhostCoverAlt :
                            home.en.theGhostCoverAlt
                        } 
                        className={styles.tileImg} 
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? bookPaths.en.theEthereals :
                    localeString === 'ro-ro' ? bookPaths.ro.theEthereals :
                    localeString === 'nl-nl' ? bookPaths.nl.theEthereals :
                    localeString === 'sv-se' ? bookPaths.sv.theEthereals :
                    bookPaths.en.theEthereals
                } className={styles.tile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.theEtherealsCover :
                            localeString === 'ro-ro' ? home.ro.theEtherealsCover :
                            localeString === 'nl-nl' ? home.nl.theEtherealsCover :
                            localeString === 'sv-se' ? home.sv.theEtherealsCover :
                            home.en.theEtherealsCover
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.theEtherealsCoverAlt :
                            localeString === 'ro-ro' ? home.ro.theEtherealsCoverAlt :
                            localeString === 'nl-nl' ? home.nl.theEtherealsCoverAlt :
                            localeString === 'sv-se' ? home.sv.theEtherealsCoverAlt :
                            home.en.theEtherealsCoverAlt
                        } 
                        className={styles.tileImg}
                    />
                </Link>
            </div>
            <h2 className={styles.sectionHeader}>
                {
                    localeString === 'en-us' ? home.en.phaseTwo :
                    localeString === 'ro-ro' ? home.ro.phaseTwo :
                    localeString === 'nl-nl' ? home.nl.phaseTwo :
                    localeString === 'sv-se' ? home.sv.phaseTwo :
                    home.en.phaseTwo
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
                    <Image
                        fill
                        src={
                            localeString === 'en-us' ? home.en.draculaCover :
                            localeString === 'ro-ro' ? home.ro.draculaCover :
                            localeString === 'nl-nl' ? home.nl.draculaCover :
                            localeString === 'sv-se' ? home.sv.draculaCover :
                            home.en.draculaCover
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.draculaCoverAlt :
                            localeString === 'ro-ro' ? home.ro.draculaCoverAlt :
                            localeString === 'nl-nl' ? home.nl.draculaCoverAlt :
                            localeString === 'sv-se' ? home.sv.draculaCoverAlt :
                            home.en.draculaCoverAlt
                        } 
                        className={styles.tileImg} 
                    />
                </Link>
                <div className={styles.tile}></div>
                <div className={styles.tile}></div>
                <div className={styles.tile}></div>
                <div className={styles.tile}></div>
                <div className={styles.tile}></div>
            </div>
            <h2 className={styles.sectionHeader}>
                {
                    localeString === 'en-us' ? home.en.characters :
                    localeString === 'ro-ro' ? home.ro.characters :
                    localeString === 'nl-nl' ? home.nl.characters :
                    localeString === 'sv-se' ? home.sv.characters :
                    home.en.characters
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
                    <Image
                        fill
                        src={
                            localeString === 'en-us' ? home.en.purpleBoltImg :
                            localeString === 'ro-ro' ? home.ro.purpleBoltImg :
                            localeString === 'nl-nl' ? home.nl.purpleBoltImg :
                            localeString === 'sv-se' ? home.sv.purpleBoltImg :
                            home.en.purpleBoltImg
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.purpleBoltImgAlt :
                            localeString === 'ro-ro' ? home.ro.purpleBoltImgAlt :
                            localeString === 'nl-nl' ? home.nl.purpleBoltImgAlt :
                            localeString === 'sv-se' ? home.sv.purpleBoltImgAlt :
                            home.en.purpleBoltImgAlt
                        } 
                        className={styles.characterTileImg} 
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? characterPaths.en.thor :
                    localeString === 'ro-ro' ? characterPaths.ro.thor :
                    localeString === 'nl-nl' ? characterPaths.nl.thor :
                    localeString === 'sv-se' ? characterPaths.sv.thor :
                    characterPaths.en.thor
                } className={styles.characterTile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.thorImg :
                            localeString === 'ro-ro' ? home.ro.thorImg :
                            localeString === 'nl-nl' ? home.nl.thorImg :
                            localeString === 'sv-se' ? home.sv.thorImg :
                            home.en.thorImg
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.thorImgAlt :
                            localeString === 'ro-ro' ? home.ro.thorImgAlt :
                            localeString === 'nl-nl' ? home.nl.thorImgAlt :
                            localeString === 'sv-se' ? home.sv.thorImgAlt :
                            home.en.thorImgAlt
                        } 
                        className={styles.characterTileImg} 
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? characterPaths.en.madameWilhelmina :
                    localeString === 'ro-ro' ? characterPaths.ro.madameWilhelmina :
                    localeString === 'nl-nl' ? characterPaths.nl.madameWilhelmina :
                    localeString === 'sv-se' ? characterPaths.sv.madameWilhelmina :
                    characterPaths.en.madameWilhelmina
                } className={styles.characterTile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.madameWilhelminaImg :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaImg :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaImg :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaImg :
                            home.en.madameWilhelminaImg
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.madameWilhelminaImgAlt :
                            localeString === 'ro-ro' ? home.ro.madameWilhelminaImgAlt :
                            localeString === 'nl-nl' ? home.nl.madameWilhelminaImgAlt :
                            localeString === 'sv-se' ? home.sv.madameWilhelminaImgAlt :
                            home.en.madameWilhelminaImgAlt
                        } 
                        className={styles.characterTileImg} 
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? characterPaths.en.doctorHex :
                    localeString === 'ro-ro' ? characterPaths.ro.doctorHex :
                    localeString === 'nl-nl' ? characterPaths.nl.doctorHex :
                    localeString === 'sv-se' ? characterPaths.sv.doctorHex :
                    characterPaths.en.doctorHex
                } className={styles.characterTile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.doctorHexImg :
                            localeString === 'ro-ro' ? home.ro.doctorHexImg :
                            localeString === 'nl-nl' ? home.nl.doctorHexImg :
                            localeString === 'sv-se' ? home.sv.doctorHexImg :
                            home.en.doctorHexImg
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.doctorHexImgAlt :
                            localeString === 'ro-ro' ? home.ro.doctorHexImgAlt :
                            localeString === 'nl-nl' ? home.nl.doctorHexImgAlt :
                            localeString === 'sv-se' ? home.sv.doctorHexImgAlt :
                            home.en.doctorHexImgAlt
                        } 
                        className={styles.characterTileImg} 
                    />
                </Link>
                <Link href={
                    localeString === 'en-us' ? characterPaths.en.theGhost :
                    localeString === 'ro-ro' ? characterPaths.ro.theGhost :
                    localeString === 'nl-nl' ? characterPaths.nl.theGhost :
                    localeString === 'sv-se' ? characterPaths.sv.theGhost :
                    characterPaths.en.theGhost
                } className={styles.characterTile}>
                    <Image 
                        fill
                        src={
                            localeString === 'en-us' ? home.en.theGhostImg :
                            localeString === 'ro-ro' ? home.ro.theGhostImg :
                            localeString === 'nl-nl' ? home.nl.theGhostImg :
                            localeString === 'sv-se' ? home.sv.theGhostImg :
                            home.en.theGhostImg
                        } 
                        alt={
                            localeString === 'en-us' ? home.en.theGhostImgAlt :
                            localeString === 'ro-ro' ? home.ro.theGhostImgAlt :
                            localeString === 'nl-nl' ? home.nl.theGhostImgAlt :
                            localeString === 'sv-se' ? home.sv.theGhostImgAlt :
                            home.en.theGhostImgAlt
                        } 
                        className={styles.characterTileImg} 
                    />
                </Link>
            </div>
          </main>
          <Footer page="home" />
      </Suspense>
    </>
  )
}
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import styles from '@/styles/Dynamic.module.css'
import { useRouter } from 'next/router'
import { dynamicPages } from '@/i18n/pages'
import { purpleBolt, thor, madameWilhelmina, doctorHex, theGhost, theEthereals, dracula } from '@/data/books'

export default function Book() {

    const router = useRouter()

    const book = router.query.book


    let cover
    let title
    let author
    let releaseDate
    let pages
    let phase
    let synopsis
    let premise
    let plot

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

    switch (book) {
        case 'purple-bolt':
            cover = purpleBolt.sv.cover
            title = purpleBolt.sv.title
            author = purpleBolt.sv.author
            releaseDate = purpleBolt.sv.releaseDate
            pages = purpleBolt.sv.pageNumber
            phase = purpleBolt.sv.phase
            synopsis = purpleBolt.sv.synopsis
            premise = purpleBolt.sv.premise
            plot = purpleBolt.sv.plot
        break;
        case 'tor':
            cover = thor.sv.cover
            title = thor.sv.title
            author = thor.sv.author
            releaseDate = thor.sv.releaseDate
            pages = thor.sv.pageNumber
            phase = thor.sv.phase
            synopsis = thor.sv.synopsis
            premise = thor.sv.premise
            plot = thor.sv.plot
        break;
        case 'madame-wilhelmina':
            cover = madameWilhelmina.sv.cover
            title = madameWilhelmina.sv.title
            author = madameWilhelmina.sv.author
            releaseDate = madameWilhelmina.sv.releaseDate
            pages = madameWilhelmina.sv.pageNumber
            phase = madameWilhelmina.sv.phase
            synopsis = madameWilhelmina.sv.synopsis
            premise = madameWilhelmina.sv.premise
            plot = madameWilhelmina.sv.plot
        break;
        case 'doktor-hex':
            cover = doctorHex.sv.cover
            title = doctorHex.sv.title
            author = doctorHex.sv.author
            releaseDate = doctorHex.sv.releaseDate
            pages = doctorHex.sv.pageNumber
            phase = doctorHex.sv.phase
            synopsis = doctorHex.sv.synopsis
            premise = doctorHex.sv.premise
            plot = doctorHex.sv.plot
        break;
        case 'spoket':
            cover = theGhost.sv.cover
            title = theGhost.sv.title
            author = theGhost.sv.author
            releaseDate = theGhost.sv.releaseDate
            pages = theGhost.sv.pageNumber
            phase = theGhost.sv.phase
            synopsis = theGhost.sv.synopsis
            premise = theGhost.sv.premise
            plot = theGhost.sv.plot
        break;
        case 'the-ethereals':
            cover = theEthereals.sv.cover
            title = theEthereals.sv.title
            author = theEthereals.sv.author
            releaseDate = theEthereals.sv.releaseDate
            pages = theEthereals.sv.pageNumber
            phase = theEthereals.sv.phase
            synopsis = theEthereals.sv.synopsis
            premise = theEthereals.sv.premise
            plot = theEthereals.sv.plot
        break;
        case 'dracula':
            cover = dracula.sv.cover
            title = dracula.sv.title
            author = dracula.sv.author
            releaseDate = dracula.sv.releaseDate
            pages = dracula.sv.pageNumber
            phase = dracula.sv.phase
            synopsis = dracula.sv.synopsis
            premise = dracula.sv.premise
            plot = dracula.sv.plot
        break;
    }

    return(
        <>
            <Head>
                <title>
                    {`${title} | ${websiteName}`}
                </title>
                <meta name="description" content={synopsis} />
                <meta property="og:title" content={`${title} | ${websiteName}`} />
                <meta property="og:description" content={synopsis} />
                <meta property="og:image" content={cover} />
                <meta property="og:image:alt" content={title} />
                <meta property="og:url" content={`https://www.esufranchise.com/${localeString}/books/${book}`} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={localeString} />
                <meta property="og:site_name" content={websiteName} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${title} | ${websiteName}`} />
                <meta name="twitter:description" content={synopsis} />
                <meta name="twitter:image" content={cover} />
                <meta name="twitter:image:alt" content={title} />
                <meta name="twitter:site" content="@esufranchise" />
                <meta name="twitter:creator" content="@esufranchise" />
                <link rel="canonical" href={`https://www.esufranchise.com/${localeString}/books/${book}`} />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.bookInfoContainer}>
                    <div className={styles.bookCoverContainer}>
                        <img src={cover} alt={title} className={styles.bookCover} />
                    </div>
                    <div className={styles.bookInfo}>
                        <p className={styles.bookTitle}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.book.title :
                                    localeString === 'ro-ro' ? dynamicPages.ro.book.title :
                                    localeString === 'nl-nl' ? dynamicPages.nl.book.title :
                                    localeString === 'sv-se' ? dynamicPages.sv.book.title :
                                    dynamicPages.en.book.title
                                }
                            </span>
                            {title}
                        </p>
                        <p className={styles.bookAuthor}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.book.author :
                                    localeString === 'ro-ro' ? dynamicPages.ro.book.author :
                                    localeString === 'nl-nl' ? dynamicPages.nl.book.author :
                                    localeString === 'sv-se' ? dynamicPages.sv.book.author :
                                    dynamicPages.en.book.author
                                }
                            </span>
                            {author}
                        </p>
                        <p className={styles.bookReleaseDate}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.book.releaseDate :
                                    localeString === 'ro-ro' ? dynamicPages.ro.book.releaseDate :
                                    localeString === 'nl-nl' ? dynamicPages.nl.book.releaseDate :
                                    localeString === 'sv-se' ? dynamicPages.sv.book.releaseDate :
                                    dynamicPages.en.book.releaseDate
                                }
                            </span>
                            {releaseDate}
                        </p>
                        <p className={styles.bookPages}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.book.pages :
                                    localeString === 'ro-ro' ? dynamicPages.ro.book.pages :
                                    localeString === 'nl-nl' ? dynamicPages.nl.book.pages :
                                    localeString === 'sv-se' ? dynamicPages.sv.book.pages :
                                    dynamicPages.en.book.pages
                                }
                            </span>
                            {pages}
                        </p>
                        <p className={styles.bookPhase}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.book.phase :
                                    localeString === 'ro-ro' ? dynamicPages.ro.book.phase :
                                    localeString === 'nl-nl' ? dynamicPages.nl.book.phase :
                                    localeString === 'sv-se' ? dynamicPages.sv.book.phase :
                                    dynamicPages.en.book.phase
                                }
                            </span>
                            {phase}
                        </p>
                    </div>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.book.synopsis :
                        localeString === 'ro-ro' ? dynamicPages.ro.book.synopsis :
                        localeString === 'nl-nl' ? dynamicPages.nl.book.synopsis :
                        localeString === 'sv-se' ? dynamicPages.sv.book.synopsis :
                        dynamicPages.en.book.synopsis
                    }
                </h2>
                <div className={styles.section}>
                    <p className={styles.bookSynopsis}>
                        {synopsis}
                    </p>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.book.premise :
                        localeString === 'ro-ro' ? dynamicPages.ro.book.premise :
                        localeString === 'nl-nl' ? dynamicPages.nl.book.premise :
                        localeString === 'sv-se' ? dynamicPages.sv.book.premise :
                        dynamicPages.en.book.premise
                    }
                </h2>
                <div className={styles.section}>
                    <p className={styles.bookPremise}>
                        {premise}
                    </p>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.book.plot :
                        localeString === 'ro-ro' ? dynamicPages.ro.book.plot :
                        localeString === 'nl-nl' ? dynamicPages.nl.book.plot :
                        localeString === 'sv-se' ? dynamicPages.sv.book.plot :
                        dynamicPages.en.book.plot
                    }
                </h2>
                <div className={styles.section}>
                    <p className={styles.bookPlot}>
                        {plot}
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
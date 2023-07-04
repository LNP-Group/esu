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
            cover = purpleBolt.en.cover
            title = purpleBolt.en.title
            author = purpleBolt.en.author
            releaseDate = purpleBolt.en.releaseDate
            pages = purpleBolt.en.pageNumber
            phase = purpleBolt.en.phase
            synopsis = purpleBolt.en.synopsis
            premise = purpleBolt.en.premise
            plot = purpleBolt.en.plot
        break;
        case 'thor':
            cover = thor.en.cover
            title = thor.en.title
            author = thor.en.author
            releaseDate = thor.en.releaseDate
            pages = thor.en.pageNumber
            phase = thor.en.phase
            synopsis = thor.en.synopsis
            premise = thor.en.premise
            plot = thor.en.plot
        break;
        case 'madame-wilhelmina':
            cover = madameWilhelmina.en.cover
            title = madameWilhelmina.en.title
            author = madameWilhelmina.en.author
            releaseDate = madameWilhelmina.en.releaseDate
            pages = madameWilhelmina.en.pageNumber
            phase = madameWilhelmina.en.phase
            synopsis = madameWilhelmina.en.synopsis
            premise = madameWilhelmina.en.premise
            plot = madameWilhelmina.en.plot
        break;
        case 'doctor-hex':
            cover = doctorHex.en.cover
            title = doctorHex.en.title
            author = doctorHex.en.author
            releaseDate = doctorHex.en.releaseDate
            pages = doctorHex.en.pageNumber
            phase = doctorHex.en.phase
            synopsis = doctorHex.en.synopsis
            premise = doctorHex.en.premise
            plot = doctorHex.en.plot
        break;
        case 'the-ghost':
            cover = theGhost.en.cover
            title = theGhost.en.title
            author = theGhost.en.author
            releaseDate = theGhost.en.releaseDate
            pages = theGhost.en.pageNumber
            phase = theGhost.en.phase
            synopsis = theGhost.en.synopsis
            premise = theGhost.en.premise
            plot = theGhost.en.plot
        break;
        case 'the-ethereals':
            cover = theEthereals.en.cover
            title = theEthereals.en.title
            author = theEthereals.en.author
            releaseDate = theEthereals.en.releaseDate
            pages = theEthereals.en.pageNumber
            phase = theEthereals.en.phase
            synopsis = theEthereals.en.synopsis
            premise = theEthereals.en.premise
            plot = theEthereals.en.plot
        break;
        case 'dracula':
            cover = dracula.en.cover
            title = dracula.en.title
            author = dracula.en.author
            releaseDate = dracula.en.releaseDate
            pages = dracula.en.pageNumber
            phase = dracula.en.phase
            synopsis = dracula.en.synopsis
            premise = dracula.en.premise
            plot = dracula.en.plot
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
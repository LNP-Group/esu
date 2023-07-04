import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import styles from '@/styles/Dynamic.module.css'
import { useRouter } from 'next/router'
import { dynamicPages } from '@/i18n/pages'
import { purpleBolt, thor, madameWilhelmina, doctorHex, theGhost, theEthereals, dracula } from '@/data/books'
import dynamic from 'next/dynamic'

function Book({ Component, pageProps }) {

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
            cover = purpleBolt.nl.cover
            title = purpleBolt.nl.title
            author = purpleBolt.nl.author
            releaseDate = purpleBolt.nl.releaseDate
            pages = purpleBolt.nl.pageNumber
            phase = purpleBolt.nl.phase
            synopsis = purpleBolt.nl.synopsis
            premise = purpleBolt.nl.premise
            plot = purpleBolt.nl.plot
        break;
        case 'thor':
            cover = thor.nl.cover
            title = thor.nl.title
            author = thor.nl.author
            releaseDate = thor.nl.releaseDate
            pages = thor.nl.pageNumber
            phase = thor.nl.phase
            synopsis = thor.nl.synopsis
            premise = thor.nl.premise
            plot = thor.nl.plot
        break;
        case 'madame-wilhelmina':
            cover = madameWilhelmina.nl.cover
            title = madameWilhelmina.nl.title
            author = madameWilhelmina.nl.author
            releaseDate = madameWilhelmina.nl.releaseDate
            pages = madameWilhelmina.nl.pageNumber
            phase = madameWilhelmina.nl.phase
            synopsis = madameWilhelmina.nl.synopsis
            premise = madameWilhelmina.nl.premise
            plot = madameWilhelmina.nl.plot
        break;
        case 'doctor-hex':
            cover = doctorHex.nl.cover
            title = doctorHex.nl.title
            author = doctorHex.nl.author
            releaseDate = doctorHex.nl.releaseDate
            pages = doctorHex.nl.pageNumber
            phase = doctorHex.nl.phase
            synopsis = doctorHex.nl.synopsis
            premise = doctorHex.nl.premise
            plot = doctorHex.nl.plot
        break;
        case 'the-ghost':
            cover = theGhost.nl.cover
            title = theGhost.nl.title
            author = theGhost.nl.author
            releaseDate = theGhost.nl.releaseDate
            pages = theGhost.nl.pageNumber
            phase = theGhost.nl.phase
            synopsis = theGhost.nl.synopsis
            premise = theGhost.nl.premise
            plot = theGhost.nl.plot
        break;
        case 'the-ethereals':
            cover = theEthereals.nl.cover
            title = theEthereals.nl.title
            author = theEthereals.nl.author
            releaseDate = theEthereals.nl.releaseDate
            pages = theEthereals.nl.pageNumber
            phase = theEthereals.nl.phase
            synopsis = theEthereals.nl.synopsis
            premise = theEthereals.nl.premise
            plot = theEthereals.nl.plot
        break;
        case 'dracula':
            cover = dracula.nl.cover
            title = dracula.nl.title
            author = dracula.nl.author
            releaseDate = dracula.nl.releaseDate
            pages = dracula.nl.pageNumber
            phase = dracula.nl.phase
            synopsis = dracula.nl.synopsis
            premise = dracula.nl.premise
            plot = dracula.nl.plot
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

export default dynamic(() => Promise.resolve(Book), {
    ssr: false
})
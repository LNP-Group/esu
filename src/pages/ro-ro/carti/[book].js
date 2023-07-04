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
        case 'fulgerul-violet':
            cover = purpleBolt.ro.cover
            title = purpleBolt.ro.title
            author = purpleBolt.ro.author
            releaseDate = purpleBolt.ro.releaseDate
            pages = purpleBolt.ro.pageNumber
            phase = purpleBolt.ro.phase
            synopsis = purpleBolt.ro.synopsis
            premise = purpleBolt.ro.premise
            plot = purpleBolt.ro.plot
        break;
        case 'thor':
            cover = thor.ro.cover
            title = thor.ro.title
            author = thor.ro.author
            releaseDate = thor.ro.releaseDate
            pages = thor.ro.pageNumber
            phase = thor.ro.phase
            synopsis = thor.ro.synopsis
            premise = thor.ro.premise
            plot = thor.ro.plot
        break;
        case 'madame-wilhelmina':
            cover = madameWilhelmina.ro.cover
            title = madameWilhelmina.ro.title
            author = madameWilhelmina.ro.author
            releaseDate = madameWilhelmina.ro.releaseDate
            pages = madameWilhelmina.ro.pageNumber
            phase = madameWilhelmina.ro.phase
            synopsis = madameWilhelmina.ro.synopsis
            premise = madameWilhelmina.ro.premise
            plot = madameWilhelmina.ro.plot
        break;
        case 'doctor-hex':
            cover = doctorHex.ro.cover
            title = doctorHex.ro.title
            author = doctorHex.ro.author
            releaseDate = doctorHex.ro.releaseDate
            pages = doctorHex.ro.pageNumber
            phase = doctorHex.ro.phase
            synopsis = doctorHex.ro.synopsis
            premise = doctorHex.ro.premise
            plot = doctorHex.ro.plot
        break;
        case 'fantoma':
            cover = theGhost.ro.cover
            title = theGhost.ro.title
            author = theGhost.ro.author
            releaseDate = theGhost.ro.releaseDate
            pages = theGhost.ro.pageNumber
            phase = theGhost.ro.phase
            synopsis = theGhost.ro.synopsis
            premise = theGhost.ro.premise
            plot = theGhost.ro.plot
        break;
        case 'etericii':
            cover = theEthereals.ro.cover
            title = theEthereals.ro.title
            author = theEthereals.ro.author
            releaseDate = theEthereals.ro.releaseDate
            pages = theEthereals.ro.pageNumber
            phase = theEthereals.ro.phase
            synopsis = theEthereals.ro.synopsis
            premise = theEthereals.ro.premise
            plot = theEthereals.ro.plot
        break;
        case 'dracula':
            cover = dracula.ro.cover
            title = dracula.ro.title
            author = dracula.ro.author
            releaseDate = dracula.ro.releaseDate
            pages = dracula.ro.pageNumber
            phase = dracula.ro.phase
            synopsis = dracula.ro.synopsis
            premise = dracula.ro.premise
            plot = dracula.ro.plot
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
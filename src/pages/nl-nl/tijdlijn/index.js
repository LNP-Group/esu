import Head from 'next/head'
import styles from '@/styles/Timeline.module.css'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import { pageMetadata } from '@/i18n/pageMetadata'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import { timeline } from '@/i18n/pages'
import { dawnOfTime, theBeginningOfTheUniverse, formationOfLife, riseOfHumanity } from '@/data/eras'

export default function Timeline() {

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
                        localeString === 'en-us' ? `${pageMetadata.en.timeline.title} | ${websiteName}` :
                        localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.title} | ${websiteName}` :
                        localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.title} | ${websiteName}` :
                        localeString === 'sv-se' ? `${pageMetadata.sv.timeline.title} | ${websiteName}` :
                        `${pageMetadata.en.timeline.title} | ${websiteName}`
                    }
                </title>
                <meta name="description" content={
                    localeString === 'en-us' ? pageMetadata.en.timeline.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.timeline.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.timeline.description :
                    localeString === 'sv-se' ? pageMetadata.sv.timeline.description :
                    pageMetadata.en.timeline.description
                } />
                <meta name="og:title" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.title} | ${websiteName}` :
                    `${pageMetadata.en.timeline.title} | ${websiteName}`
                } />
                <meta name="og:description" content={
                    localeString === 'en-us' ? pageMetadata.en.timeline.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.timeline.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.timeline.description :
                    localeString === 'sv-se' ? pageMetadata.sv.timeline.description :
                    pageMetadata.en.timeline.description
                } />
                <meta name="og:url" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.canonicalUrl}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.canonicalUrl}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.canonicalUrl}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.canonicalUrl}` :
                    `${pageMetadata.en.timeline.canonicalUrl}`
                } />
                <meta name="og:image" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.image.url}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.image.url}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.image.url}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.image.url}` :
                    `${pageMetadata.en.timeline.image.url}`
                } />
                <meta name="og:image:alt" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.image.alt}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.image.alt}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.image.alt}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.image.alt}` :
                    `${pageMetadata.en.timeline.image.alt}`
                } />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="627" />
                <meta name="og:type" content="website" />
                <meta name="og:locale" content={
                    localeString === 'en-us' ? 'en_US' :
                    localeString === 'ro-ro' ? 'ro_RO' :
                    localeString === 'nl-nl' ? 'nl_NL' :
                    localeString === 'sv-se' ? 'sv_SE' :
                    'en_US'
                } />
                <meta name="og:site_name" content={websiteName} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ESUFranchise" />
                <meta name="twitter:creator" content="@ESUFranchise" />
                <meta name="twitter:title" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.title} | ${websiteName}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.title} | ${websiteName}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.title} | ${websiteName}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.title} | ${websiteName}` :
                    `${pageMetadata.en.timeline.title} | ${websiteName}`
                } />
                <meta name="twitter:description" content={
                    localeString === 'en-us' ? pageMetadata.en.timeline.description :
                    localeString === 'ro-ro' ? pageMetadata.ro.timeline.description :
                    localeString === 'nl-nl' ? pageMetadata.nl.timeline.description :
                    localeString === 'sv-se' ? pageMetadata.sv.timeline.description :
                    pageMetadata.en.timeline.description
                } />
                <meta name="twitter:image" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.image.url}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.image.url}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.image.url}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.image.url}` :
                    `${pageMetadata.en.timeline.image.url}`
                } />
                <meta name="twitter:image:alt" content={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.image.alt}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.image.alt}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.image.alt}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.image.alt}` :
                    `${pageMetadata.en.timeline.image.alt}`
                } />
                <link rel="canonical" href={
                    localeString === 'en-us' ? `${pageMetadata.en.timeline.canonicalUrl}` :
                    localeString === 'ro-ro' ? `${pageMetadata.ro.timeline.canonicalUrl}` :
                    localeString === 'nl-nl' ? `${pageMetadata.nl.timeline.canonicalUrl}` :
                    localeString === 'sv-se' ? `${pageMetadata.sv.timeline.canonicalUrl}` :
                    `${pageMetadata.en.timeline.canonicalUrl}`
                } />
                {
                    localeString === 'en-us' ? pageMetadata.en.timeline.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'ro-ro' ? pageMetadata.ro.timeline.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'nl-nl' ? pageMetadata.nl.timeline.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    localeString === 'sv-se' ? pageMetadata.sv.timeline.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    )) :
                    pageMetadata.en.timeline.alternateUrls.map((alternateUrl, index) => (
                        <link rel="alternate" href={alternateUrl.url} hrefLang={alternateUrl.lang} key={index} />
                    ))
                }
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.timelineContent}>
                    <div className={styles.timelineHeadline}>
                        <h1 className={styles.title}>
                            {
                                localeString === 'en-us' ? timeline.en.title :
                                localeString === 'ro-ro' ? timeline.ro.title :
                                localeString === 'nl-nl' ? timeline.nl.title :
                                localeString === 'sv-se' ? timeline.sv.title :
                                timeline.en.title
                            }
                        </h1>
                        <h2 className={styles.subtitle}>
                            {
                                localeString === 'en-us' ? timeline.en.subtitle :
                                localeString === 'ro-ro' ? timeline.ro.subtitle :
                                localeString === 'nl-nl' ? timeline.nl.subtitle :
                                localeString === 'sv-se' ? timeline.sv.subtitle :
                                timeline.en.subtitle
                            }
                        </h2>
                    </div>

                    <div className={styles.timelineEras}>
                        <div className={styles.timelineRow}>
                            <button className={`${styles.era} ${styles.eraOne}`} onClick={() => { document.getElementById('era-one').showModal() }}>
                                <p>
                                    {
                                        localeString === 'en-us' ? dawnOfTime.en.title :
                                        localeString === 'ro-ro' ? dawnOfTime.ro.title :
                                        localeString === 'nl-nl' ? dawnOfTime.nl.title :
                                        localeString === 'sv-se' ? dawnOfTime.sv.title :
                                        dawnOfTime.en.title
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? dawnOfTime.en.period :
                                        localeString === 'ro-ro' ? dawnOfTime.ro.period :
                                        localeString === 'nl-nl' ? dawnOfTime.nl.period :
                                        localeString === 'sv-se' ? dawnOfTime.sv.period :
                                        dawnOfTime.en.period
                                    }
                                </small>
                            </button>
                        </div>
                        <div className={styles.timelineRow}>
                            <button className={`${styles.era} ${styles.eraTwo}`} onClick={() => { document.getElementById('era-two').showModal() }}>
                                <p>
                                    {
                                        localeString === 'en-us' ? theBeginningOfTheUniverse.en.title :
                                        localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.title :
                                        localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.title :
                                        localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.title :
                                        theBeginningOfTheUniverse.en.title
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? theBeginningOfTheUniverse.en.period :
                                        localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.period :
                                        localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.period :
                                        localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.period :
                                        theBeginningOfTheUniverse.en.period
                                    }
                                </small>
                            </button>
                        </div>
                        <div className={styles.timelineRow}>
                            <button className={`${styles.era} ${styles.eraThree}`} onClick={() => { document.getElementById('era-three').showModal() }}>
                                <p>
                                    {
                                        localeString === 'en-us' ? formationOfLife.en.title :
                                        localeString === 'ro-ro' ? formationOfLife.ro.title :
                                        localeString === 'nl-nl' ? formationOfLife.nl.title :
                                        localeString === 'sv-se' ? formationOfLife.sv.title :
                                        formationOfLife.en.title
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? formationOfLife.en.period :
                                        localeString === 'ro-ro' ? formationOfLife.ro.period :
                                        localeString === 'nl-nl' ? formationOfLife.nl.period :
                                        localeString === 'sv-se' ? formationOfLife.sv.period :
                                        formationOfLife.en.period
                                    }
                                </small>
                            </button>
                        </div>
                        <div className={styles.timelineRow}>
                            <button className={`${styles.era} ${styles.eraFour}`} onClick={() => { document.getElementById('era-four').showModal() }}>
                                <p>
                                    {
                                        localeString === 'en-us' ? riseOfHumanity.en.title :
                                        localeString === 'ro-ro' ? riseOfHumanity.ro.title :
                                        localeString === 'nl-nl' ? riseOfHumanity.nl.title :
                                        localeString === 'sv-se' ? riseOfHumanity.sv.title :
                                        riseOfHumanity.en.title
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? riseOfHumanity.en.period :
                                        localeString === 'ro-ro' ? riseOfHumanity.ro.period :
                                        localeString === 'nl-nl' ? riseOfHumanity.nl.period :
                                        localeString === 'sv-se' ? riseOfHumanity.sv.period :
                                        riseOfHumanity.en.period
                                    }
                                </small>
                            </button>
                        </div>
                        <div className={styles.timelineRow}>
                            <button disabled className={`${styles.era} ${styles.eraFive} ${styles.disabled}`}>
                                <p>
                                    {
                                        localeString === 'en-us' ? timeline.en.toBeRevealed :
                                        localeString === 'ro-ro' ? timeline.ro.toBeRevealed :
                                        localeString === 'nl-nl' ? timeline.nl.toBeRevealed :
                                        localeString === 'sv-se' ? timeline.sv.toBeRevealed :
                                        timeline.en.toBeRevealed
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? timeline.en.tba :
                                        localeString === 'ro-ro' ? timeline.ro.tba :
                                        localeString === 'nl-nl' ? timeline.nl.tba :
                                        localeString === 'sv-se' ? timeline.sv.tba :
                                        timeline.en.tba
                                    } - {
                                        localeString === 'en-us' ? timeline.en.tba :
                                        localeString === 'ro-ro' ? timeline.ro.tba :
                                        localeString === 'nl-nl' ? timeline.nl.tba :
                                        localeString === 'sv-se' ? timeline.sv.tba :
                                        timeline.en.tba
                                    }
                                </small>
                            </button>
                        </div>
                        <div className={styles.timelineRow}>
                            <button disabled className={`${styles.era} ${styles.eraSix} ${styles.disabled}`}>
                            <p>
                                    {
                                        localeString === 'en-us' ? timeline.en.toBeRevealed :
                                        localeString === 'ro-ro' ? timeline.ro.toBeRevealed :
                                        localeString === 'nl-nl' ? timeline.nl.toBeRevealed :
                                        localeString === 'sv-se' ? timeline.sv.toBeRevealed :
                                        timeline.en.toBeRevealed
                                    }
                                </p>
                                <small>
                                    {
                                        localeString === 'en-us' ? timeline.en.tba :
                                        localeString === 'ro-ro' ? timeline.ro.tba :
                                        localeString === 'nl-nl' ? timeline.nl.tba :
                                        localeString === 'sv-se' ? timeline.sv.tba :
                                        timeline.en.tba
                                    } - {
                                        localeString === 'en-us' ? timeline.en.tba :
                                        localeString === 'ro-ro' ? timeline.ro.tba :
                                        localeString === 'nl-nl' ? timeline.nl.tba :
                                        localeString === 'sv-se' ? timeline.sv.tba :
                                        timeline.en.tba
                                    }
                                </small>
                            </button>
                        </div>
                    </div>
                </div>
                
                <dialog className={styles.dialog} id="era-one">
                    <div className={styles.eraHeader}>
                        <h2>
                            {
                                localeString === 'en-us' ? dawnOfTime.en.title :
                                localeString === 'ro-ro' ? dawnOfTime.ro.title :
                                localeString === 'nl-nl' ? dawnOfTime.nl.title :
                                localeString === 'sv-se' ? dawnOfTime.sv.title :
                                dawnOfTime.en.title
                            }
                        </h2>
                        <p className="description">
                            {
                                localeString === 'en-us' ? dawnOfTime.en.subtitle :
                                localeString === 'ro-ro' ? dawnOfTime.ro.subtitle :
                                localeString === 'nl-nl' ? dawnOfTime.nl.subtitle :
                                localeString === 'sv-se' ? dawnOfTime.sv.subtitle :
                                dawnOfTime.en.subtitle
                            }
                        </p>
                        <small>
                            (
                                {
                                    localeString === 'en-us' ? dawnOfTime.en.period :
                                    localeString === 'ro-ro' ? dawnOfTime.ro.period :
                                    localeString === 'nl-nl' ? dawnOfTime.nl.period :
                                    localeString === 'sv-se' ? dawnOfTime.sv.period :
                                    dawnOfTime.en.period
                                }
                            )
                        </small>
                    </div>
                    <div className={styles.eraEvents}>
                        <h3>
                            {
                                localeString === 'en-us' ? timeline.en.events :
                                localeString === 'ro-ro' ? timeline.ro.events :
                                localeString === 'nl-nl' ? timeline.nl.events :
                                localeString === 'sv-se' ? timeline.sv.events :
                                timeline.en.events
                            }
                        </h3>
                        <div className={styles.eraEventsContent}>
                            {
                                localeString === 'en-us' ? dawnOfTime.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'ro-ro' ? dawnOfTime.ro.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'nl-nl' ? dawnOfTime.nl.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'sv-se' ? dawnOfTime.sv.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                dawnOfTime.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <button className={styles.dialogButton} onClick={() => { document.getElementById('era-one').close() }}><span className={styles.icon}>X</span></button>
                </dialog>

                <dialog className={styles.dialog} id="era-two">
                    <div className={styles.eraHeader}>
                        <h2>
                            {
                                localeString === 'en-us' ? theBeginningOfTheUniverse.en.title :
                                localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.title :
                                localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.title :
                                localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.title :
                                theBeginningOfTheUniverse.en.title
                            }
                        </h2>
                        <p className="description">
                            {
                                localeString === 'en-us' ? theBeginningOfTheUniverse.en.subtitle :
                                localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.subtitle :
                                localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.subtitle :
                                localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.subtitle :
                                theBeginningOfTheUniverse.en.subtitle
                            }
                        </p>
                        <small>
                            (
                                {
                                    localeString === 'en-us' ? theBeginningOfTheUniverse.en.period :
                                    localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.period :
                                    localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.period :
                                    localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.period :
                                    theBeginningOfTheUniverse.en.period
                                }
                            )
                        </small>
                    </div>
                    <div className={styles.eraEvents}>
                        <h3>
                            {
                                localeString === 'en-us' ? timeline.en.events :
                                localeString === 'ro-ro' ? timeline.ro.events :
                                localeString === 'nl-nl' ? timeline.nl.events :
                                localeString === 'sv-se' ? timeline.sv.events :
                                timeline.en.events
                            }
                        </h3>
                        <div className={styles.eraEventsContent}>
                            {
                                localeString === 'en-us' ? theBeginningOfTheUniverse.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'ro-ro' ? theBeginningOfTheUniverse.ro.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'nl-nl' ? theBeginningOfTheUniverse.nl.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'sv-se' ? theBeginningOfTheUniverse.sv.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                theBeginningOfTheUniverse.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <button className={styles.dialogButton} onClick={() => { document.getElementById('era-two').close() }}><span className={styles.icon}>X</span></button>
                </dialog>

                <dialog className={styles.dialog} id="era-three">
                    <div className={styles.eraHeader}>
                        <h2>
                            {
                                localeString === 'en-us' ? formationOfLife.en.title :
                                localeString === 'ro-ro' ? formationOfLife.ro.title :
                                localeString === 'nl-nl' ? formationOfLife.nl.title :
                                localeString === 'sv-se' ? formationOfLife.sv.title :
                                formationOfLife.en.title
                            }
                        </h2>
                        <p className="description">
                            {
                                localeString === 'en-us' ? formationOfLife.en.subtitle :
                                localeString === 'ro-ro' ? formationOfLife.ro.subtitle :
                                localeString === 'nl-nl' ? formationOfLife.nl.subtitle :
                                localeString === 'sv-se' ? formationOfLife.sv.subtitle :
                                formationOfLife.en.subtitle
                            }
                        </p>
                        <small>
                            (
                                {
                                    localeString === 'en-us' ? formationOfLife.en.period :
                                    localeString === 'ro-ro' ? formationOfLife.ro.period :
                                    localeString === 'nl-nl' ? formationOfLife.nl.period :
                                    localeString === 'sv-se' ? formationOfLife.sv.period :
                                    formationOfLife.en.period
                                }
                            )
                        </small>
                    </div>
                    <div className={styles.eraEvents}>
                        <h3>
                            {
                                localeString === 'en-us' ? timeline.en.events :
                                localeString === 'ro-ro' ? timeline.ro.events :
                                localeString === 'nl-nl' ? timeline.nl.events :
                                localeString === 'sv-se' ? timeline.sv.events :
                                timeline.en.events
                            }
                        </h3>
                        <div className={styles.eraEventsContent}>
                            {
                                localeString === 'en-us' ? formationOfLife.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'ro-ro' ? formationOfLife.ro.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'nl-nl' ? formationOfLife.nl.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'sv-se' ? formationOfLife.sv.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                formationOfLife.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <button className={styles.dialogButton} onClick={() => { document.getElementById('era-three').close() }}><span className={styles.icon}>X</span></button>
                </dialog>

                <dialog className={styles.dialog} id="era-four">
                    <div className={styles.eraHeader}>
                        <h2>
                            {
                                localeString === 'en-us' ? riseOfHumanity.en.title :
                                localeString === 'ro-ro' ? riseOfHumanity.ro.title :
                                localeString === 'nl-nl' ? riseOfHumanity.nl.title :
                                localeString === 'sv-se' ? riseOfHumanity.sv.title :
                                riseOfHumanity.en.title
                            }
                        </h2>
                        <p className="description">
                            {
                                localeString === 'en-us' ? riseOfHumanity.en.subtitle :
                                localeString === 'ro-ro' ? riseOfHumanity.ro.subtitle :
                                localeString === 'nl-nl' ? riseOfHumanity.nl.subtitle :
                                localeString === 'sv-se' ? riseOfHumanity.sv.subtitle :
                                riseOfHumanity.en.subtitle
                            }
                        </p>
                        <small>
                            (
                                {
                                    localeString === 'en-us' ? riseOfHumanity.en.period :
                                    localeString === 'ro-ro' ? riseOfHumanity.ro.period :
                                    localeString === 'nl-nl' ? riseOfHumanity.nl.period :
                                    localeString === 'sv-se' ? riseOfHumanity.sv.period :
                                    riseOfHumanity.en.period
                                }
                            )
                        </small>
                    </div>
                    <div className={styles.eraEvents}>
                        <h3>
                            {
                                localeString === 'en-us' ? timeline.en.events :
                                localeString === 'ro-ro' ? timeline.ro.events :
                                localeString === 'nl-nl' ? timeline.nl.events :
                                localeString === 'sv-se' ? timeline.sv.events :
                                timeline.en.events
                            }
                        </h3>
                        <div className={styles.eraEventsContent}>
                            {
                                localeString === 'en-us' ? riseOfHumanity.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'ro-ro' ? riseOfHumanity.ro.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'nl-nl' ? riseOfHumanity.nl.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                localeString === 'sv-se' ? riseOfHumanity.sv.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                )) :
                                riseOfHumanity.en.events.map((event, index) => (
                                    <p key={index}>
                                        {event}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <button className={styles.dialogButton} onClick={() => { document.getElementById('era-four').close() }}>
                        <span className={styles.icon}>
                            X
                        </span>
                    </button>
                </dialog>
            </main>
            <Footer />
        </>
    )

}
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import styles from '@/styles/Dynamic.module.css'
import { useRouter } from 'next/router'
import { dynamicPages } from '@/i18n/pages'
import { purpleBolt, thor, madameWilhelmina, doctorHex, theGhost, theEthereals } from '@/data/characters'
import dynamic from 'next/dynamic'

function Character() {

    const router = useRouter()

    const character = router.query.character


    let image = null
    let name = null
    let alias = null
    let debut = null
    let intro = null
    let allies = null
    let enemies = null
    let powers = null
    let appearances = null
    let trivia = null
    let color = null

    const pathname = router.pathname

    let localeString

    const locales = [
        'ro-us',
        'ro-ro',
        'nl-nl',
        'sv-se'
    ]

    locales.forEach(locale => {
        if (pathname.includes(locale)) {
            return localeString = locale
        }
    })

    switch (character) {
        case 'fulgerul-violet':
            image = purpleBolt.ro.image
            name = purpleBolt.ro.name
            alias = purpleBolt.ro.alias
            debut = purpleBolt.ro.debut
            intro = purpleBolt.ro.intro
            allies = purpleBolt.ro.allies
            enemies = purpleBolt.ro.enemies
            powers = purpleBolt.ro.powers
            appearances = purpleBolt.ro.appearances
            trivia = purpleBolt.ro.trivia
            color = '#7800FF'
        break;
        case 'thor':
            image = thor.ro.image
            name = thor.ro.name
            alias = thor.ro.alias
            debut = thor.ro.debut
            intro = thor.ro.intro
            allies = thor.ro.allies
            enemies = thor.ro.enemies
            powers = thor.ro.powers
            appearances = thor.ro.appearances
            trivia = thor.ro.trivia
            color = '#2100F4'
        break;
        case 'madame-wilhelmina':
            image = madameWilhelmina.ro.image
            name = madameWilhelmina.ro.name
            alias = madameWilhelmina.ro.alias
            debut = madameWilhelmina.ro.debut
            intro = madameWilhelmina.ro.intro
            allies = madameWilhelmina.ro.allies
            enemies = madameWilhelmina.ro.enemies
            powers = madameWilhelmina.ro.powers
            appearances = madameWilhelmina.ro.appearances
            trivia = madameWilhelmina.ro.trivia
            color = '#6A00A5'
        break;
        case 'doctor-hex':
            image = doctorHex.ro.image
            name = doctorHex.ro.name
            alias = doctorHex.ro.alias
            debut = doctorHex.ro.debut
            intro = doctorHex.ro.intro
            allies = doctorHex.ro.allies
            enemies = doctorHex.ro.enemies
            powers = doctorHex.ro.powers
            appearances = doctorHex.ro.appearances
            trivia = doctorHex.ro.trivia
            color = '#970002'
        break;
        case 'fantoma':
            image = theGhost.ro.image
            name = theGhost.ro.name
            alias = theGhost.ro.alias
            debut = theGhost.ro.debut
            intro = theGhost.ro.intro
            allies = theGhost.ro.allies
            enemies = theGhost.ro.enemies
            powers = theGhost.ro.powers
            appearances = theGhost.ro.appearances
            trivia = theGhost.ro.trivia
            color = '#00B200'
        break;
    }

    return(
        <>
            <Head>
                <title>
                    {`${name} | ${websiteName}`}
                </title>
                <meta name="description" content={intro} />
                <meta property="og:name" content={`${name} | ${websiteName}`} />
                <meta property="og:description" content={intro} />
                <meta property="og:image" content={image} />
                <meta property="og:image:alt" content={name} />
                <meta property="og:url" content={`https://www.esufranchise.com/${localeString}/books/${character}`} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={localeString} />
                <meta property="og:site_name" content={websiteName} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:name" content={`${name} | ${websiteName}`} />
                <meta name="twitter:description" content={intro} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:image:alt" content={name} />
                <meta name="twitter:site" content="@esufranchise" />
                <meta name="twitter:creator" content="@esufranchise" />
                <link rel="canonical" href={`https://www.esufranchise.com/${localeString}/books/${character}`} />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.infoContainer}>
                    <div className={styles.coverContainer}>
                        <img src={image} alt={name} className={styles.characterImage} />
                    </div>
                    <div className={styles.info}>
                        <p className={styles.title}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.character.name :
                                    localeString === 'ro-ro' ? dynamicPages.ro.character.name :
                                    localeString === 'nl-nl' ? dynamicPages.nl.character.name :
                                    localeString === 'sv-se' ? dynamicPages.sv.character.name :
                                    dynamicPages.en.character.name
                                }
                            </span>
                            {name}
                        </p>
                        <p className={styles.author}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.character.alias :
                                    localeString === 'ro-ro' ? dynamicPages.ro.character.alias :
                                    localeString === 'nl-nl' ? dynamicPages.nl.character.alias :
                                    localeString === 'sv-se' ? dynamicPages.sv.character.alias :
                                    dynamicPages.en.character.alias
                                }
                            </span>
                            {alias}
                        </p>
                        <p className={styles.releaseDate}>
                            <span className={styles.bold}>
                                {
                                    localeString === 'en-us' ? dynamicPages.en.character.debut :
                                    localeString === 'ro-ro' ? dynamicPages.ro.character.debut :
                                    localeString === 'nl-nl' ? dynamicPages.nl.character.debut :
                                    localeString === 'sv-se' ? dynamicPages.sv.character.debut :
                                    dynamicPages.en.character.debut
                                }
                            </span>
                            {debut}
                        </p>
                    </div>
                </div>
                <div className={styles.characterIntro} style={{['--character-glow']: `${color}`}}>
                    <p className={styles.intro}>
                        {intro}
                    </p>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.character.allies :
                        localeString === 'ro-ro' ? dynamicPages.ro.character.allies :
                        localeString === 'nl-nl' ? dynamicPages.nl.character.allies :
                        localeString === 'sv-se' ? dynamicPages.sv.character.allies :
                        dynamicPages.en.character.allies
                    }
                </h2>
                <div className={styles.section}>
                    <ul className={styles.characterList}>
                        {
                            allies?.map((ally, index) => {
                                return(
                                    <li key={index} className={styles.characterListItem}>
                                        {ally}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.character.enemies :
                        localeString === 'ro-ro' ? dynamicPages.ro.character.enemies :
                        localeString === 'nl-nl' ? dynamicPages.nl.character.enemies :
                        localeString === 'sv-se' ? dynamicPages.sv.character.enemies :
                        dynamicPages.en.character.enemies
                    }
                </h2>
                <div className={styles.section}>
                    <ul className={styles.characterList}>
                        {
                            enemies?.map((enemy, index) => {
                                return(
                                    <li key={index} className={styles.characterListItem}>
                                        {enemy}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.character.powers :
                        localeString === 'ro-ro' ? dynamicPages.ro.character.powers :
                        localeString === 'nl-nl' ? dynamicPages.nl.character.powers :
                        localeString === 'sv-se' ? dynamicPages.sv.character.powers :
                        dynamicPages.en.character.powers
                    }
                </h2>
                <div className={styles.section}>
                    <ul className={styles.characterList}>
                        {
                            powers?.map((power, index) => {
                                return(
                                    <li key={index} className={styles.characterListItem}>
                                        {power}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.character.appearances :
                        localeString === 'ro-ro' ? dynamicPages.ro.character.appearances :
                        localeString === 'nl-nl' ? dynamicPages.nl.character.appearances :
                        localeString === 'sv-se' ? dynamicPages.sv.character.appearances :
                        dynamicPages.en.character.appearances
                    }
                </h2>
                <div className={styles.section}>
                    <ul className={styles.characterList}>
                        {
                            appearances?.map((appearance, index) => {
                                return(
                                    <li key={index} className={styles.characterListItem}>
                                        {appearance}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <h2 className={styles.sectionHeader}>
                    {
                        localeString === 'en-us' ? dynamicPages.en.character.trivia :
                        localeString === 'ro-ro' ? dynamicPages.ro.character.trivia :
                        localeString === 'nl-nl' ? dynamicPages.nl.character.trivia :
                        localeString === 'sv-se' ? dynamicPages.sv.character.trivia :
                        dynamicPages.en.character.trivia
                    }
                </h2>
                <div className={styles.section}>
                    <ul className={styles.characterList}>
                        {
                            trivia?.map((trivia, index) => {
                                return(
                                    <li key={index} className={styles.characterListItem}>
                                        {trivia}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default dynamic(() => Promise.resolve(Character), {
    ssr: false
})
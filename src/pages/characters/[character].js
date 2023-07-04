import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import styles from '@/styles/Dynamic.module.css'
import { useRouter } from 'next/router'
import { dynamicPages } from '@/i18n/pages'
import { purpleBolt, thor, madameWilhelmina, doctorHex, theGhost, theEthereals } from '@/data/characters'

export default function Book() {

    const router = useRouter()

    const character = router.query.character


    let image
    let name
    let alias
    let debut
    let intro
    let allies
    let enemies
    let powers
    let appearances
    let trivia
    let color
    let lightColor

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

    switch (character) {
        case 'purple-bolt':
            image = purpleBolt.en.image
            name = purpleBolt.en.name
            alias = purpleBolt.en.alias
            debut = purpleBolt.en.debut
            intro = purpleBolt.en.intro
            allies = purpleBolt.en.allies
            enemies = purpleBolt.en.enemies
            powers = purpleBolt.en.powers
            appearances = purpleBolt.en.appearances
            trivia = purpleBolt.en.trivia
            color = '#7800FF'
            lightColor = '#B300FF'
        break;
        case 'thor':
            image = thor.en.image
            name = thor.en.name
            alias = thor.en.alias
            debut = thor.en.debut
            intro = thor.en.intro
            allies = thor.en.allies
            enemies = thor.en.enemies
            powers = thor.en.powers
            appearances = thor.en.appearances
            trivia = thor.en.trivia
            color = '#2100F4'
            lightColor = '#4b30ff'
        break;
        case 'madame-wilhelmina':
            image = madameWilhelmina.en.image
            name = madameWilhelmina.en.name
            alias = madameWilhelmina.en.alias
            debut = madameWilhelmina.en.debut
            intro = madameWilhelmina.en.intro
            allies = madameWilhelmina.en.allies
            enemies = madameWilhelmina.en.enemies
            powers = madameWilhelmina.en.powers
            appearances = madameWilhelmina.en.appearances
            trivia = madameWilhelmina.en.trivia
            color = '#6A00A5'
            lightColor = '#9d00ff'
        break;
        case 'doctor-hex':
            image = doctorHex.en.image
            name = doctorHex.en.name
            alias = doctorHex.en.alias
            debut = doctorHex.en.debut
            intro = doctorHex.en.intro
            allies = doctorHex.en.allies
            enemies = doctorHex.en.enemies
            powers = doctorHex.en.powers
            appearances = doctorHex.en.appearances
            trivia = doctorHex.en.trivia
            color = '#970002'
            lightColor = '#ff0000'
        break;
        case 'the-ghost':
            image = theGhost.en.image
            name = theGhost.en.name
            alias = theGhost.en.alias
            debut = theGhost.en.debut
            intro = theGhost.en.intro
            allies = theGhost.en.allies
            enemies = theGhost.en.enemies
            powers = theGhost.en.powers
            appearances = theGhost.en.appearances
            trivia = theGhost.en.trivia
            color = '#00B200'
            lightColor = '#00ff00'
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
                            allies.map((ally, index) => {
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
                            enemies.map((enemy, index) => {
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
                            powers.map((power, index) => {
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
                            appearances.map((appearance, index) => {
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
                            trivia.map((trivia, index) => {
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
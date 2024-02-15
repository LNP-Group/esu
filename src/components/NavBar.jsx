import React from 'react'
import Link from 'next/link'
import styles from '@/styles/NavBar.module.css'
import { useRouter } from 'next/router'
import { pageLinks, pageNames } from '@/i18n/pageMetadata'
import Image from 'next/image'

function NavBar() {

    const router = useRouter()

    const pathname = router.pathname

    let localeString

    React.useEffect(() => {
        const links = document.querySelectorAll('#link')

        links.forEach(link => {
            if (link.getAttribute('href') === pathname) {
                link.classList.add(`${styles.activeLink}`)
            } else {
                link.classList.remove(`${styles.activeLink}`)
            }
        })
    }, [pathname])

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
    <div className={styles.navbar}>
            <button aria-label="Navigation Toggle" role="navigation" className={styles.button} onClick={() => {
                    document.getElementById('menu').classList.toggle(`${styles.active}`)
                }}>
                <div className={styles.hamburger} type="button">
                    <span className={styles.hamburgerSpan}/>
                    <span className={styles.hamburgerSpan}/>
                    <span className={styles.hamburgerSpan}/>
                </div>
            </button>
            <div className={styles.menu} id="menu">
                <ul className={styles.navbarList}>
                    <li className={styles.navbarListItem}>
                        <Link
                            href={
                                localeString === 'en' ? pageLinks.en.home :
                                localeString === 'ro-ro' ? pageLinks.ro.home :
                                localeString === 'nl-nl' ? pageLinks.nl.home :
                                localeString === 'sv-se' ? pageLinks.sv.home :
                                '/'
                            }
                            className={styles.navbarLink}
                            id="home"
                        >
                            <span>
                                {
                                    localeString === 'en' ? pageNames.en.home :
                                    localeString === 'ro-ro' ? pageNames.ro.home :
                                    localeString === 'nl-nl' ? pageNames.nl.home :  
                                    localeString === 'sv-se' ? pageNames.sv.home :
                                    'Home'
                                }
                            </span>
                        </Link>
                    </li>
                    <li className={styles.navbarListItem}>
                        <Link 
                            href={
                                localeString === 'en' ? pageLinks.en.books :
                                localeString === 'ro-ro' ? pageLinks.ro.books :
                                localeString === 'nl-nl' ? pageLinks.nl.books :
                                localeString === 'sv-se' ? pageLinks.sv.books :
                                '/books'
                            }
                            className={styles.navbarLink}
                            id="books"
                        >
                            <span>
                                {
                                    localeString === 'en' ? pageNames.en.books :
                                    localeString === 'ro-ro' ? pageNames.ro.books :
                                    localeString === 'nl-nl' ? pageNames.nl.books :
                                    localeString === 'sv-se' ? pageNames.sv.books :
                                    'Books'
                                }
                            </span>
                        </Link>
                    </li>
                    <li className={styles.navbarListItem}>
                        <Link href={
                            localeString === 'en' ? pageLinks.en.characters :
                            localeString === 'ro-ro' ? pageLinks.ro.characters :
                            localeString === 'nl-nl' ? pageLinks.nl.characters :
                            localeString === 'sv-se' ? pageLinks.sv.characters :
                            '/characters'
                        } className={styles.navbarLink} id="characters">
                            <span>
                                {
                                    localeString === 'en' ? pageNames.en.characters :
                                    localeString === 'ro-ro' ? pageNames.ro.characters :
                                    localeString === 'nl-nl' ? pageNames.nl.characters :
                                    localeString === 'sv-se' ? pageNames.sv.characters :
                                    'Characters'
                                }
                            </span>
                        </Link>
                    </li>
                    <li className={styles.navbarListItem}>
                        <Link href={
                            localeString === 'en' ? pageLinks.en.timeline :
                            localeString === 'ro-ro' ? pageLinks.ro.timeline :
                            localeString === 'nl-nl' ? pageLinks.nl.timeline :
                            localeString === 'sv-sv' ? pageLinks.sv.timeline :
                            '/timeline'
                        } className={styles.navbarLink} id="timeline">
                            <span>
                               {
                                    localeString === 'en' ? pageNames.en.timeline :
                                    localeString === 'ro-ro' ? pageNames.ro.timeline :
                                    localeString === 'nl-nl' ? pageNames.nl.timeline :
                                    localeString === 'sv-se' ? pageNames.sv.timeline :
                                    'Timeline'
                               }
                            </span>
                        </Link>
                    </li>
                    <li className={styles.navbarListItem}>
                        <Link href={
                            localeString === 'en' ? pageLinks.en.about :
                            localeString === 'ro-ro' ? pageLinks.ro.about :
                            localeString === 'nl-nl' ? pageLinks.nl.about :
                            localeString === 'sv-se' ? pageLinks.sv.about :
                            '/about'
                        } className={styles.navbarLink} id="about">
                            <span>
                                {
                                    localeString === 'en' ? pageNames.en.about :
                                    localeString === 'ro-ro' ? pageNames.ro.about :
                                    localeString === 'nl-nl' ? pageNames.nl.about :
                                    localeString === 'sv-se' ? pageNames.sv.about :
                                    'About'
                                }
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.logo}>
                <Link href={
                    localeString === 'en' ? pageLinks.en.home :
                    localeString === 'ro-ro' ? pageLinks.ro.home :
                    localeString === 'nl-nl' ? pageLinks.nl.home :
                    localeString === 'sv-se' ? pageLinks.sv.home :
                    '/'
                }>
                    <Image
                        width={100}
                        height={100}
                        src="https://cdn.esufranchise.com/website/logo.svg"
                        alt="ESU Logo"
                    />
                </Link>
            </div>
            <div className={styles.lnpBooks}>
                <Link href={"https://books.lnp-group.com"}>
                    <img src={"https://books.lnp-group.com/favicon.svg"} alt="LNP Books" />
                </Link>
            </div>
        </div>
  )
}

export default NavBar
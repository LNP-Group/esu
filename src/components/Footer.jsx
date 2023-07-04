import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Footer.module.css'
import { footer } from '@/i18n/footer'

function Footer() {

    const router = useRouter()

    const pathname = router.pathname

    let localeString
    let langaugePickerDefaultValue

    const currentYear = new Date().getFullYear()

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

    if (localeString === 'en-us') {
        langaugePickerDefaultValue = '/'
    } else if (localeString === 'ro-ro') {
        langaugePickerDefaultValue = '/ro-ro/'
    } else if (localeString === 'nl-nl') {
        langaugePickerDefaultValue = '/nl-nl/'
    } else if (localeString === 'sv-se') {
        langaugePickerDefaultValue = '/sv-se/'
    } else {
        langaugePickerDefaultValue = '/'
    }


  return (
    <div className={styles.footer}>
        <div className="copyright">
        <p>&copy; {currentYear} <a href={
            localeString === 'en-us' ? footer.en.copyrightUrl :
            localeString === 'ro-ro' ? footer.ro.copyrightUrl :
            localeString === 'nl-nl' ? footer.nl.copyrightUrl :
            localeString === 'sv-se' ? footer.sv.copyrightUrl :
            footer.en.copyrightUrl
        } className={`${styles.copyrightLink} ${styles.footerLink}`}>LNP Books</a>. {
            localeString === 'en-us' ? footer.en.rights :
            localeString === 'ro-ro' ? footer.ro.rights :
            localeString === 'nl-nl' ? footer.nl.rights :
            localeString === 'sv-se' ? footer.sv.rights :
            footer.en.rights
        }</p>
        </div>
        <div className="special-links">
            <select name="language" id="language" className={styles.select} defaultValue={langaugePickerDefaultValue} onChange={() => {
                window.location.href = document.getElementById("language").value
            }}>
                <option value="/">English</option>
                <option value="/ro-ro/">Română</option>
                <option value="/nl-nl/">Nederlands</option>
                <option value="/sv-se/">Svenska</option>
            </select>
            <br/>
            <a target="_blank" href="/privacy" className={`${styles.specialLinks} ${styles.footerLink}`}>
                {
                    localeString === 'en-us' ? footer.en.privacy :
                    localeString === 'ro-ro' ? footer.ro.privacy :
                    localeString === 'nl-nl' ? footer.nl.privacy :
                    localeString === 'sv-se' ? footer.sv.privacy :
                    footer.en.privacy
                }
            </a>
            <a target="_blank" href="https://wiki.esufranchise.com" className={`${styles.specialLinks} ${styles.footerLink}`}>
                {
                    localeString === 'en-us' ? footer.en.wiki :
                    localeString === 'ro-ro' ? footer.ro.wiki :
                    localeString === 'nl-nl' ? footer.nl.wiki :
                    localeString === 'sv-se' ? footer.sv.wiki :
                    footer.en.wiki
                }
            </a>
            <a target="_blank" href="https://app.esufranchise.com" className={`${styles.specialLinks} ${styles.footerLink}`}>
                {
                    localeString === 'en-us' ? footer.en.app :
                    localeString === 'ro-ro' ? footer.ro.app :
                    localeString === 'nl-nl' ? footer.nl.app :
                    localeString === 'sv-se' ? footer.sv.app :
                    footer.en.app
                }
            </a>
            <a target="_blank" href="https://newsletter.esufranchise.com" className={`${styles.specialLinks} ${styles.footerLink} ${styles.roLink}`}>
                {
                    localeString === 'en-us' ? footer.en.newsletter :
                    localeString === 'ro-ro' ? footer.ro.newsletter :
                    localeString === 'nl-nl' ? footer.nl.newsletter :
                    localeString === 'sv-se' ? footer.sv.newsletter :
                    footer.en.newsletter
                }
            </a>
            <br/>
            <a target="_blank" href="https://press.esufranchise.com" className={`${styles.specialLinks} ${styles.footerLink}`}>
                {
                    localeString === 'en-us' ? footer.en.press :
                    localeString === 'ro-ro' ? footer.ro.press :
                    localeString === 'nl-nl' ? footer.nl.press :
                    localeString === 'sv-se' ? footer.sv.press :
                    footer.en.press
                }
            </a>
        </div>
    </div>
  )
}

export default Footer
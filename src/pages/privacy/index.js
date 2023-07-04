import Head from 'next/head'
import NavBar from '@/components/NavBar'
import { websiteName } from '@/metadata/global'
import Footer from '@/components/Footer'
import styles from '@/styles/Privacy.module.css'


export default function Privacy() {
    return(
        <>
            <Head>
                <title>{`Privacy Policy | ${websiteName}`}</title>
                <meta name="description" content="Ethereal Superheroes Universe Privacy Policy" />
                <meta name="keywords" content="Ethereal Superheroes Universe, ESU, Privacy Policy" />
                <meta name="author" content="LNP Group" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <NavBar />
            <main className={styles.main}>
                <div className={styles.privacyContent}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Privacy Policy</h1>
                        <p className={styles.date}>Last Updated: April 16, 2023</p>
                    </div>
                    <div className={styles.tableOfContents}>
                        <h2>Table of Contents</h2>
                        <ol>
                            <li>
                                <a href="#definitions">Definitions and Key terms</a>
                            </li>
                            <li>
                                <a href="#auto-collected-info">Information collected automatically</a>
                            </li>
                            <li>
                                <a href="info-collected">How do we use the information we collect?</a>
                            </li>
                            <li>
                                <a href="#third-party-info">When do we use customer information from third-parties?</a>
                            </li>
                            <li>
                                <a href="#info-sharing">Do we share the information we collect with third-parties?</a>
                            </li>
                            <li>
                                <a href="#info-source">Where and when is information collected from customers and end users?</a>
                            </li>
                            <li>
                                <a href="#info-transfer">Could my information be transferred to other countries?</a>
                            </li>
                            <li>
                                <a href="#info-security">Is the information collected through our service secure?</a>
                            </li>
                            <li>
                                <a href="#info-update">Can I update or correct my information?</a>
                            </li>
                            <li>
                                <a href="#personnel">Personnel</a>
                            </li>
                            <li>
                                <a href="#sale">Sale of Business</a>
                            </li>
                            <li>
                                <a href="#affiliates">Affiliates</a>
                            </li>
                            <li>
                                <a href="#info-storage">How long do we keep your information?</a>
                            </li>
                            <li>
                                <a href="#info-protection">How do we protect your information?</a>
                            </li>
                            <li>
                                <a href="#law">Governing law</a>
                            </li>
                            <li>
                                <a href="#consent">Your consent</a>
                            </li>
                            <li>
                                <a href="#other-websites">Links to other websites</a>
                            </li>
                            <li>
                                <a href="#cookies">Cookies</a>
                            </li>
                            <li>
                                <a href="#kids-privacy">Kids&apos; privacy</a>
                            </li>
                            <li>
                                <a href="#changes">Changes to this Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#third-party-services">Third-Party Services</a>
                            </li>
                            <li>
                                <a href="#pixel">Facebook Pixel</a>
                            </li>
                            <li>
                                <a href="#tracking">Tracking Technologies</a>
                            </li>
                            <li>
                                <a href="#gdpr">Information about the General Data Protection Regulation (GDPR)</a>
                            </li>
                            <li>
                                <a href="#about-gdpr">What is GDPR?</a>
                            </li>
                            <li>
                                <a href="#about-personal-data">What is personal data?</a>
                            </li>
                            <li>
                                <a href="#gdpr-importance">Why is GDPR important?</a>
                            </li>
                            <li>
                                <a href="#data-access">Individual Data Subject&apos;s Rights - Data Access, Portability and Deletion</a>
                            </li>
                            <li>
                                <a href="#california">California Residents</a>
                            </li>
                            <li>
                                <a href="#caloppa">California Online Privacy Protection Act (CalOPPA)</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ol>
                    </div>
                    <div className={styles.introduction}>
                        <p>
                            ESU Franchise (&ldquo;we,&LDQUO; &LDQUO;our,&LDQUO; or &LDQUO;us&LDQUO;) is committed to protecting your privacy. This Privacy Policy explains how your personal
                            information is collected, used, and disclosed by ESU Franchise.
                        </p>
                        <p>
                            This Privacy Policy applies to our website, https://esu.lnp-group.com, and its associated subdomains (collectively, our &LDQUO;Service&LDQUO;)
                            alongside our application, Ethereal Superheroes Universe. By accessing or using our Service, you signify that you have read,
                            understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy
                            and our Terms of Service.
                        </p>
                    </div>
                    <section id="definitions">
                        <h2 className={styles.sectionHeader}>Definitions and Key terms</h2>
                        <div className={styles.content}>
                            <p>
                                For this Privacy Policy:
                            </p>
                            <ul>
                                <li>
                                    <strong>Cookie:</strong> A small amount of data generated by a website and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.
                                </li>
                                <li>
                                    <strong>Company:</strong> when this policy mentions &LDQUO;Company,&LDQUO; &LDQUO;we,&LDQUO; &LDQUO;us,&LDQUO; or &LDQUO;our,&LDQUO; it refers to LNP Group, Str. Dr. Ghe. Buzoianu, Nr. 3, 805200, Târgu Bujor. that is responsible for your information under this Privacy Policy.
                                </li>
                                <li>
                                    <strong>Country:</strong> where ESU Franchise or the owners/founders of ESU Franchise are based, in this case is Romania.
                                </li>
                                <li>
                                    <strong>Customer:</strong> refers to the company, organization or person that signs up to use the Service to manage the relationships with your prospective or current customers.
                                </li>
                                <li>
                                    <strong>Device:</strong> any internet connected device such as a phone, tablet, computer or any other device that can be used to visit ESU Franchise and use the services.
                                </li>
                                <li>
                                    <strong>IP Address:</strong> Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.
                                </li>
                                <li>
                                    <strong>Personnel:</strong> refers to those individuals who are employed by ESU Franchise or are under contract to perform a service on behalf of one of them.
                                </li>
                                <li>
                                    <strong>Personal Data:</strong> any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.
                                </li>
                                <li>
                                    <strong>Service:</strong> refers to the Service provided by ESU Franchise as described in the relative terms (if available) and on this platform.
                                </li>
                                <li>
                                    <strong>Third-Party Service:</strong> refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.
                                </li>
                                <li>
                                    <strong>Website:</strong> ESU Franchise&apos;s site, which can be accessed via this URL: https://esu.lnp-group.com.
                                </li>
                                <li>
                                    <strong>You:</strong> a person or entity that is registered with ESU Franchise to use the Service.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="auto-collected-info">
                        <h2 className={styles.sectionHeader}>Information automatically collected</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In Short</strong>: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.
                            </p>
                            <p>
                                There is some information like your Internet Protocol (IP) address and/or browser and device characteristics - is collected automatically when you visit our platform. This information may be used to connect your computer to the Internet. Other information collected automatically could be a login, e-mail address, password, computer and connection information such as browser plug-in types and versions and time zone setting, operating systems and platforms, purchase history, (we sometimes aggregate with similar information from other Users), the full Uniform Resource Locator (URL) clickstream to, through and from our Website that may include date and time; cookie number; parts of the site you viewed or searched for; and the phone number you used to call our Customer Services. We may also use browser data such as cookies, Flash cookies (also known as Flash Local Shared Objects) or similar data on certain parts of our Website for fraud prevention and other purposes. During your visits, we may use software tools such as JavaScript to measure and collect session information including page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and methods used to browse away from the page. We may also collect technical information to help us identify your device for fraud prevention and diagnostic purposes.
                            </p>
                            <br />
                            <p>
                                We automatically collect certain information when you visit, use or navigate the platform. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about who and when you use our and other technical information. This information is primarily needed to maintain the security and operation of our, and for our internal analytics and reporting purposes.
                            </p>
                        </div>
                    </section>
                    <section id="info-collected">
                        <h2 className={styles.sectionHeader}>How do we use the information we collect?</h2>
                        <div className={styles.content}>
                            <p>
                                Any of the information we collect from you may be used in one of the following ways:
                            </p>
                            <ul>
                                <li>
                                    <strong>To personalize your experience</strong> (your information helps us to better respond to your individual needs)
                                </li>
                                <li>
                                    <strong>To improve our service</strong> (we continually strive to improve our website offerings based on the information and feedback we receive from you)
                                </li>
                                <li>
                                    <strong>To improve customer service</strong> (your information helps us to more effectively respond to your customer service requests and support needs)
                                </li>
                                <li>
                                    <strong>To process transactions</strong> (your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested)
                                </li>
                                <li>
                                    <strong>To administer a contest, promotion, survey or other site feature</strong>
                                </li>
                                <li>
                                    <strong>To send periodic emails</strong> (the email address you provide for order processing, will only be used to send you information and updates pertaining to your order. If you decide to opt-in to our mailing list, you will receive emails that may include company news, updates, related product or service information, etc. If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email)
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="third-party-info">
                        <h2 className={styles.sectionHeader}>When do we use customer information from third-parties?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may use your information from third-parties to help personalize your experience.
                            </p>
                            <p>
                                We receive some information from the third parties when you contact us. For example, when you submit your email address to us to show interest in becoming our customer, we receive information from a third party that provides automated fraud detection services to us. We also occasionally collect information that is made publicly available on social media websites. You can control how much of your information social media websites make public by visiting these websites and changing your privacy settings.
                            </p>
                        </div>
                    </section>
                    <section id="info-sharing">
                        <h2 className={styles.sectionHeader}>Do we share the information we collect with third-parties?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                            </p>
                            <p>
                                We may share the information that we collect, both personal and non-personal, with third parties such as advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. We may also share it with our current and future affiliated companies and business partners, and if we are involved in a merger, asset sale or other business reorganization, we may also share or transfer your personal and non-personal information to our successors-in-interest.
                            </p>
                            <br />
                            <p>
                                We may engage trusted third party service providers to perform functions and provide services to us, such as hosting and maintaining our servers and our service, database storage and management, e-mail management, storage marketing, credit card processing, customer service and fulfilling orders for products and services you may purchase through our platform. We will likely share your personal information, and possibly some non-personal information, with these third parties to enable them to perform these services for us and for you.
                            </p>
                            <br />
                            <p>
                                We may share portions of our log file data, including IP addresses, for analytics purposes with third parties such as web analytics partners, application developers, and ad networks. If your IP address is shared, it may be used to estimate general location and other technographics such as connection speed, whether you have visited the service in a shared location, and type of device used to visit the service. They may aggregate information about our advertising and what you see on the service and then provide auditing, research and reporting for us and our advertisers.
                            </p>
                            <br />
                            <p>
                                We may also disclose personal and non-personal information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate in order to respond to claims, legal process (including subpoenas), to protect our rights and interests or those of a third party, the safety of the public or any person, to prevent or stop any illegal, unethical, or legally actionable activity, or to otherwise comply with applicable court orders, laws, rules and regulations.
                            </p>
                        </div>
                    </section>
                    <section id="info-source">
                        <h2 className={styles.sectionHeader}>Where and when is information collected from customers and end users?</h2>
                        <div className={styles.content}>
                            <p>
                                We will collect personal information that you submit to us. We may also receive personal information about you from third parties as described above.
                            </p>
                        </div>
                    </section>
                    <section id="info-transfer">
                        <h2 className={styles.sectionHeader}>Could my information be transferred to other countries?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may transfer, store, and process your information in countries other than your own.
                            </p>
                            <p>
                                We are incorporated in Romania. Information collected via our website, through direct interactions with you, or from use of our help services may be transferred from time to time to our offices or personnel, or to third parties, located throughout the world, and may be viewed and hosted anywhere in the world, including countries that may not have laws of general applicability regulating the use and transfer of such data. To the fullest extent allowed by applicable law, by using any of the above, you voluntarily consent to the trans- border transfer and hosting of such information.
                            </p>
                        </div>
                    </section>
                    <section id="info-security">
                        <h2 className={styles.sectionHeader}>Is the information collected through our service secure?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                            </p>
                            <p>
                                We take precautions to protect the security of your information. We have physical, electronic, and managerial procedures to help safeguard, prevent unauthorized access, maintain data security, and correctly use your information. However, neither people nor security systems are foolproof, including encryption systems. In addition, people can commit intentional crimes, make mistakes or fail to follow policies. Therefore, while we use reasonable efforts to protect your personal information, we cannot guarantee its absolute security. If applicable law imposes any non-disclaimable duty to protect your personal information, you agree that intentional misconduct will be the standards used to measure our compliance with that duty.
                            </p>
                        </div>
                    </section>
                    <section id="info-update">
                        <h2 className={styles.sectionHeader}>Can I update or correct my information?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> Yes, you can update or correct your information at any time.
                            </p>
                            <p>
                                The rights you have to request updates or corrections to the information we collect depend on your relationship with us. Personnel may update or correct their information as detailed in our internal company employment policies. Customers have the right to request the restriction of certain uses and disclosures of personally identifiable information as follows. You can contact us in order to (1) update or correct your personally identifiable information, (2) change your preferences with respect to communications and other information you receive from us, or (3) delete the personally identifiable information maintained about you on our systems (subject to the following paragraph), by cancelling your account. Such updates, corrections, changes and deletions will have no effect on other information that we maintain, or information that we have provided to third parties in accordance with this Privacy Policy prior to such update, correction, change or deletion. To protect your privacy and security, we may take reasonable steps (such as requesting a unique password) to verify your identity before granting you profile access or making corrections. You are responsible for maintaining the secrecy of your unique password and account information at all times. You should be aware that it is not technologically possible to remove each and every record of the information you have provided to us from our system. The need to back up our systems to protect information from inadvertent loss means that a copy of your information may exist in a non-erasable form that will be difficult or impossible for us to locate. Promptly after receiving your request, all personal information stored in databases we actively use, and other readily searchable media will be updated, corrected, changed or deleted, as appropriate, as soon as and to the extent reasonably and technically practicable. If you are an end user and wish to update, delete, or receive any information we have about you, you may do so by contacting the organization of which you are a customer.
                            </p>
                        </div>
                    </section>
                    <section id="personnel">
                        <h2 className={styles.sectionHeader}>Personnel</h2>
                        <div className={styles.content}>
                            <p>
                                If you are one of our workers or applicants, we collect information you voluntarily provide to us. We use the information collected for Human Resources purposes in order to administer benefits to workers and screen applicants. You may contact us in order to (1) update or correct your information, (2) change your preferences with respect to communications and other information you receive from us, or (3) receive a record of the information we have relating to you. Such updates, corrections, changes and deletions will have no effect on other information that we maintain, or information that we have provided to third parties in accordance with this Privacy Policy prior to such update, correction, change or deletion.
                            </p>
                        </div>
                    </section>
                    <section id="sale">
                        <h2 className={styles.sectionHeader}>Sale of Business</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may transfer your information to a third party in the event of a sale, merger, liquidation, receivership, or transfer of all or substantially all of our assets.
                            </p>
                            <p>
                                We reserve the right to transfer information to a third party in the event of a sale, merger or other transfer of all or substantially all of the assets of us or any of its Corporate Affiliates (as defined herein), or that portion of us or any of its Corporate Affiliates to which the Service relates, or in the event that we discontinue our business or file a petition or have filed against us a petition in bankruptcy, reorganization or similar proceeding, provided that the third party agrees to adhere to the terms of this Privacy Policy.
                            </p>
                        </div>
                    </section>
                    <section id="affiliates">
                        <h2 className={styles.sectionHeader}>Affiliates</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may share your information with our affiliates.
                            </p>
                            <p>
                                We may disclose information (including personal information) about you to our Corporate Affiliates. For purposes of this Privacy Policy, &LDQUO;Corporate Affiliate&LDQUO; means any person or entity which directly or indirectly controls, is controlled by or is under common control with us, whether by ownership or otherwise. Any information relating to you that we provide to our Corporate Affiliates will be treated by those Corporate Affiliates in accordance with the terms of this Privacy Policy.
                            </p>
                        </div>
                    </section>
                    <section id="info-storage">
                        <h2 className={styles.sectionHeader}>How long do we keep your information?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
                            </p>
                            <p>
                                We keep your information only so long as we need it to provide service to you and fulfill the purposes described in this policy. This is also the case for anyone that we share your information with and who carries out services on our behalf. When we no longer need to use your information and there is no need for us to keep it to comply with our legal or regulatory obligations, we&apos;ll either remove it from our systems or depersonalize it so that we can&apos;t identify you.
                            </p>
                        </div>
                    </section>
                    <section id="info-protection">
                        <h2 className={styles.sectionHeader}>How do we protect your information?</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
                            </p>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential. After a transaction, your private information (credit cards, social security numbers, financials, etc.) is never kept on file. We cannot, however, ensure or warrant the absolute security of any information you transmit to us or guarantee that your information on the Service may not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, technical, or managerial safeguards.
                            </p>
                        </div>
                    </section>
                    <section id="law">
                        <h2 className={styles.sectionHeader}>Governing Law</h2>
                        <div className={styles.content}>
                            <p>
                                The laws of Romania, excluding its conflicts of law rules, shall govern this Agreement and your use of our service. Your use of our service may also be subject to other local, state, national, or international laws.
                            </p>
                        </div>
                    </section>
                    <section id="consent">
                        <h2 className={styles.sectionHeader}>Your Consent</h2>
                        <div className={styles.content}>
                            <p>
                                By using our service, you consent to our privacy policy.
                            </p>
                        </div>
                    </section>
                    <section id="other-websites">
                        <h2 className={styles.sectionHeader}>Links to other websites</h2>
                        <div className={styles.content}>
                            <p>
                                This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by Ethereal Superheroes Universe. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our platform, is subject to that website&apos;s own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.
                            </p>
                        </div>
                    </section>
                    <section id="cookies">
                        <h2 className={styles.sectionHeader}>Cookies</h2>
                        <div className={styles.content}>
                            < p className={styles.summary}>
                                <strong>In short:</strong> We may use cookies and similar technologies to collect and store your information.
                            </p>
                            <p>
                            We use &LDQUO;Cookies&LDQUO; to identify the areas of our website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our website correctly or at all. We never place Personally Identifiable Information in Cookies.
                            </p>
                        </div>
                    </section>
                    <section id="kids-privacy">
                        <h2 className={styles.sectionHeader}>Kids&apos; Privacy</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
                            </p>
                            <p>
                                We do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from our servers.
                            </p>
                        </div>
                    </section>
                    <section id="changes">
                        <h2 className={styles.sectionHeader}>Changes to this Privacy Policy</h2>
                        <div className={styles.content}>
                            <p>
                                If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below.
                            </p>
                        </div>
                    </section>
                    <section id="third-party-services">
                        <h2 className={styles.sectionHeader}>Third-Party Services</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may use third-party service providers to service various aspects of our business.
                            </p>
                            <p>
                                We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services (&LDQUO;Third-Party Services&LDQUO;).
                            </p>
                            <br />
                            <p>
                                You acknowledge and agree that we shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. We do not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.
                            </p>
                            <br />
                            <p>
                                Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties&apos; terms and conditions.
                            </p>
                        </div>
                    </section>
                    <section id="pixel">
                        <h2 className={styles.sectionHeader}>Facebook Pixel</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We may use Facebook Pixel to track your activity on our website.
                            </p>
                            <p>
                                Facebook pixel is an analytics tool that allows you to measure the effectiveness of your advertising by understanding the actions people take on your website. You can use the pixel to: Make sure your ads are shown to the right people. Facebook pixel may collect information from your device when you use the service. Facebook pixel collects information that is held in accordance with its Privacy Policy.
                            </p>
                        </div>
                    </section>
                    <section id="tracking">
                        <h2 className={styles.sectionHeader}>Tracking Technologies</h2>
                        <div className={styles.content}>
                            <ul>
                                <li>
                                    <strong>Local Storage</strong>
                                </li>
                            </ul>
                            <p>
                                Local Storage sometimes known as DOM storage, provides web apps with methods and protocols for storing client-side data. Web storage supports persistent data storage, similar to cookies but with a greatly enhanced capacity and no information stored in the HTTP request header.
                            </p>
                        </div>
                    </section>
                    <section id="gdpr">
                        <h2 className={styles.sectionHeader}>Information about the General Data Protection Regulation (GDPR)</h2>
                        <div className={styles.content}>
                            <p className={styles.summary}>
                                <strong>In short:</strong> We are compliant with the GDPR.
                            </p>
                            <p>
                                We may be collecting and using information from you if you are from the European Economic Area (EEA), and in this section of our Privacy Policy we are going to explain exactly how and why is this data collected, and how we maintain this data under protection from being replicated or used in the wrong way.
                            </p>
                        </div>
                    </section>
                    <section id="about-gdpr">
                        <h2 className={styles.sectionHeader}>What is the GDPR?</h2>
                        <div className={styles.content}>
                            <p>
                                GDPR is an EU-wide privacy and data protection law that regulates how EU residents&apos; data is protected by companies and enhances the control the EU residents have, over their personal data.
                            </p>
                        </div>
                    </section>
                    <section id="about-personal-data">
                        <h2 className={styles.sectionHeader}>What is Personal Data?</h2>
                        <div className={styles.content}>
                            <p>
                                Any data that relates to an identifiable or identified individual. GDPR covers a broad spectrum of information that could be used on its own, or in combination with other pieces of information, to identify a person. Personal data extends beyond a person&apos;s name or email address. Some examples include financial information, political opinions, genetic data, biometric data, IP addresses, physical address, sexual orientation, and ethnicity. The Data Protection Principles include requirements such as:
                            </p>
                            <br />
                            <ul>
                                <li>
                                    Personal data collected must be processed in a fair, legal, and transparent way and should only be used in a way that a person would reasonably expect.
                                </li>
                                <li>
                                    Personal data should only be collected to fulfil a specific purpose and it should only be used for that purpose. Organizations must specify why they need the personal data when they collect it.
                                </li>
                                <li>
                                    Personal data should be held no longer than necessary to fulfil its purpose.
                                </li>
                                <li>
                                    People covered by the GDPR have the right to access their own personal data. They can also request a copy of their data, and that their data be updated, deleted, restricted, or moved to another organization.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="gdpr-importance">
                        <h2 className={styles.sectionHeader}>Why is GDPR important?</h2>
                        <div className={styles.content}>
                            <p>
                                GDPR adds some new requirements regarding how companies should protect individuals&apos; personal data that they collect and process. It also raises the stakes for compliance by increasing enforcement and imposing greater fines for breach. Beyond these facts it&apos;s simply the right thing to do. At Help Scout we strongly believe that your data privacy is very important and we already have solid security and privacy practices in place that go beyond the requirements of this new regulation.
                            </p>
                        </div>
                    </section>
                    <section id="data-access">
                        <h2 className={styles.sectionHeader}>Individual Data Subject&apos;s Rights - Data Access, Portability and Deletion</h2>
                        <div className={styles.content}>
                            <p>
                                We are committed to helping our customers meet the data subject rights requirements of GDPR. We process or store all personal data in fully vetted, DPA compliant vendors. We do store all conversation and personal data for up to 6 years unless your account is deleted. In which case, we dispose of all data in accordance with our Terms of Service and Privacy Policy, but we will not hold it longer than 60 days.
                            </p>
                            <br />
                            <p>
                                We are aware that if you are working with EU customers, you need to be able to provide them with the ability to access, update, retrieve and remove personal data. We got you! We&apos;ve been set up as self service from the start and have always given you access to your data and your customers data. Our customer support team is here for you to answer any questions you might have about working with the API.
                            </p>
                        </div>
                    </section>
                    <section id="california">
                        <h2 className={styles.sectionHeader}>California Residents</h2>
                        <div className={styles.content}>
                            <p>
                                The California Consumer Privacy Act (CCPA) requires us to disclose categories of Personal Information we collect and how we use it, the categories of sources from whom we collect Personal Information, and the third parties with whom we share it, which we have explained above.
                            </p>
                            <br />
                            <p>
                                We are also required to communicate information about rights California residents have under California law. You may exercise the following rights:
                            </p>
                            <br />
                            <ul>
                                <li>
                                    <strong>Right to Know and Access.</strong> You may submit a verifiable request for information regarding the: (1) categories of Personal Information we collect, use, or share; (2) purposes for which categories of Personal Information are collected or used by us; (3) categories of sources from which we collect Personal Information; and (4) specific pieces of Personal Information we have collected about you.
                                </li>
                                <li>
                                    <strong>Right to Equal Service.</strong> We will not discriminate against you if you exercise your privacy rights.
                                </li>
                                <li>
                                    <strong>Right to Delete.</strong> You may submit a verifiable request to delete Personal Information we have collected from you.
                                </li>
                                <li>
                                    Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
                                </li>
                            </ul>
                            <br />
                            <p>
                                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                            </p>
                            <br />
                            <p>
                                We do not sell the Personal Information of our users.
                            </p>
                            <br />
                            <p>
                                For more information about these rights, please contact us.
                            </p>
                        </div>
                    </section>
                    <section id="caloppa">
                        <h2 className={styles.sectionHeader}>California Online Privacy Protection Act (CalOPPA)</h2>
                        <div className={styles.content}>
                            <p>
                                CalOPPA requires us to disclose categories of Personal Information we collect and how we use it, the categories of sources from whom we collect Personal Information, and the third parties with whom we share it, which we have explained above.
                            </p>
                            <br />
                            <p>
                                CalOPPA users have the following rights:
                            </p>
                            <br />
                            <ul>
                                <li>
                                    <strong>Right to Know and Access.</strong> You may submit a verifiable request for information regarding the: (1) categories of Personal Information we collect, use, or share; (2) purposes for which categories of Personal Information are collected or used by us; (3) categories of sources from which we collect Personal Information; and (4) specific pieces of Personal Information we have collected about you.
                                </li>
                                <li>
                                    <strong>Right to Equal Service.</strong> We will not discriminate against you if you exercise your privacy rights.
                                </li>
                                <li>
                                    <strong>Right to Delete.</strong> You may submit a verifiable request to delete Personal Information we have collected from you.
                                </li>
                                <li>
                                    Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
                                </li>
                            </ul>
                            <br />
                            <p>
                                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                            </p>
                            <br />
                            <p>
                                We do not sell the Personal Information of our users.
                            </p>
                            <br />
                            <p>
                                For more information about these rights, please contact us.
                            </p>
                        </div>
                    </section>
                    <section id="contact">
                        <h2 className={styles.sectionHeader}>Contact Us</h2>
                        <div className={styles.content}>
                            <p>
                                Don&apos;t hesitate to contact us if you have any questions.
                            </p>
                            <br />
                            <ul>
                                <li>
                                    Via email: <a href="mailto:contact@lnp-group.com">contact@lnp-group.com</a>
                                </li>
                                <li>
                                    Via this link: <a href="https://lnp-group.com/contact" target="_blank">https://lnp-group.com/contact</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
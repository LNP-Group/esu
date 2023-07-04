import styles from '@/styles/Loading.module.css'

export default function Loading() {
    return(
        <div className={styles.loading}>
            <div className={styles.loadingItem}>
                <img src="https://cdn.esufranchise.com/website/logo.svg" alt="logo" width="220" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#fff" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" values="164.93361431346415;291.84314606299213" keyTimes="0;1"></animate>
                        <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1s" values="164.93361431346415;291.84314606299213" keyTimes="0;1"></animate>
                        <animate attributeName="stroke" repeatCount="indefinite" dur="1s" values="#fff;#fff" keyTimes="0;1"></animate>
                        <animate attributeName="stroke-width" repeatCount="indefinite" dur="1s" values="10;10" keyTimes="0;1"></animate>
                        <animate attributeName="fill" repeatCount="indefinite" dur="1s" values="#fff;#fff" keyTimes="0;1"></animate>
                    </circle>
                </svg>
            </div>
        </div>
    )
}
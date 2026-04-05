import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import React from 'react'

import styles from './styles.module.css'

export default function Logo(props: React.ComponentProps<'a'>) {
    const { siteConfig } = useDocusaurusContext()
    const logoSrc = useBaseUrl('/logo/dark.svg')

    return (
        <Link className={styles.logoLink} to="/" {...props}>
            <div className={styles.logoContainer}>
                <img alt={siteConfig.title} className={styles.logoImage} src={logoSrc} />
                <div className={styles.logoText}>
                    <span className={styles.logoTextHighlight}>Team</span>
                    <span className={styles.logoTextNormal}>Dominant/wiki</span>
                </div>
            </div>
        </Link>
    )
}

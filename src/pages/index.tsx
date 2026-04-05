import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'

import styles from './index.module.css'

type HomeAction = {
    accent: 'ghost' | 'outline' | 'primary' | 'warm'
    href: string
    label: string
    marker: string
}

type HomeStat = {
    label: string
    tone: 'cyan' | 'violet'
    value: string
}

type HomeCopy = {
    actions: HomeAction[]
    brandPrimary: string
    brandSecondary: string
    description: string
    metaDescription: string
    metaTitle: string
    previewAlt: string
    statementPrimary: string
    statementSecondary: string
    stats: HomeStat[]
}

const copy: Record<string, HomeCopy> = {
    en: {
        actions: [
            { accent: 'outline', href: '/docs/', label: 'Open Docs', marker: '->' },
            { accent: 'ghost', href: '/faq/', label: 'Open FAQ', marker: '??' },
            { accent: 'primary', href: '/docs/software/', label: 'Browse Guides', marker: '[]' },
            { accent: 'warm', href: 'https://github.com/TeamDominant', label: 'GitHub', marker: 'GH' }
        ],
        brandPrimary: 'Team',
        brandSecondary: 'Dominant',
        description:
            'Practical guides, focused notes, and a separate FAQ collected into one panel-style wiki with English and Russian content, ready for GitHub Pages deployment.',
        metaDescription:
            'TeamDominant Wiki: panel-style documentation with practical guides, a dedicated FAQ, and bilingual content.',
        metaTitle: 'TeamDominant Wiki',
        previewAlt: 'Panel-style dashboard preview',
        statementPrimary: 'Documentation and',
        statementSecondary: 'knowledge base',
        stats: [
            { label: 'Docs and FAQ pages', tone: 'violet', value: '31+' },
            { label: 'Translated RU pages', tone: 'cyan', value: '30+' }
        ]
    },
    ru: {
        actions: [
            { accent: 'outline', href: '/docs/', label: 'Открыть Docs', marker: '->' },
            { accent: 'ghost', href: '/faq/', label: 'Открыть FAQ', marker: '??' },
            { accent: 'primary', href: '/docs/software/', label: 'Смотреть гайды', marker: '[]' },
            { accent: 'warm', href: 'https://github.com/TeamDominant', label: 'GitHub', marker: 'GH' }
        ],
        brandPrimary: 'Team',
        brandSecondary: 'Dominant',
        description:
            'Практические гайды, прикладные заметки и отдельный FAQ собраны в единую wiki в визуале panel, с английской и русской версиями и нормальной публикацией на GitHub Pages.',
        metaDescription:
            'TeamDominant Wiki: документация в стиле panel с практическими гайдами, отдельным FAQ и двуязычным контентом.',
        metaTitle: 'TeamDominant Wiki',
        previewAlt: 'Превью dashboard в стиле panel',
        statementPrimary: 'Документация и',
        statementSecondary: 'база знаний',
        stats: [
            { label: 'Страниц Docs и FAQ', tone: 'violet', value: '31+' },
            { label: 'Переведённых RU страниц', tone: 'cyan', value: '30+' }
        ]
    }
}

function getActionClass(accent: HomeAction['accent']) {
    switch (accent) {
        case 'outline':
            return styles.actionOutline
        case 'ghost':
            return styles.actionGhost
        case 'primary':
            return styles.actionPrimary
        case 'warm':
            return styles.actionWarm
        default:
            return ''
    }
}

export default function Home() {
    const { i18n } = useDocusaurusContext()
    const ui = copy[i18n.currentLocale] ?? copy.en
    const previewSrc = useBaseUrl('/pages/landing_page.png')

    return (
        <Layout description={ui.metaDescription} title={ui.metaTitle}>
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroIntro}>
                        <h1 className={styles.brandTitle}>
                            <span className={styles.brandPrimary}>{ui.brandPrimary}</span>
                            <span className={styles.brandSecondary}>{ui.brandSecondary}</span>
                        </h1>

                        <p className={styles.statement}>
                            <span className={styles.statementPrimary}>{ui.statementPrimary}</span>{' '}
                            <span className={styles.statementSecondary}>{ui.statementSecondary}</span>
                        </p>

                        <p className={styles.description}>{ui.description}</p>

                        <div className={styles.actions}>
                            {ui.actions.map((action) => {
                                const isExternal = action.href.startsWith('http')

                                return (
                                    <Link
                                        className={`${styles.action} ${getActionClass(action.accent)}`}
                                        href={isExternal ? action.href : undefined}
                                        key={action.href}
                                        to={isExternal ? undefined : action.href}
                                    >
                                        <span aria-hidden="true" className={styles.actionMarker}>
                                            {action.marker}
                                        </span>
                                        <span>{action.label}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.previewWrap}>
                        <div className={styles.previewGlow} />
                        <div className={styles.previewFrame}>
                            <img alt={ui.previewAlt} className={styles.previewImage} src={previewSrc} />
                        </div>
                    </div>
                </section>

                <section className={styles.statsSection}>
                    <div className={styles.statsGrid}>
                        {ui.stats.map((stat) => (
                            <article
                                className={`${styles.statCard} ${stat.tone === 'violet' ? styles.statCardViolet : styles.statCardCyan}`}
                                key={stat.label}
                            >
                                <div className={styles.statIcon} aria-hidden="true" />
                                <p className={styles.statValue}>{stat.value}</p>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    )
}

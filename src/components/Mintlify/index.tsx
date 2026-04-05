import Admonition from '@theme/Admonition'
import Link from '@docusaurus/Link'
import type { ReactNode } from 'react'
import {
    IconCode,
    IconFlag3,
    IconHandClick,
    IconLayoutGrid,
    IconServer2
} from '@tabler/icons-react'
import clsx from 'clsx'

import styles from './styles.module.css'

type AdmonitionProps = {
    children: ReactNode
    title?: string
}

type ColumnsProps = {
    children: ReactNode
    cols?: number
}

type CardProps = {
    children?: ReactNode
    href?: string
    icon?: ReactNode | string
    title: string
}

type StepProps = {
    children: ReactNode
    title?: string
}

type FrameProps = {
    children: ReactNode
}

type AccordionProps = {
    children: ReactNode
    title: string
}

function iconForName(icon?: ReactNode | string) {
    if (typeof icon !== 'string') {
        return icon ?? <IconLayoutGrid size={24} stroke={1.8} />
    }

    const commonProps = { size: 24, stroke: 1.8 }

    switch (icon) {
        case 'code':
            return <IconCode {...commonProps} />
        case 'square-code':
            return <IconCode {...commonProps} />
        case 'server':
            return <IconServer2 {...commonProps} />
        case 'flag':
            return <IconFlag3 {...commonProps} />
        case 'hand':
            return <IconHandClick {...commonProps} />
        default:
            return <IconLayoutGrid {...commonProps} />
    }
}

function createAdmonition(type: 'caution' | 'danger' | 'info' | 'note') {
    return function MintlifyAdmonition({ children, title }: AdmonitionProps) {
        return (
            <Admonition title={title} type={type}>
                {children}
            </Admonition>
        )
    }
}

export function Columns({ children, cols = 2 }: ColumnsProps) {
    return (
        <div className={styles.columns} style={{ ['--mintlify-cols' as string]: String(cols) }}>
            {children}
        </div>
    )
}

export function Card({ children, href, icon, title }: CardProps) {
    const content = (
        <>
            <div className={styles.cardIcon}>{iconForName(icon)}</div>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {children && <div className={styles.cardText}>{children}</div>}
            </div>
        </>
    )

    if (!href) {
        return <div className={styles.card}>{content}</div>
    }

    return (
        <Link className={clsx(styles.card, styles.cardLink)} to={href}>
            {content}
        </Link>
    )
}

export function Steps({ children }: { children: ReactNode }) {
    return <div className={styles.steps}>{children}</div>
}

export function Step({ children, title }: StepProps) {
    return (
        <div className={styles.step}>
            <div className={styles.stepMarker} />
            <div className={styles.stepContent}>
                {title && <h3 className={styles.stepTitle}>{title}</h3>}
                <div className={styles.stepBody}>{children}</div>
            </div>
        </div>
    )
}

export function Frame({ children }: FrameProps) {
    return <div className={styles.frame}>{children}</div>
}

export function AccordionGroup({ children }: { children: ReactNode }) {
    return <div className={styles.accordionGroup}>{children}</div>
}

export function Accordion({ children, title }: AccordionProps) {
    return (
        <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>{title}</summary>
            <div className={styles.accordionContent}>{children}</div>
        </details>
    )
}

export const Info = createAdmonition('info')
export const Warning = createAdmonition('caution')
export const Danger = createAdmonition('danger')
export const Note = createAdmonition('note')

const MintlifyComponents = {
    Accordion,
    AccordionGroup,
    Card,
    Columns,
    Danger,
    Frame,
    Info,
    Note,
    Step,
    Steps,
    Warning
}

export default MintlifyComponents

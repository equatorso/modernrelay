'use client'

import { cn } from '@/lib/utils'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { JSX, useLayoutEffect, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import type { BundledLanguage } from 'shiki/bundle/web'
import { codeToHast } from 'shiki/bundle/web'

export async function highlight(code: string, lang: BundledLanguage, theme?: string) {
    const hast = await codeToHast(code, {
        lang,
        theme: theme || 'github-dark',
    })

    return toJsxRuntime(hast, {
        Fragment,
        jsx,
        jsxs,
    }) as JSX.Element
}

type Props = {
    code: string | null
    lang: BundledLanguage
    initial?: JSX.Element
    preHighlighted?: JSX.Element | null
    maxHeight?: number
    className?: string
    theme?: string
    lineNumbers?: boolean // ← added
}

export default function CodeBlock({ code, lang, initial, maxHeight, preHighlighted, theme, className }: Props) {
    const [content, setContent] = useState<JSX.Element | null>(preHighlighted || initial || null)

    useLayoutEffect(() => {
        // If we have pre-highlighted content, use that
        if (preHighlighted) {
            setContent(preHighlighted)
            return
        }

        let isMounted = true

        if (code) {
            highlight(code, lang, theme).then((result) => {
                if (isMounted) setContent(result)
            })
        } else {
            setContent(<pre className="rounded-lg bg-zinc-950 p-4">No code available</pre>)
        }

        return () => {
            isMounted = false
        }
    }, [code, lang, theme, preHighlighted])

    return content ? (
        <div
            className={cn('[&_code]:text-[13px]/2 [&_code]:font-mono [&_pre]:border-l [&_pre]:p-2 [&_pre]:leading-snug', className)}
            style={{ '--pre-max-height': `${maxHeight}px` } as React.CSSProperties}>
            {content}
        </div>
    ) : (
        <pre className="rounded-lg p-4">Loading...</pre>
    )
}
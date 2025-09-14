import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center gap-1 h-12', className)}>
            <Image
                src="/equator_logo.jpg"
                alt="Equator Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
            />
            <span className="text-foreground font-medium text-lg">Modern Relay</span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/equator_logo.jpg"
            alt="Equator Logo"
            width={40}
            height={40}
            className={cn('size-10 object-contain', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/equator_logo.jpg"
            alt="Equator Logo"
            width={48}
            height={48}
            className={cn('size-12 w-12 object-contain', className)}
        />
    )
}
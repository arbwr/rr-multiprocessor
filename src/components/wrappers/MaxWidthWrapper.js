import { cn } from '@/lib/utils'

export default function MaxWidthWrapper({ className, children }) {
    return (
        <div
            className={cn(
                'w-full overflow-auto',
                className
            )}>
            {children}
        </div>
    )
}
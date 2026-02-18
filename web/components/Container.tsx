import { ReactNode } from 'react'

const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <div className={`px-10 md:px-20 lg:px-50 ${className || ''}`}>
            {children}
        </div>
    )
}

export default Container
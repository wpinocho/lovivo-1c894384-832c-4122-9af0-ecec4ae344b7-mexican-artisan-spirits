import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

interface ScrollLinkProps {
  to: string
  className?: string
  children: React.ReactNode
}

export const ScrollLink = ({ to, className, children }: ScrollLinkProps) => {
  const location = useLocation()
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = to.split('#')
    
    if (location.pathname === path && hash) {
      e.preventDefault()
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
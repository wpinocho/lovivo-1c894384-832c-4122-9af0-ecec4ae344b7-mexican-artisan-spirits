export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <span className="text-primary-foreground font-bold text-xl">A</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            Alebrijes
          </span>
          <span className="text-xs text-muted-foreground font-medium -mt-1">
            Artesanales
          </span>
        </div>
      </div>
    </a>
  )
}
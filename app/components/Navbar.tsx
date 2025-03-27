import Link from "next/link"

const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              Miguel <span className="text-blue-500">Advincula</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#hero" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
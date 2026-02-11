import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span>
              <Image
                src="/navbar_logo.png"
                alt="navbar logo"
                width={300}
                height={300}
                className="invert"
                ></Image>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#hero" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                Skills
              </Link>
              <Link href="#work" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                Work
              </Link>
              <Link href="#projects" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                Projects
              </Link>
              <Link href="#highlights" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
                Highlights
              </Link>
              <Link href="#contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
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

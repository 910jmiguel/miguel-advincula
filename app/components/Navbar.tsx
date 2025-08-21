import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span>
              <Image
                src="/navbar_logo.png"
                alt="navbar logo"
                width={300}
                height={300}
                ></Image> 
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6">
              <Link href="#hero" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
                About
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
                Skills
              </Link>
              <Link href="#work" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
                Work
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors text-white">
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

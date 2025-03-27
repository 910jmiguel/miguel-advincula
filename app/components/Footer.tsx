import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black/50 py-6">
      <div className="container max-w-screen-lg mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Miguel Advincula. All rights reserved.
          </p>
          <div className="flex gap-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
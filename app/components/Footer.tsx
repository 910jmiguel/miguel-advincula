import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { TikTokIcon } from '@/app/ui/icons'

const Footer = () => {
  return (
    <footer className="bg-stone-100 py-6">
      <div className="container max-w-screen-lg mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Miguel Advincula. All rights reserved.
          </p>
          <div className="flex gap-x-6">
                <Link href="mailto:910jmiguel@gmail.com" className="text-stone-500 hover:text-stone-700 transition-colors">
              <Mail size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/910jmiguel/" className="text-stone-500 hover:text-stone-700 transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://github.com/910jmiguel" className="text-stone-500 hover:text-stone-700 transition-colors">
              <Github size={20} />
            </Link>
            <Link href="https://www.tiktok.com/@jmiguel.adv" className="text-stone-500 hover:text-stone-700 transition-colors">
              <TikTokIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

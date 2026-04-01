import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { TikTokIcon } from '@/app/ui/icons'

const Footer = () => {
  return (
    <footer className="bg-stone-100 py-8 border-t border-stone-200">
      <div className="container max-w-screen-lg mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--copper)' }} />
            <p className="text-sm text-stone-500">
              &copy; {new Date().getFullYear()} Miguel Advincula. All rights reserved.
            </p>
          </div>
          <div className="flex gap-x-4">
            {[
              { href: "mailto:910jmiguel@gmail.com", Icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/910jmiguel/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/910jmiguel", Icon: Github, label: "GitHub" },
            ].map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-700 transition-all duration-200 hover:bg-stone-200"
                aria-label={label}
              >
                <Icon size={18} />
              </Link>
            ))}
            <Link
              href="https://www.tiktok.com/@jmiguel.adv"
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 transition-all duration-200 hover:bg-stone-200"
              aria-label="TikTok"
            >
              <TikTokIcon size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { ArrowUpRight } from 'lucide-react'

interface LiveProjectButtonProps {
  href: string
  label?: string
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 ease-out hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  )
}

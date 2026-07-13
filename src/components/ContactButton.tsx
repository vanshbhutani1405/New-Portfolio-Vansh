interface ContactButtonProps {
  href?: string
  label?: string
}

export default function ContactButton({
  href = 'mailto:vanshbhutani2005@gmail.com',
  label = 'Contact Me',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className="inline-block rounded-full px-8 py-3 text-center text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}

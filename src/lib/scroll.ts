export function scrollToSection(id: string, reduceMotion = false) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

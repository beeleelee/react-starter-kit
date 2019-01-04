export function pwd() {
  const pathname = window.location.pathname
  const lastIdx = pathname.lastIndexOf('/')
  if (lastIdx === -1) return ''

  return pathname.substr(0, lastIdx + 1)
}
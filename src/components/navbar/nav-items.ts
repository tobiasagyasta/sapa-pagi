export const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
] as const

export const navCta = {
  label: "Order Now",
  href: "#order",
} as const

export type NavItem = (typeof navItems)[number]

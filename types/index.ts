// types/index.ts
export interface Company {
  name: string
  tagline: string
  description: string
  phone: string
  whatsapp: string
  email: string
  address: string
  operationalHours: string
  mapsEmbed: string
  social: {
    instagram: string
    facebook: string
    tiktok: string
  }
  stats: Stat[]
  vision: string
  mission: string[]
  history: string
  owner: Owner[]
}

export interface Stat {
  value: string
  label: string
}

export interface Owner {
  name: string
  position: string
  message: string
  photo: string
}

export interface Service {
  id: string
  title: string
  slug: string
  category: 'utama' | 'spesialis'
  badge: string | null
  image: string
  imageAlt: string
  description: string
  features: string[]
  whatsappMessage: string
  gallery?: string[] // <--- tambahkan ini
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  text: string
  service: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  author: string
  authorAvatar: string
  date: string
  category: string
  readTime: string
  content: string[]
}

export interface TeamMember {
  id: number
  name: string
  position: string
  avatar: string
  description: string
}
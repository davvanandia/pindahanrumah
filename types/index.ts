export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Company {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  mapsEmbedUrl: string;
  social: {
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}
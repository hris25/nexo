export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  address: string;
  surface: number;
  rooms: number;
  bedrooms: number;
  type: 'studio' | '2p' | '3p' | '4p+';
  furnished: boolean;
  images: string[];
  description: string;
  features: string[];
  transport: string[];
  matchScore: number;
  status: 'available' | 'contacted' | 'visited' | 'applied' | 'rejected';
  contactedAt?: string;
  visitDate?: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  preferences: {
    budget: { min: number; max: number };
    locations: string[];
    types: string[];
    furnished: boolean;
    transport: string[];
  };
  searchCriteria: string;
  messageTemplate: string;
  availability: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface Visit {
  id: string;
  propertyId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export const mockUser: User = {
  id: '1',
  name: 'Sarah Martin',
  email: 'sarah.martin@email.com',
  phone: '+33 6 12 34 56 78',
  avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  preferences: {
    budget: { min: 800, max: 1500 },
    locations: ['Paris 10ème', 'Paris 11ème', 'Paris 20ème'],
    types: ['2p', '3p'],
    furnished: true,
    transport: ['Métro', 'Bus']
  },
  searchCriteria: 'Je cherche un 2-3 pièces meublé près du métro à Paris',
  messageTemplate: 'Bonjour, je suis très intéressée par votre annonce. Pourrions-nous organiser une visite ?',
  availability: {
    weekdays: '18h-20h',
    saturday: '10h-18h',
    sunday: '14h-17h'
  }
};

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Bel appartement 3 pièces République',
    price: 1150,
    location: 'République',
    address: '15 rue de la République, 75011 Paris',
    surface: 65,
    rooms: 3,
    bedrooms: 2,
    type: '3p',
    furnished: true,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'
    ],
    description: 'Magnifique appartement entièrement rénové dans un immeuble haussmannien. Très lumineux avec vue dégagée.',
    features: ['Balcon', 'Parquet', 'Cuisine équipée', 'Salle de bain moderne'],
    transport: ['Métro République (3 min)', 'Bus 20, 65 (1 min)'],
    matchScore: 95,
    status: 'contacted',
    contactedAt: '2025-06-15T14:30:00Z',
    agent: {
      name: 'M. Dupont',
      phone: '06 12 34 56 78',
      email: 'dupont@agence.com'
    }
  },
  {
    id: '2',
    title: 'Studio moderne Bastille',
    price: 950,
    location: 'Bastille',
    address: '8 rue de la Bastille, 75011 Paris',
    surface: 35,
    rooms: 1,
    bedrooms: 0,
    type: 'studio',
    furnished: true,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    ],
    description: 'Studio moderne et fonctionnel, parfait pour un jeune professionnel.',
    features: ['Mezzanine', 'Cuisine américaine', 'Salle d\'eau'],
    transport: ['Métro Bastille (2 min)', 'Bus 69, 76 (1 min)'],
    matchScore: 78,
    status: 'available',
    agent: {
      name: 'Mme Leroy',
      phone: '06 98 76 54 32',
      email: 'leroy@agence.com'
    }
  },
  {
    id: '3',
    title: '2 pièces lumineux Belleville',
    price: 1200,
    location: 'Belleville',
    address: '25 rue de Belleville, 75020 Paris',
    surface: 45,
    rooms: 2,
    bedrooms: 1,
    type: '2p',
    furnished: false,
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
    ],
    description: 'Appartement lumineux avec vue sur Paris, dans un quartier dynamique.',
    features: ['Terrasse', 'Cave', 'Interphone'],
    transport: ['Métro Belleville (5 min)', 'Bus 26, 96 (2 min)'],
    matchScore: 85,
    status: 'visited',
    contactedAt: '2025-06-10T09:15:00Z',
    visitDate: '2025-06-18T19:00:00Z',
    agent: {
      name: 'M. Bernard',
      phone: '06 45 67 89 12',
      email: 'bernard@agence.com'
    }
  }
];

export const mockVisits: Visit[] = [
  {
    id: '1',
    propertyId: '1',
    date: '2025-06-17',
    time: '18:30',
    status: 'scheduled'
  },
  {
    id: '2',
    propertyId: '3',
    date: '2025-06-19',
    time: '19:00',
    status: 'scheduled'
  }
];

export const mockStats = {
  totalMatches: 12,
  messagesSent: 8,
  responses: 3,
  visitsScheduled: 2,
  applications: 1
};

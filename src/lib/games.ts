export interface Game {
  id: string;
  rank: number;
  name: string;
  slug: string;
  icon: string;
  downloads: string;
  bonus: string;
  minWithdrawal: string;
  description: string;
  rating: number;
  category: 'rummy' | 'teen-patti' | 'other';
  externalUrl: string;
  features: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
}

export const GAMES: Game[] = [
  // New Games from Client
  {
    id: 'teen-patti-gold',
    rank: 1,
    name: 'Teen Patti Gold',
    slug: 'teen-patti-gold',
    icon: '/teen-patti-gold.jpeg',
    downloads: '500K+',
    bonus: '₹200',
    minWithdrawal: '₹100',
    description: 'Get ₹200 FREE and Daily winnings up to ₹1 Lakh! Win ₹10000+ at home now!',
    rating: 5,
    category: 'teen-patti',
    externalUrl: 'https://tg2.my/BVIZPV/z55p4jn',
    features: [
      '₹200 FREE Welcome Bonus',
      'Daily winnings up to ₹1 Lakh',
      'Win ₹10000+ at home',
      '100% Safe Gaming',
      'Instant Withdrawal'
    ],
    seo: {
      title: 'Teen Patti Gold APK Download - Get ₹200 FREE & Win ₹1 Lakh Daily',
      description: 'Download Teen Patti Gold and get ₹200 FREE bonus. Win up to ₹1 Lakh daily with guaranteed ₹10000+ winnings at home!',
      keywords: ['teen patti gold', 'free bonus', 'daily winnings', 'real money games', 'teen patti'],
      ogTitle: 'Teen Patti Gold - ₹200 FREE + ₹1 Lakh Daily',
      ogDescription: 'Get ₹200 FREE and win up to ₹1 Lakh daily! Download Teen Patti Gold now.'
    }
  },
  {
    id: 'teenpatti-master',
    rank: 2,
    name: 'Teenpatti Master',
    slug: 'teenpatti-master',
    icon: '/teenpatti-master.jpeg',
    downloads: '750K+',
    bonus: '₹200',
    minWithdrawal: '₹100',
    description: 'Get ₹200 FREE and Daily winnings up to ₹1 Lakh! Win ₹10000+ at home now!',
    rating: 5,
    category: 'teen-patti',
    externalUrl: 'https://tp3.us/BVI07S/z55p4jn',
    features: [
      '₹200 FREE Welcome Bonus',
      'Daily winnings up to ₹1 Lakh',
      'Win ₹10000+ at home',
      '100% Safe Gaming',
      'Instant Withdrawal'
    ],
    seo: {
      title: 'Teenpatti Master APK Download - Get ₹200 FREE & Win ₹1 Lakh Daily',
      description: 'Download Teenpatti Master and get ₹200 FREE bonus. Win up to ₹1 Lakh daily with guaranteed ₹10000+ winnings at home!',
      keywords: ['teenpatti master', 'free bonus', 'daily winnings', 'real money games', 'teen patti'],
      ogTitle: 'Teenpatti Master - ₹200 FREE + ₹1 Lakh Daily',
      ogDescription: 'Get ₹200 FREE and win up to ₹1 Lakh daily! Download Teenpatti Master now.'
    }
  },
  {
    id: 'teen-patti-master',
    rank: 3,
    name: 'Teen Patti Master',
    slug: 'teen-patti-master',
    icon: '/teen-patti-master.jpeg',
    downloads: '1M+',
    bonus: '₹100',
    minWithdrawal: '₹200',
    description: 'Enjoy 30+ Great IPL, Teen Patti, Slots and Rummy Games! Get ₹100+ FREE and Daily winnings up to ₹1.6 Lakh',
    rating: 5,
    category: 'teen-patti',
    externalUrl: 'https://cp7.me/BVIX7V/z55p4jn',
    features: [
      '30+ Great Games',
      'IPL, Teen Patti, Slots & Rummy',
      '₹100+ FREE Bonus',
      'Daily winnings up to ₹1.6 Lakh',
      '100% Safe Gaming'
    ],
    seo: {
      title: 'Teen Patti Master APK Download - 30+ Games & ₹1.6 Lakh Daily',
      description: 'Download Teen Patti Master and enjoy 30+ great games including IPL, Teen Patti, Slots and Rummy. Get ₹100+ FREE and win up to ₹1.6 Lakh daily!',
      keywords: ['teen patti master', '30+ games', 'ipl games', 'teen patti', 'slots games', 'rummy games'],
      ogTitle: 'Teen Patti Master - 30+ Games & ₹1.6 Lakh Daily',
      ogDescription: 'Enjoy 30+ great games! Get ₹100+ FREE and win up to ₹1.6 Lakh daily.'
    }
  },
  {
    id: 'teen-patti-master-2025',
    rank: 4,
    name: 'Teen Patti Master 2025',
    slug: 'teen-patti-master-2025',
    icon: '/Teen-Patti-Master-2025.jpeg',
    downloads: '2M+',
    bonus: '₹9999',
    minWithdrawal: '₹500',
    description: 'India\'s New No.1 Slot Game! Sweet Bonanza Brings Crazy Payouts. Earn ₹9999+ Daily Guaranteed!',
    rating: 5,
    category: 'teen-patti',
    externalUrl: 'https://tp5.my/BVIXJ7/z55p4jn',
    features: [
      'India\'s No.1 Slot Game',
      'Sweet Bonanza Slots',
      'Poker & Cricket Sports',
      '₹9999+ Daily Guaranteed',
      'Crazy Payouts'
    ],
    seo: {
      title: 'Teen Patti Master 2025 APK Download - India\'s No.1 Slot Game',
      description: 'Download Teen Patti Master 2025, India\'s new No.1 slot game with crazy payouts. Earn ₹9999+ daily guaranteed with poker, cricket sports and more!',
      keywords: ['teen patti master 2025', 'india no.1 slot game', 'poker games', 'cricket sports', 'daily earnings'],
      ogTitle: 'Teen Patti Master 2025 - India\'s No.1 Slot Game',
      ogDescription: 'India\'s No.1 slot game with crazy payouts! Earn ₹9999+ daily guaranteed.'
    }
  },
  {
    id: 'crownbox',
    rank: 5,
    name: 'Crownbox',
    slug: 'crownbox',
    icon: '/Crownbox.jpeg',
    downloads: '1.5M+',
    bonus: '₹25000',
    minWithdrawal: '₹200',
    description: 'Mystery box products from the latest model in USA! EARN DAILY ABOVE 25000₹ EASILY!',
    rating: 5,
    category: 'other',
    externalUrl: 'https://cp7.me/BVUESM/z55p4jn',
    features: [
      'Earn Daily Above ₹25000',
      '100% Legit and Safe',
      'Instant Payment',
      '24/7 Customer Care',
      'Mystery Box Products'
    ],
    seo: {
      title: 'Crownbox APK Download - Earn Daily Above ₹25000 Easily',
      description: 'Download Crownbox and earn daily above ₹25000 easily! 100% legit and safe with instant payments and 24/7 customer care.',
      keywords: ['crownbox', 'earn daily', '25000 rupees', 'mystery box', 'instant payment'],
      ogTitle: 'Crownbox - Earn Daily Above ₹25000',
      ogDescription: 'Earn daily above ₹25000 easily! 100% legit and safe with instant payments.'
    }
  }
];

// Helper functions
export const getGameBySlug = (slug: string): Game | undefined => {
  return GAMES.find(game => game.slug === slug);
};

export const getGamesByCategory = (category: Game['category']): Game[] => {
  return GAMES.filter(game => game.category === category);
};

export const getTopGames = (limit: number = 6): Game[] => {
  return GAMES
    .sort((a, b) => a.rank - b.rank)
    .slice(0, limit);
};

export const getSuggestedGames = (currentGameId: string, limit: number = 4): Game[] => {
  return GAMES
    .filter(game => game.id !== currentGameId)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getGamesByRating = (minRating: number = 4): Game[] => {
  return GAMES.filter(game => game.rating >= minRating);
};

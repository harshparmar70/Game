// Temporary hard-coded data. In later phases this will come from the Spring Boot API.
// Each game uses a CSS gradient + emoji as a placeholder thumbnail (no imageURLs needed).
export const categories = ['All', 'Action', 'Puzzle', 'Racing', 'Sports',
    'Strategy', 'Arcade'
];

export const games = [{
        id: 1,
        title: 'Neon Runner',
        category: 'Action',
        plays: '1.2M',
        featured: true,
        icon: '🏃',
        colors: ['#7c3aed', '#06b6d4']
    },
    {
        id: 2,
        title: 'Block Puzzle',
        category: 'Puzzle',
        plays: '980K',
        featured: true,
        icon: '🧩',
        colors: ['#db2777', '#7c3aed']
    },
    {
        id: 3,
        title: 'Turbo Drift',
        category: 'Racing',
        plays: '2.1M',
        featured: true,
        icon: '🏎️',
        colors: ['#ea580c', '#db2777']
    },
    {
        id: 4,
        title: 'Galaxy Defender',
        category: 'Arcade',
        plays: '1.5M',
        featured: true,
        icon: '🚀',
        colors: ['#2563eb', '#7c3aed']
    },
    {
        id: 5,
        title: 'Kingdom Clash',
        category: 'Strategy',
        plays: '760K',
        featured: false,
        icon: '🏰',
        colors: ['#16a34a', '#0891b2']
    },
    {
        id: 6,
        title: 'Penalty Master',
        category: 'Sports',
        plays: '640K',
        featured: false,
        icon: '⚽',
        colors: ['#15803d', '#65a30d']
    },
    {
        id: 7,
        title: 'Shadow Ninja',
        category: 'Action',
        plays: '890K',
        featured: false,
        icon: '🥷',
        colors: ['#334155', '#7c3aed']
    },
    {
        id: 8,
        title: 'Word Quest',
        category: 'Puzzle',
        plays: '430K',
        featured: false,
        icon: '🔤',
        colors: ['#0ea5e9', '#6366f1']
    },
    {
        id: 9,
        title: 'Street Racer',
        category: 'Racing',
        plays: '1.1M',
        featured: false,
        icon: '🚗',
        colors: ['#dc2626', '#f59e0b']
    },
    {
        id: 10,
        title: 'Hoops Legend',
        category: 'Sports',
        plays: '510K',
        featured: false,
        icon: '🏀',
        colors: ['#c2410c', '#fbbf24']
    },
    {
        id: 11,
        title: 'Tower Wars',
        category: 'Strategy',
        plays: '690K',
        featured: false,
        icon: '🗼',
        colors: ['#7c3aed', '#be185d']
    },
    {
        id: 12,
        title: 'Pixel Pac Rush',
        category: 'Arcade',
        plays: '1.3M',
        featured: false,
        icon: '👾',
        colors: ['#06b6d4', '#22c55e']
    },
];
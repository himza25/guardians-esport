// ⚔️ GUARDIANS ESPORT - EMBER BLAZE PLAYER DATABASE
// Complete player statistics and information for the elite 7-member squad

console.log('📊 Loading Ember Blaze Player Database...');

// === EMBER BLAZE (EMBR) PLAYERS DATABASE ===
window.PLAYERS = {
  "besto-friendo": {
    id: "besto-friendo",
    name: "Besto Friendo",
    nameEmojis: "🧙‍♂️",
    role: "@MageMid",
    maxRank: "Mythic Glory – Rank 133",
    summary: "Calm, macro-aware mage main with a steady ~60% WR. National recognition on Lunox (#1 Morocco). Excels at burst & zone control (Yve, Lunox) with consistently high teamfight impact.",
    strengths: [
      "Elite Lunox/Yve execution → reliable late-game conversions",
      "Mid prio → strong map control & objective setups", 
      "Stable season-to-season performance"
    ],
    currentSeason: [
      {Hero: "Lunox", Power: 4026, Games: 153, WR: 58.8},
      {Hero: "Yve", Power: 4929, Games: 146, WR: 61.6},
      {Hero: "Esmeralda", Power: 2590, Games: 70, WR: 55.7},
      {Hero: "Odette", Power: 2085, Games: 25, WR: 56.0},
      {Hero: "Miya", Power: 2293, Games: 20, WR: 60.0}
    ],
    allTime: [
      {Hero: "Lylia", Power: 4509, Games: 1042, WR: 61.9},
      {Hero: "Miya", Power: 5043, Games: 866, WR: 63.3},
      {Hero: "Natalia", Power: 3184, Games: 765, WR: 61.3},
      {Hero: "Chang'e", Power: 4302, Games: 675, WR: 63.0},
      {Hero: "Zhask", Power: 4623, Games: 639, WR: 68.4}
    ]
  },

  "ziad-abbou": {
    id: "ziad-abbou", 
    name: "Ziad Abbou",
    nameEmojis: "🗡️",
    role: "@Jungler",
    maxRank: "Mythic Glory – Rank 103",
    summary: "11.8k+ games. Transitioned from pure mechanics (Fanny/Gusion) to strategic jungling (YSS). Strong objective control, still lethal on high-APM assassins.",
    strengths: [
      "Elite assassin mechanics; explosive mid-game tempo",
      "Smart pivot to YSS for safer macro wins",
      "Flexible carry paths (assassin → marksman jungle)"
    ],
    currentSeason: [
      {Hero: "Yi Sun-shin", Power: 1895, Games: 29, WR: 65.5},
      {Hero: "Fanny", Power: 1470, Games: 13, WR: 30.8},
      {Hero: "Joy", Power: 1499, Games: 8, WR: 62.5},
      {Hero: "Hayabusa", Power: 1525, Games: 7, WR: 42.9},
      {Hero: "X.Borg", Power: 1273, Games: 7, WR: 42.9}
    ],
    allTime: [
      {Hero: "Fanny", Power: 5173, Games: 2865, WR: 52.8},
      {Hero: "Gusion", Power: 4325, Games: 1598, WR: 55.3},
      {Hero: "Selena", Power: 3540, Games: 1043, WR: 57.4},
      {Hero: "Ling", Power: 4208, Games: 836, WR: 54.4},
      {Hero: "Lancelot", Power: 3721, Games: 716, WR: 56.3}
    ]
  },

  "kavex": {
    id: "kavex",
    name: "Kavex", 
    nameEmojis: "🏹",
    role: "@Carry",
    maxRank: "Mythic Glory ★112",
    summary: "15k+ games. Hyper-experienced carry with precise mechanics and stable high WR. Flexes between MM jungle/mid and Gold carry. Irithel Master (#7 Florida).",
    strengths: [
      "High seasonal WR (62–70%) across MM & assassin pool",
      "Great objective tempo and lane control",
      "Draft-friendly late-game DPS anchor"
    ],
    currentSeason: [
      {Hero: "Irithel", Power: 3343, Games: 70, WR: 68.6},
      {Hero: "Obsidia", Power: 3602, Games: 58, WR: 70.7},
      {Hero: "Kadita", Power: 2629, Games: 63, WR: 52.4},
      {Hero: "Natan", Power: 2495, Games: 54, WR: 61.1},
      {Hero: "Aurora", Power: 1548, Games: 33, WR: 45.5}
    ],
    allTime: [
      {Hero: "Granger", Power: 2664, Games: 703, WR: 60.6},
      {Hero: "Kimmy", Power: 3014, Games: 565, WR: 66.9},
      {Hero: "Chou", Power: 3378, Games: 556, WR: 54.5},
      {Hero: "Ling", Power: 2756, Games: 535, WR: 59.4},
      {Hero: "Gusion", Power: 3068, Games: 503, WR: 58.6}
    ]
  },

  "kirito-47": {
    id: "kirito-47",
    name: "KIRITO-47",
    nameEmojis: "⚔️", 
    role: "@Flex",
    maxRank: "Mythic Glory ★64",
    summary: "10k+ games. Ruby #2 regionally. Transitioned from Mage/Assassin pool to Fighter/Mage hybrid. Fills multiple core roles on demand.",
    strengths: [
      "Wide pool; easily plugs draft gaps",
      "60%+ WR on Ruby/Lunox/Clint/Harley",
      "Control and skirmish stability"
    ],
    currentSeason: [
      {Hero: "Ruby", Power: 2274, Games: 35, WR: 65.7},
      {Hero: "Lunox", Power: 2261, Games: 33, WR: 60.6},
      {Hero: "Clint", Power: 1883, Games: 19, WR: 63.2},
      {Hero: "Harley", Power: 1435, Games: 6, WR: 66.7},
      {Hero: "Yu Zhong", Power: 1445, Games: 5, WR: 60.0}
    ],
    allTime: [
      {Hero: "Selena", Power: 2052, Games: 481, WR: 51.6},
      {Hero: "Cecillion", Power: 4969, Games: 409, WR: 52.3},
      {Hero: "Gusion", Power: 1188, Games: 389, WR: 46.8},
      {Hero: "Yin", Power: 2221, Games: 340, WR: 58.8},
      {Hero: "Badang", Power: 1987, Games: 325, WR: 54.8}
    ]
  },

  "agha": {
    id: "agha",
    name: "Agha",
    nameEmojis: "🛡️",
    role: "@Tank", 
    maxRank: "Mythic Glory",
    summary: "Veteran with very wide pool. Regional X.Borg #1. Significant seasonal WR spike on mobile supports (Angela/Hilda) and fighter/jungle picks.",
    strengths: [
      "Covers tank/support/fighter/mage on demand",
      "High seasonal WR on Angela/Hilda/Roger/Fredrinn",
      "Strong engage or peel depending on draft"
    ],
    currentSeason: [
      {Hero: "X.Borg", Power: 1656, Games: 32, WR: 53.1},
      {Hero: "Angela", Power: 2089, Games: 22, WR: 72.7},
      {Hero: "Grock", Power: 2060, Games: 22, WR: 59.1},
      {Hero: "Roger", Power: 2092, Games: 19, WR: 63.2},
      {Hero: "Fredrinn", Power: 2230, Games: 12, WR: 66.7}
    ],
    allTime: [
      {Hero: "Franco", Power: 2791, Games: 958, WR: 48.6},
      {Hero: "Paquito", Power: 3995, Games: 834, WR: 43.2},
      {Hero: "Johnson", Power: 3178, Games: 690, WR: 58.0},
      {Hero: "Harley", Power: 6010, Games: 685, WR: 51.4},
      {Hero: "Guinevere", Power: 3694, Games: 663, WR: 49.8}
    ]
  },

  "wale-zer": {
    id: "wale-zer",
    name: "wale zer",
    nameEmojis: "🎯",
    role: "@Marksman",
    maxRank: "Mythic Glory ★89", 
    summary: "Precise marksman with strong positioning and consistent damage output. Specializes in late-game carries and teamfight positioning.",
    strengths: [
      "Exceptional positioning and kiting mechanics",
      "High damage per minute in teamfights",
      "Strong survival instincts and map awareness"
    ],
    currentSeason: [
      {Hero: "Clint", Power: 2341, Games: 87, WR: 59.8},
      {Hero: "Alpha", Power: 2117, Games: 8, WR: 75.0},
      {Hero: "Julian", Power: 1791, Games: 7, WR: 57.1},
      {Hero: "Granger", Power: 1669, Games: 9, WR: 55.6},
      {Hero: "Thamuz", Power: 1230, Games: 6, WR: 66.7}
    ],
    allTime: [
      {Hero: "Clint", Power: 7427, Games: 499, WR: 61.1},
      {Hero: "Alpha", Power: 2117, Games: 86, WR: 68.6},
      {Hero: "Gatotkaca", Power: 2946, Games: 73, WR: 54.8},
      {Hero: "Julian", Power: 2186, Games: 49, WR: 83.7},
      {Hero: "Roger", Power: 2432, Games: 44, WR: 56.2}
    ]
  },

  "yomama-123": {
    id: "yomama-123",
    name: "yomama 123", 
    nameEmojis: "💎",
    role: "@Support",
    maxRank: "Mythic Glory ★45",
    summary: "Strategic support specialist with excellent map control and team coordination. Focuses on vision control and utility picks that enable team success.",
    strengths: [
      "Superior map awareness and vision control",
      "Exceptional team coordination and communication", 
      "Clutch saves and game-changing utility plays"
    ],
    currentSeason: [
      {Hero: "Angela", Power: 2456, Games: 67, WR: 68.7},
      {Hero: "Mathilda", Power: 2134, Games: 45, WR: 64.4},
      {Hero: "Floryn", Power: 1823, Games: 32, WR: 62.5},
      {Hero: "Estes", Power: 1987, Games: 28, WR: 71.4},
      {Hero: "Rafaela", Power: 1654, Games: 22, WR: 59.1}
    ],
    allTime: [
      {Hero: "Angela", Power: 4567, Games: 523, WR: 65.2},
      {Hero: "Mathilda", Power: 3891, Games: 412, WR: 61.9},
      {Hero: "Estes", Power: 3456, Games: 387, WR: 68.5},
      {Hero: "Floryn", Power: 2987, Games: 298, WR: 63.8},
      {Hero: "Rafaela", Power: 2654, Games: 267, WR: 59.6}
    ]
  }
};

// === TEAM METADATA ===
window.TEAM_INFO = {
  name: "Ember Blaze",
  tag: "EMBR",
  tier: "S+",
  memberCount: 7,
  averageWinRate: 64.8,
  totalGames: 15247,
  specialties: ["Macro Control", "Late Game", "Team Fights"],
  region: "Morocco",
  organization: "Guardians Esport"
};

// === UTILITY FUNCTIONS ===
window.PlayerUtils = {
  // Get all players as array
  getAllPlayers: () => {
    return Object.values(window.PLAYERS);
  },

  // Get player by ID
  getPlayer: (id) => {
    return window.PLAYERS[id] || null;
  },

  // Get players by role
  getPlayersByRole: (role) => {
    return Object.values(window.PLAYERS).filter(player => 
      player.role.toLowerCase().includes(role.toLowerCase())
    );
  },

  // Calculate team stats
  getTeamStats: () => {
    const players = Object.values(window.PLAYERS);
    
    const totalCurrentSeasonGames = players.reduce((sum, player) => {
      return sum + (player.currentSeason?.length || 0);
    }, 0);

    const totalAllTimeGames = players.reduce((sum, player) => {
      return sum + (player.allTime?.length || 0);
    }, 0);

    const avgWinRates = players.map(player => {
      if (!player.currentSeason || player.currentSeason.length === 0) return 0;
      const totalWR = player.currentSeason.reduce((sum, stat) => {
        const wr = parseFloat(stat.WR);
        return sum + (isNaN(wr) ? 0 : wr);
      }, 0);
      return totalWR / player.currentSeason.length;
    }).filter(wr => wr > 0);

    const teamAvgWR = avgWinRates.length > 0 
      ? avgWinRates.reduce((sum, wr) => sum + wr, 0) / avgWinRates.length 
      : 0;

    return {
      playerCount: players.length,
      totalCurrentSeasonHeroes: totalCurrentSeasonGames,
      totalAllTimeHeroes: totalAllTimeGames,
      averageWinRate: Math.round(teamAvgWR * 10) / 10
    };
  },

  // Get top heroes by win rate
  getTopHeroesByWinRate: (limit = 10) => {
    const allStats = [];
    
    Object.values(window.PLAYERS).forEach(player => {
      if (player.currentSeason) {
        player.currentSeason.forEach(stat => {
          allStats.push({
            ...stat,
            playerName: player.name,
            playerId: player.id
          });
        });
      }
    });

    return allStats
      .filter(stat => !isNaN(parseFloat(stat.WR)) && stat.Games >= 5)
      .sort((a, b) => parseFloat(b.WR) - parseFloat(a.WR))
      .slice(0, limit);
  },

  // Get role distribution
  getRoleDistribution: () => {
    const players = Object.values(window.PLAYERS);
    const roles = {};
    
    players.forEach(player => {
      const role = player.role.replace('@', '');
      roles[role] = (roles[role] || 0) + 1;
    });

    return roles;
  },

  // Search players
  searchPlayers: (query) => {
    const searchTerm = query.toLowerCase();
    return Object.values(window.PLAYERS).filter(player => 
      player.name.toLowerCase().includes(searchTerm) ||
      player.role.toLowerCase().includes(searchTerm) ||
      player.summary.toLowerCase().includes(searchTerm)
    );
  }
};

// === DATA VALIDATION ===
const validatePlayerData = () => {
  console.log('🔍 Validating player data...');
  
  const players = Object.values(window.PLAYERS);
  const issues = [];

  players.forEach(player => {
    if (!player.id || !player.name || !player.role) {
      issues.push(`Missing basic info for player: ${player.name || 'Unknown'}`);
    }
    
    if (!player.currentSeason || !Array.isArray(player.currentSeason)) {
      issues.push(`Missing current season data for: ${player.name}`);
    }
    
    if (!player.allTime || !Array.isArray(player.allTime)) {
      issues.push(`Missing all-time data for: ${player.name}`);
    }
  });

  if (issues.length > 0) {
    console.warn('⚠️ Player data validation issues:', issues);
  } else {
    console.log('✅ Player data validation passed');
  }

  return issues.length === 0;
};

// === INITIALIZATION ===
console.log('📊 Ember Blaze Player Database Loaded');
console.log(`👥 ${Object.keys(window.PLAYERS).length} players loaded`);
console.log('🔧 Team utilities available as window.PlayerUtils');

// Validate data
validatePlayerData();

// Log team stats
const teamStats = window.PlayerUtils.getTeamStats();
console.log('📈 Team Statistics:', teamStats);

// Export for debugging
window.GuardiansData = {
  players: window.PLAYERS,
  teamInfo: window.TEAM_INFO,
  utils: window.PlayerUtils,
  validate: validatePlayerData
};

console.log('🛡️ Guardians Esport Player Database Ready');
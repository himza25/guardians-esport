// ⚔️ GUARDIANS ESPORT - MAIN APPLICATION SCRIPT
// Navigation, animations, player profiles, and statistics management

console.log('🛡️ Guardians Esport App Loading...');

// === GLOBAL STATE ===
let currentFilter = '';
let currentTab = 'opponents';
let isDebugMode = true; // For debugging

// === UTILITY FUNCTIONS ===
const utils = {
  // Get URL parameters
  getUrlParameter: (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  // Debug logger
  debug: (message, data = null) => {
    if (isDebugMode) {
      console.log(`🔧 DEBUG: ${message}`, data || '');
    }
  },

  // Safe DOM element getter
  getElement: (selector) => {
    const element = document.querySelector(selector);
    if (!element && isDebugMode) {
      console.warn(`⚠️ Element not found: ${selector}`);
    }
    return element;
  },

  // Safe element setter
  setElementContent: (selector, content) => {
    const element = utils.getElement(selector);
    if (element) {
      element.innerHTML = content;
      return true;
    }
    return false;
  },

  // Safe element text setter
  setElementText: (selector, text) => {
    const element = utils.getElement(selector);
    if (element) {
      element.textContent = text;
      return true;
    }
    return false;
  },

  // Get player initials from name
  getPlayerInitials: (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  },

  // Format numbers with commas
  formatNumber: (num) => {
    return num.toLocaleString();
  },

  // Get win rate class for styling
  getWinRateClass: (winRate) => {
    if (winRate === "—" || winRate === undefined || winRate === null) {
      return 'wr-warning';
    }
    const wr = parseFloat(winRate);
    if (isNaN(wr)) return 'wr-warning';
    if (wr >= 60) return 'wr-success';
    if (wr >= 50) return 'wr-warning';
    return 'wr-danger';
  },

  // Format win rate display
  formatWinRate: (winRate) => {
    if (winRate === "—" || winRate === undefined || winRate === null) {
      return "—";
    }
    const wr = parseFloat(winRate);
    if (isNaN(wr)) return "—";
    return `${wr}%`;
  }
};

// === NAVIGATION SYSTEM ===
const navigation = {
  init: () => {
    utils.debug('Initializing navigation');
    
    // Mobile menu toggle
    const mobileToggle = utils.getElement('.mobile-menu-toggle');
    const navList = utils.getElement('.nav-list');
    
    if (mobileToggle && navList) {
      mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
      });
    }

    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });

    // Set active nav link based on current page
    navigation.setActiveNavLink();
  },

  setActiveNavLink: () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (
        (currentPage === 'index.html' && (href === '/' || href === 'index.html')) ||
        (currentPage !== 'index.html' && href.includes(currentPage))
      ) {
        link.classList.add('active');
      }
    });
  }
};

// === ANIMATION SYSTEM ===
const animations = {
  init: () => {
    utils.debug('Initializing animations');
    animations.observeElements();
    animations.initParticles();
  },

  observeElements: () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe cards and sections
    const elementsToObserve = document.querySelectorAll(
      '.player-card, .team-highlight-card, .analytics-card, .stat-card, .opponent-card'
    );
    
    elementsToObserve.forEach(el => observer.observe(el));
  },

  initParticles: () => {
    // Create floating particles effect
    const particlesContainer = utils.getElement('.hero-particles');
    if (particlesContainer) {
      // Particles are now handled via CSS animations
      utils.debug('Particles initialized via CSS');
    }
  },

  staggerCards: (selector, delay = 100) => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * delay);
    });
  }
};

// === TAB SYSTEM ===
const tabs = {
  init: () => {
    utils.debug('Initializing tab system');
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        tabs.switchTab(targetTab);
      });
    });
  },

  switchTab: (targetTab) => {
    utils.debug(`Switching to tab: ${targetTab}`);
    
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const activeButton = utils.getElement(`[data-tab="${targetTab}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    const activeContent = utils.getElement(`#${targetTab}-tab`);
    if (activeContent) {
      activeContent.classList.add('active');
    }

    currentTab = targetTab;
  }
};

// === SEARCH SYSTEM ===
const search = {
  init: () => {
    utils.debug('Initializing search system');
    
    const searchInput = utils.getElement('#player-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentFilter = e.target.value.toLowerCase();
        search.filterPlayers();
      });
    }
  },

  filterPlayers: () => {
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
      const playerName = card.querySelector('.player-name')?.textContent.toLowerCase() || '';
      const playerRole = card.querySelector('.player-role')?.textContent.toLowerCase() || '';
      
      const matchesFilter = playerName.includes(currentFilter) || 
                           playerRole.includes(currentFilter) ||
                           currentFilter === '';
      
      if (matchesFilter) {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.display = 'none';
      }
    });
  }
};

// === PLAYER SYSTEM ===
const players = {
  init: () => {
    utils.debug('Initializing player system');
    
    // Check if we're on the squad page
    if (window.location.pathname.includes('squad.html') || 
        document.querySelector('#players-grid')) {
      players.loadPlayersGrid();
    }
    
    // Check if we're on a player profile page
    if (window.location.pathname.includes('player.html') || 
        document.querySelector('.player-profile')) {
      players.loadPlayerProfile();
    }
  },

  loadPlayersGrid: () => {
    utils.debug('Loading players grid');
    
    const playersGrid = utils.getElement('#players-grid');
    if (!playersGrid) {
      utils.debug('Players grid container not found');
      return;
    }

    if (!window.PLAYERS) {
      utils.debug('PLAYERS data not available');
      playersGrid.innerHTML = '<div class="error-message">Players data not available</div>';
      return;
    }

    const playersArray = Object.values(window.PLAYERS);
    utils.debug(`Loading ${playersArray.length} players`);

    playersGrid.innerHTML = playersArray.map(player => players.createPlayerCard(player)).join('');
    
    // Add click handlers
    playersGrid.querySelectorAll('.player-card').forEach(card => {
      card.addEventListener('click', () => {
        const playerId = card.getAttribute('data-player-id');
        if (playerId) {
          window.location.href = `player.html?id=${playerId}`;
        }
      });
    });

    // Animate cards
    setTimeout(() => {
      animations.staggerCards('.player-card', 150);
    }, 100);
  },

  createPlayerCard: (player) => {
    const initials = utils.getPlayerInitials(player.name);
    const currentSeasonGames = player.currentSeason?.length || 0;
    const allTimeGames = player.allTime?.length || 0;
    
    // Calculate average win rate from current season
    let avgWinRate = "—";
    if (player.currentSeason && player.currentSeason.length > 0) {
      const totalWR = player.currentSeason.reduce((sum, stat) => {
        const wr = parseFloat(stat.WR);
        return sum + (isNaN(wr) ? 0 : wr);
      }, 0);
      avgWinRate = (totalWR / player.currentSeason.length).toFixed(1);
    }

    return `
      <div class="player-card" data-player-id="${player.id}">
        <div class="player-header">
          <div class="player-avatar">
            <span class="player-initials">${initials}</span>
          </div>
          <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-role">${player.role}</p>
          </div>
        </div>
        
        <div class="player-rank">
          ${player.maxRank}
        </div>
        
        <div class="player-stats">
          <div class="stat-box">
            <span class="stat-value">${avgWinRate}%</span>
            <span class="stat-label">Avg WR</span>
          </div>
          <div class="stat-box">
            <span class="stat-value">${currentSeasonGames}</span>
            <span class="stat-label">Heroes</span>
          </div>
        </div>
        
        <div class="player-summary">
          ${player.summary.substring(0, 120)}...
        </div>
        
        <div class="player-cta">
          <button class="btn-player">View Profile</button>
        </div>
      </div>
    `;
  },

  loadPlayerProfile: () => {
    utils.debug('Loading player profile');
    
    const playerId = utils.getUrlParameter('id');
    utils.debug(`Player ID from URL: ${playerId}`);
    
    const loadingState = utils.getElement('#loading-state');
    const errorState = utils.getElement('#error-state');
    const playerContent = utils.getElement('#player-content');
    
    if (!playerId) {
      utils.debug('No player ID provided');
      players.showError('No player ID provided');
      return;
    }

    // Check if PLAYERS data is available
    if (!window.PLAYERS) {
      utils.debug('PLAYERS data not available, retrying...');
      // Try to load players data
      setTimeout(() => {
        if (window.PLAYERS) {
          players.loadPlayerProfile();
        } else {
          players.showError('Player data not available');
        }
      }, 500);
      return;
    }

    const player = window.PLAYERS[playerId];
    utils.debug('Player data:', player);
    
    if (!player) {
      utils.debug(`Player not found: ${playerId}`);
      players.showError('Player not found');
      return;
    }

    // Hide loading, show content
    if (loadingState) loadingState.style.display = 'none';
    if (errorState) errorState.style.display = 'none';
    if (playerContent) playerContent.style.display = 'block';

    // Update page metadata
    players.updatePageMetadata(player);

    // Load player data
    players.loadPlayerData(player);
    
    // Load statistics tables
    players.loadStatistics(player);
  },

  showError: (message) => {
    const loadingState = utils.getElement('#loading-state');
    const errorState = utils.getElement('#error-state');
    const playerContent = utils.getElement('#player-content');
    
    if (loadingState) loadingState.style.display = 'none';
    if (playerContent) playerContent.style.display = 'none';
    if (errorState) {
      errorState.style.display = 'block';
      const errorContent = errorState.querySelector('.error-content h2');
      if (errorContent) {
        errorContent.textContent = message;
      }
    }
  },

  updatePageMetadata: (player) => {
    const title = `${player.name} - ${player.role} - Guardians Esport`;
    const description = `Detailed profile and statistics for ${player.name}, ${player.role} player for Guardians Esport Ember Blaze squad.`;
    
    // Update document title
    document.title = title;
    
    // Update meta tags
    utils.setElementContent('#page-title', title);
    utils.setElementContent('#page-description', description);
    utils.setElementContent('#og-title', title);
    utils.setElementContent('#og-description', description);
  },

  loadPlayerData: (player) => {
    utils.debug('Loading player data for:', player.name);
    
    // Update header information
    utils.setElementText('#player-emojis', player.nameEmojis || '⚔️');
    utils.setElementText('#player-name', player.name);
    utils.setElementText('#player-role', player.role);
    utils.setElementText('#max-rank-text', player.maxRank);
    
    // Update summary
    utils.setElementText('#player-summary', player.summary);
    
    // Update strengths
    const strengthsList = utils.getElement('#player-strengths');
    if (strengthsList && player.strengths) {
      strengthsList.innerHTML = player.strengths
        .map(strength => `<li>${strength}</li>`)
        .join('');
    }
  },

  loadStatistics: (player) => {
    utils.debug('Loading statistics for:', player.name);
    
    // Load current season stats
    players.loadStatsTable(
      '#current-season-tbody', 
      player.currentSeason,
      'Current Season'
    );
    
    // Load all-time stats
    players.loadStatsTable(
      '#all-time-tbody', 
      player.allTime,
      'All-Time'
    );
  },

  loadStatsTable: (tableSelector, statsData, tableName) => {
    utils.debug(`Loading ${tableName} statistics table: ${tableSelector}`);
    
    const tbody = utils.getElement(tableSelector);
    if (!tbody) {
      utils.debug(`Table body not found: ${tableSelector}`);
      return;
    }

    if (!statsData || !Array.isArray(statsData) || statsData.length === 0) {
      utils.debug(`No statistics data available for ${tableName}`);
      tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align: center; padding: 2rem; color: var(--text-muted);">
            No statistics available
          </td>
        </tr>
      `;
      return;
    }

    utils.debug(`Loading ${statsData.length} stats for ${tableName}`);

    // Clear existing content
    tbody.innerHTML = '';

    // Generate table rows
    statsData.forEach((stat, index) => {
      const row = document.createElement('tr');
      
      const winRateClass = utils.getWinRateClass(stat.WR);
      const winRateDisplay = utils.formatWinRate(stat.WR);
      const powerFormatted = utils.formatNumber(stat.Power);
      
      row.innerHTML = `
        <td><strong>${stat.Hero}</strong></td>
        <td>${powerFormatted}</td>
        <td>${stat.Games}</td>
        <td><span class="wr-badge ${winRateClass}">${winRateDisplay}</span></td>
      `;
      
      tbody.appendChild(row);
      
      utils.debug(`Added row ${index + 1}: ${stat.Hero} - ${winRateDisplay} WR`);
    });

    utils.debug(`Successfully loaded ${statsData.length} rows for ${tableName}`);
  }
};

// === LOADING AND INITIALIZATION ===
const app = {
  init: () => {
    utils.debug('Initializing Guardians Esport App');
    
    // Wait for DOM and PLAYERS data
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', app.start);
    } else {
      app.start();
    }
  },

  start: () => {
    utils.debug('Starting application components');
    
    // Initialize core systems
    navigation.init();
    animations.init();
    tabs.init();
    search.init();
    
    // Initialize player system (with data check)
    app.initializeWithPlayerData();
    
    // Add smooth scrolling
    app.addSmoothScrolling();
    
    // Add loading states
    app.handleLoadingStates();
    
    utils.debug('✅ Guardians Esport App fully initialized');
  },

  initializeWithPlayerData: () => {
    // Check if PLAYERS data is available
    if (window.PLAYERS) {
      utils.debug('PLAYERS data available, initializing player system');
      players.init();
    } else {
      utils.debug('PLAYERS data not available yet, waiting...');
      // Wait for players.js to load
      const checkForPlayers = setInterval(() => {
        if (window.PLAYERS) {
          clearInterval(checkForPlayers);
          utils.debug('PLAYERS data loaded, initializing player system');
          players.init();
        }
      }, 100);
      
      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkForPlayers);
        if (!window.PLAYERS) {
          utils.debug('❌ PLAYERS data failed to load after 5 seconds');
        }
      }, 5000);
    }
  },

  addSmoothScrolling: () => {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  handleLoadingStates: () => {
    // Add loading classes for better UX
    document.body.classList.add('app-loaded');
    
    // Handle image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
      }
    });
  }
};

// === DEBUG FUNCTIONS (for testing) ===
window.GuardiansDebug = {
  checkPlayers: () => {
    console.log('🔍 PLAYERS Object:', window.PLAYERS);
    if (window.PLAYERS) {
      console.log(`📊 Players Count: ${Object.keys(window.PLAYERS).length}`);
      Object.keys(window.PLAYERS).forEach(id => {
        const player = window.PLAYERS[id];
        console.log(`👤 ${id}: ${player.name} (${player.currentSeason?.length || 0} current season stats)`);
      });
    } else {
      console.log('❌ PLAYERS data not available');
    }
  },
  
  testPlayerProfile: (playerId) => {
    if (window.PLAYERS && window.PLAYERS[playerId]) {
      console.log('🎯 Player Profile Test:', window.PLAYERS[playerId]);
      return window.PLAYERS[playerId];
    } else {
      console.log(`❌ Player not found: ${playerId}`);
      return null;
    }
  },
  
  reloadPlayers: () => {
    console.log('🔄 Reloading player system...');
    players.init();
  },
  
  toggleDebug: () => {
    isDebugMode = !isDebugMode;
    console.log(`🔧 Debug mode: ${isDebugMode ? 'ON' : 'OFF'}`);
  }
};

// === CSS ANIMATIONS (added via JavaScript) ===
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    animation: slideInUp 0.6s ease-out forwards;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .player-card, .team-highlight-card, .analytics-card, .stat-card, .opponent-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  
  .app-loaded .player-card,
  .app-loaded .team-highlight-card,
  .app-loaded .analytics-card,
  .app-loaded .stat-card,
  .app-loaded .opponent-card {
    opacity: 1;
    transform: translateY(0);
  }
  
  img {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  
  img.loaded {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .nav-list.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(2, 14, 31, 0.98);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(214, 158, 45, 0.3);
      padding: 1rem;
      gap: 0.5rem;
    }
  }
`;
document.head.appendChild(style);

// === START APPLICATION ===
utils.debug('🚀 Guardians Esport App Script Loaded');
app.init();
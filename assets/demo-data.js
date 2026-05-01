window.BITAKIBA_DEMO = {
  users: {
    amara: {
      name: 'Amara Wangari',
      email: 'amara@bitakiba.demo',
      password: 'demo123',
      balance: 24500,
      savings: 6850,
      totalIn: 68400,
      language: 'sw',
      userType: 'trader',
      isPremium: false,
      savingsRate: 10,
      unlockDate: '2026-06-01',
      wallet: null,
      transactions: [
        { type: 'in', title: 'Market sale payment', date: '1 May 2026', amount: 8400, saved: 840 },
        { type: 'in', title: 'Instagram order', date: '30 Apr 2026', amount: 5600, saved: 560 },
        { type: 'out', title: 'Savings withdrawal', date: '28 Apr 2026', amount: 2000, saved: 0 },
        { type: 'in', title: 'Customer QR payment', date: '27 Apr 2026', amount: 12000, saved: 1200 }
      ]
    },
    juma: {
      name: 'Juma Otieno',
      email: 'juma@bitakiba.demo',
      password: 'demo123',
      balance: 18300,
      savings: 4200,
      totalIn: 39200,
      language: 'en',
      userType: 'freelancer',
      isPremium: false,
      savingsRate: 10,
      unlockDate: '2026-05-18',
      wallet: null,
      transactions: [
        { type: 'in', title: 'Boda delivery payout', date: '1 May 2026', amount: 3200, saved: 320 },
        { type: 'in', title: 'Cash converted to wallet', date: '29 Apr 2026', amount: 10000, saved: 1000 },
        { type: 'out', title: 'Airtime purchase', date: '29 Apr 2026', amount: 500, saved: 0 }
      ]
    },
    aisha: {
      name: 'Aisha Ndlovu',
      email: 'aisha@bitakiba.demo',
      password: 'demo123',
      balance: 31200,
      savings: 9400,
      totalIn: 82100,
      language: 'zu',
      userType: 'seller',
      isPremium: true,
      savingsRate: 8,
      unlockDate: '2026-04-20',
      wallet: null,
      transactions: [
        { type: 'in', title: 'Wholesale stock sale', date: '1 May 2026', amount: 18500, saved: 1850 },
        { type: 'in', title: 'WhatsApp customer', date: '30 Apr 2026', amount: 7400, saved: 740 },
        { type: 'in', title: 'Lightning invoice paid', date: '26 Apr 2026', amount: 9200, saved: 920 }
      ]
    }
  },
  translations: {
    en: 'Receive money. Save automatically.',
    sw: 'Pokea pesa. Weka akiba kiotomatiki.',
    fr: 'Recevez de l’argent. Épargnez automatiquement.',
    zu: 'Thola imali. Yonga ngokuzenzakalelayo.'
  },
  languages: {
    en: 'English',
    sw: 'Swahili',
    fr: 'French',
    zu: 'Zulu'
  },
  wallets: [
    {
      id: 'browser',
      name: 'Browser Wallet',
      icon: '🦊',
      type: 'Injected wallet',
      description: 'Connect MetaMask or another browser-injected wallet if installed.',
      demoAddress: '0x8F21...B7A9',
      network: 'Ethereum Sepolia demo',
      otp: '123456',
      demoBalance: 24500,
      permissions: ['Read wallet balance', 'Request account address', 'Create receive requests', 'Sync savings activity'],
      handshake: ['Checking browser wallet provider', 'Requesting demo account access', 'Confirming secure session']
    },
    {
      id: 'lnbits',
      name: 'LNbits',
      icon: '⚡',
      type: 'Lightning wallet',
      description: 'Demo self-hosted Lightning wallet connection with invoices enabled.',
      demoAddress: 'lnbits_demo_akiba_001',
      network: 'Lightning Testnet',
      otp: '246810',
      demoBalance: 18600,
      permissions: ['Read Lightning balance', 'Create invoices', 'Receive payment webhooks', 'Auto-save payment split'],
      handshake: ['Creating LNbits demo API key', 'Testing invoice endpoint', 'Registering BitAkiba webhook']
    },
    {
      id: 'breez',
      name: 'Breez SDK',
      icon: '🌬️',
      type: 'Non-custodial Lightning',
      description: 'Demo mobile Lightning wallet setup for receive and save flows.',
      demoAddress: 'breez_node_03fd...91ac',
      network: 'Breez Greenlight demo',
      otp: '135790',
      demoBalance: 31200,
      permissions: ['Read node status', 'Create Lightning invoices', 'Estimate routing fees', 'Enable savings notifications'],
      handshake: ['Starting Breez SDK demo node', 'Opening receive channel', 'Testing Lightning invoice']
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: '🔗',
      type: 'Universal connector',
      description: 'Demo session for connecting compatible wallets through QR pairing.',
      demoAddress: 'wc:bitakiba-demo-session',
      network: 'WalletConnect demo relay',
      otp: '112233',
      demoBalance: 42800,
      permissions: ['Create pairing session', 'Read selected account', 'Request payment approval', 'Sync wallet status'],
      handshake: ['Generating pairing URI', 'Waiting for wallet approval', 'Saving encrypted session']
    },
    {
      id: 'mpesa',
      name: 'M-Pesa Bridge',
      icon: '📱',
      type: 'Fiat bridge',
      description: 'Demo bridge account for local mobile-money top ups and withdrawals.',
      demoAddress: '+254 700 123 456',
      network: 'Safaricom sandbox demo',
      otp: '445566',
      demoBalance: 15750,
      permissions: ['Verify phone number', 'Read bridge balance', 'Create withdrawal request', 'Notify successful deposits'],
      handshake: ['Sending sandbox STK check', 'Verifying phone bridge', 'Activating deposit notifications']
    }
  ]
};

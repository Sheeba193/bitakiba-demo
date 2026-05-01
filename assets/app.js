const demo = window.BITAKIBA_DEMO;

const state = {
  authMode: 'signup',
  user: null,
  wallet: null,
  setup: {
    wallet: null,
    step: 0,
    permissionsAccepted: false,
    accountAddress: null
  },
  pendingPayment: null
};

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const fmt = amount => `KES ${Number(amount).toLocaleString()}`;
const btc = amount => `≈ ${(Number(amount) / 14500000).toFixed(7)} BTC`;

function toast(message, type = '') {
  const el = $('#toast');
  el.textContent = message;
  el.className = `toast show ${type}`.trim();
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2800);
}

function showPage(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;
  $$('.page').forEach(pageEl => pageEl.classList.remove('active'));
  page.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showScreen(screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;
  $$('.screen').forEach(item => item.classList.remove('active'));
  $$('.side-link[data-screen]').forEach(item => item.classList.toggle('active', item.dataset.screen === screenId));
  screen.classList.add('active');
}

function setAuthMode(mode) {
  state.authMode = mode;
  $('#auth-title').textContent = mode === 'signup' ? 'Create your demo account' : 'Log in to BitAkiba';
  $('#auth-submit').textContent = mode === 'signup' ? 'Create account' : 'Log in';
  $('#name-field').classList.toggle('hidden', mode === 'login');
  $('#signup-tab').classList.toggle('active', mode === 'signup');
  $('#login-tab').classList.toggle('active', mode === 'login');
}

function startAuth(mode) {
  setAuthMode(mode);
  showPage('auth');
}

function userFromForm() {
  const name = $('#name').value.trim() || 'Demo User';
  const email = $('#email').value.trim().toLowerCase();
  const password = $('#password').value.trim();
  const language = $('#language').value;
  const userType = $('#user-type').value;
  if (!email || !password) throw new Error('Enter your email and password.');
  if (password.length < 6) throw new Error('Password must be at least 6 characters.');
  const existing = Object.values(demo.users).find(user => user.email.toLowerCase() === email);
  if (state.authMode === 'login') {
    if (!existing) throw new Error('Demo user not found. Try Amara, Juma, or Aisha.');
    return structuredCloneSafe(existing);
  }
  return {
    name,
    email,
    password,
    balance: 12500,
    savings: 1500,
    totalIn: 14000,
    language,
    userType,
    isPremium: false,
    savingsRate: 10,
    unlockDate: '2026-06-01',
    wallet: null,
    transactions: [
      { type: 'in', title: 'Welcome demo payment', date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }), amount: 14000, saved: 1500 }
    ]
  };
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

function signIn(user) {
  state.user = user;
  state.wallet = user.wallet || null;
  renderDashboard();
  showPage('demo');
  showScreen('overview');
  toast(`Authenticated as ${user.email}`, 'success');
}

function signInDemo(key) {
  const user = demo.users[key];
  if (!user) return;
  $('#name').value = user.name;
  $('#email').value = user.email;
  $('#password').value = user.password;
  signIn(structuredCloneSafe(user));
}

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'DU';
}

function renderDashboard() {
  const user = state.user || demo.users.amara;
  $('#user-name').textContent = user.name;
  $('#user-email').textContent = user.email;
  $('#profile-name').textContent = user.name;
  $('#profile-email').textContent = user.email;
  $('#avatar').textContent = initials(user.name);
  $('#hero-email').textContent = user.email;
  $('#balance').textContent = fmt(user.balance);
  $('#btc-balance').textContent = btc(user.balance);
  $('#savings').textContent = fmt(user.savings);
  $('#vault-balance').textContent = fmt(user.savings);
  $('#unlock-copy').textContent = `Locked until ${formatDate(user.unlockDate)} · ${user.isPremium ? 'Emergency mode available' : 'Early withdrawal blocked'}`;
  $('#settings-language').value = user.language || 'en';
  $('#language-preview').textContent = demo.translations[user.language || 'en'];
  $('#profile-language').textContent = `Language: ${demo.languages[user.language || 'en']}`;
  $('#profile-type').textContent = `Type: ${capitalize(user.userType || 'trader')}`;
  $('#profile-premium').textContent = `Plan: ${user.isPremium ? 'Premium' : 'Free'}`;
  $('#offline-status').textContent = navigator.onLine ? 'Online · offline cache ready' : 'Offline · changes will sync later';
  $('#check-email').classList.toggle('done', Boolean(user.email));
  $('#check-wallet').classList.toggle('done', Boolean(state.wallet));
  $('#check-savings').classList.toggle('done', Boolean(user.transactions && user.transactions.length));
  renderWalletSummary();
  renderWallets();
  renderTransactions();
}

function capitalize(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

function formatDate(dateValue) {
  return new Date(`${dateValue}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderWalletSummary() {
  const wallet = state.wallet;
  $('#wallet-summary').textContent = wallet ? wallet.name : 'None';
  $('#wallet-address').textContent = wallet ? `${wallet.type} · ${wallet.address}` : 'Connect to complete setup';
  $('#wallet-cta').textContent = wallet ? 'Wallet connected' : 'Connect wallet';
  $('#connected-panel').classList.toggle('hidden', !wallet);
  if (wallet) $('#connected-copy').textContent = `${wallet.name} is connected to ${state.user.email}. Address/session: ${wallet.address}`;
}

function renderWallets() {
  const grid = $('#wallet-grid');
  grid.innerHTML = demo.wallets.map(wallet => `
    <button class="wallet-card" data-wallet="${wallet.id}">
      <div class="wallet-icon">${wallet.icon}</div>
      <h4>${wallet.name}</h4>
      <p><strong>${wallet.type}</strong></p>
      <p>${wallet.description}</p>
    </button>
  `).join('');
  grid.querySelectorAll('[data-wallet]').forEach(card => {
    card.addEventListener('click', () => connectWallet(card.dataset.wallet));
  });
}

function renderTransactions() {
  const list = $('#tx-list');
  const transactions = state.user?.transactions || [];
  list.innerHTML = transactions.map(tx => `
    <div class="tx-item">
      <div class="tx-icon">${tx.type === 'out' ? '↑' : '⚡'}</div>
      <div>
        <div class="tx-title">${tx.title}</div>
        <div class="tx-date">${tx.date}${tx.saved ? ` · Saved ${fmt(tx.saved)}` : ''}</div>
      </div>
      <div class="tx-amount ${tx.type === 'out' ? 'out' : ''}">${tx.type === 'out' ? '-' : '+'}${fmt(tx.amount)}</div>
    </div>
  `).join('');
}

function generatePayment(event) {
  event.preventDefault();
  const amount = Number($('#payment-amount').value);
  const description = $('#payment-description').value.trim() || 'Customer payment';
  const requestedRate = Number($('#saving-rate').value);
  const rate = Math.min(Math.max(requestedRate, 0), state.user.isPremium ? 50 : 10);
  const paymentId = `pay_${Date.now().toString(36)}`;
  state.pendingPayment = {
    id: paymentId,
    amount,
    description,
    rate,
    link: `https://bitakiba.demo/pay/${paymentId}`
  };
  $('#saving-rate').value = rate;
  $('#payment-link').textContent = state.pendingPayment.link;
  $('#qr-box').textContent = `₿\n${fmt(amount)}\n${paymentId}`;
  toast('Demo payment QR and link generated.', 'success');
}

function simulatePaymentReceived() {
  if (!state.pendingPayment) {
    toast('Generate a payment request first.', 'warn');
    return;
  }
  const { amount, description, rate } = state.pendingPayment;
  const saved = Math.round(amount * rate / 100);
  const available = amount - saved;
  state.user.balance += available;
  state.user.savings += saved;
  state.user.totalIn += amount;
  state.user.transactions.unshift({
    type: 'in',
    title: description,
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    amount,
    saved
  });
  localStorage.setItem('bitakiba-last-payment', JSON.stringify(state.pendingPayment));
  state.pendingPayment = null;
  $('#payment-link').textContent = 'Payment received and split successfully.';
  $('#qr-box').textContent = 'PAID';
  renderDashboard();
  toast(`Payment received. ${fmt(saved)} saved automatically.`, 'success');
}

function withdrawSavings(event) {
  event.preventDefault();
  const amount = Number($('#withdraw-amount').value);
  if (!amount || amount <= 0) {
    toast('Enter a valid withdrawal amount.', 'warn');
    return;
  }
  if (amount > state.user.savings) {
    toast('Withdrawal amount exceeds savings.', 'warn');
    return;
  }
  const locked = new Date() < new Date(`${state.user.unlockDate}T00:00:00`);
  if (locked && !state.user.isPremium) {
    toast(`Savings locked until ${formatDate(state.user.unlockDate)}.`, 'warn');
    return;
  }
  state.user.savings -= amount;
  state.user.balance += amount;
  state.user.transactions.unshift({
    type: 'out',
    title: locked ? 'Premium emergency withdrawal' : 'Savings withdrawal',
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    amount,
    saved: 0
  });
  renderDashboard();
  toast('Savings withdrawn to available balance.', 'success');
}

function saveLanguage() {
  state.user.language = $('#settings-language').value;
  renderDashboard();
  toast(`Language changed to ${demo.languages[state.user.language]}.`, 'success');
}

function upgradePremium() {
  state.user.isPremium = true;
  renderDashboard();
  toast('Premium enabled for this demo account.', 'success');
}

function connectWallet(walletId) {
  if (!state.user) {
    toast('Please authenticate with email first.', 'warn');
    showPage('auth');
    return;
  }
  const wallet = demo.wallets.find(item => item.id === walletId);
  if (!wallet) return;
  openWalletSetup(wallet);
}

function openWalletSetup(wallet) {
  state.setup = {
    wallet,
    step: 0,
    permissionsAccepted: false,
    accountAddress: null
  };
  $('#wallet-setup-modal').classList.remove('hidden');
  $('#setup-wallet-icon').textContent = wallet.icon;
  $('#setup-wallet-name').textContent = wallet.name;
  $('#setup-wallet-type').textContent = `${wallet.type} · ${wallet.network}`;
  renderSetupStep();
}

function closeWalletSetup() {
  $('#wallet-setup-modal').classList.add('hidden');
}

function renderSetupStep() {
  const { wallet, step } = state.setup;
  if (!wallet) return;
  const steps = ['Email', 'Permissions', 'Handshake', 'Confirm'];
  $('#setup-stepper').innerHTML = steps.map((label, index) => `
    <div class="step ${index === step ? 'active' : ''} ${index < step ? 'done' : ''}">
      <span>${index + 1}</span>${label}
    </div>
  `).join('');
  $('#setup-back').disabled = step === 0;
  $('#setup-next').textContent = step === steps.length - 1 ? 'Finish setup' : 'Continue';
  const renderers = [renderEmailStep, renderPermissionStep, renderHandshakeStep, renderConfirmStep];
  $('#setup-body').innerHTML = renderers[step](wallet);
  if (step === 1) {
    $$('.permission-check').forEach(input => {
      input.addEventListener('change', () => {
        state.setup.permissionsAccepted = [...$$('.permission-check')].every(item => item.checked);
      });
    });
  }
}

function renderEmailStep(wallet) {
  return `
    <div class="setup-panel">
      <h3>Step 1: Verify email authentication</h3>
      <p>BitAkiba confirms the signed-in email before linking ${wallet.name}.</p>
      <div class="detail-row"><span>Email</span><strong>${state.user.email}</strong></div>
      <div class="detail-row"><span>Demo OTP</span><strong>${wallet.otp}</strong></div>
      <label class="setup-label">Enter demo OTP
        <input id="setup-otp" class="setup-input" inputmode="numeric" maxlength="6" placeholder="${wallet.otp}">
      </label>
    </div>
  `;
}

function renderPermissionStep(wallet) {
  return `
    <div class="setup-panel">
      <h3>Step 2: Review permissions</h3>
      <p>These are demo permissions showing what BitAkiba would request during a real integration.</p>
      <div class="permission-list">
        ${wallet.permissions.map(permission => `
          <label class="permission-item">
            <input class="permission-check" type="checkbox">
            <span>${permission}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
}

function renderHandshakeStep(wallet) {
  return `
    <div class="setup-panel">
      <h3>Step 3: Simulate wallet handshake</h3>
      <p>The demo runs the provider-specific setup checks below.</p>
      <div class="handshake-list">
        ${wallet.handshake.map(item => `<div class="handshake-item">✓ ${item}</div>`).join('')}
      </div>
      <div class="detail-row"><span>Network</span><strong>${wallet.network}</strong></div>
      <div class="detail-row"><span>Demo balance</span><strong>${fmt(wallet.demoBalance)}</strong></div>
    </div>
  `;
}

function renderConfirmStep(wallet) {
  const address = state.setup.accountAddress || wallet.demoAddress;
  return `
    <div class="setup-panel success-panel">
      <h3>Step 4: Confirm setup</h3>
      <p>${wallet.name} is ready to connect to ${state.user.email}.</p>
      <div class="detail-row"><span>Wallet</span><strong>${wallet.name}</strong></div>
      <div class="detail-row"><span>Address/session</span><strong>${address}</strong></div>
      <div class="detail-row"><span>Auto-save</span><strong>10% enabled</strong></div>
    </div>
  `;
}

async function nextSetupStep() {
  const { wallet, step } = state.setup;
  if (!wallet) return;
  if (step === 0) {
    const otp = $('#setup-otp').value.trim();
    if (otp !== wallet.otp) {
      toast(`Use demo OTP ${wallet.otp}`, 'warn');
      return;
    }
  }
  if (step === 1 && !state.setup.permissionsAccepted) {
    toast('Accept all demo permissions to continue.', 'warn');
    return;
  }
  if (step === 2) {
    await runWalletHandshake(wallet);
  }
  if (step === 3) {
    completeWalletConnection(wallet, state.setup.accountAddress || wallet.demoAddress);
    closeWalletSetup();
    return;
  }
  state.setup.step += 1;
  renderSetupStep();
}

async function runWalletHandshake(wallet) {
  toast(`Running ${wallet.name} handshake...`);
  if (wallet.id === 'browser') {
    const provider = window.ethereum;
    if (provider?.request) {
      try {
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        const account = accounts?.[0];
        if (account) {
          state.setup.accountAddress = `${account.slice(0, 6)}...${account.slice(-4)}`;
        }
      } catch (error) {
        toast(error.message || 'Using demo browser wallet address.', 'warn');
      }
    }
  }
  if (!state.setup.accountAddress) state.setup.accountAddress = wallet.demoAddress;
  await new Promise(resolve => setTimeout(resolve, 650));
}

function completeWalletConnection(wallet, address) {
  state.wallet = { id: wallet.id, name: wallet.name, type: wallet.type, address };
  state.user.wallet = state.wallet;
  renderDashboard();
  toast(`${wallet.name} setup complete`, 'success');
}

function disconnectWallet() {
  state.wallet = null;
  if (state.user) state.user.wallet = null;
  renderDashboard();
  toast('Wallet disconnected', 'warn');
}

function logout() {
  state.user = null;
  state.wallet = null;
  $('#auth-form').reset();
  setAuthMode('signup');
  showPage('landing');
  toast('Logged out');
}

function bindEvents() {
  $$('[data-page]').forEach(item => item.addEventListener('click', event => {
    event.preventDefault();
    showPage(item.dataset.page);
  }));
  $$('[data-auth]').forEach(item => item.addEventListener('click', () => startAuth(item.dataset.auth)));
  $$('[data-mode]').forEach(item => item.addEventListener('click', () => setAuthMode(item.dataset.mode)));
  $$('[data-screen]').forEach(item => item.addEventListener('click', () => showScreen(item.dataset.screen)));
  $$('[data-demo-user]').forEach(item => item.addEventListener('click', () => signInDemo(item.dataset.demoUser)));
  $('#auth-form').addEventListener('submit', event => {
    event.preventDefault();
    try {
      signIn(userFromForm());
    } catch (error) {
      toast(error.message, 'warn');
    }
  });
  $('#logout-btn').addEventListener('click', logout);
  $('#disconnect-wallet').addEventListener('click', disconnectWallet);
  $('#receive-form').addEventListener('submit', generatePayment);
  $('#simulate-payment').addEventListener('click', simulatePaymentReceived);
  $('#withdraw-form').addEventListener('submit', withdrawSavings);
  $('#save-language').addEventListener('click', saveLanguage);
  $('#upgrade-premium').addEventListener('click', upgradePremium);
  $('#setup-close').addEventListener('click', closeWalletSetup);
  $('#setup-next').addEventListener('click', nextSetupStep);
  $('#setup-back').addEventListener('click', () => {
    if (state.setup.step > 0) {
      state.setup.step -= 1;
      renderSetupStep();
    }
  });
  $('#wallet-setup-modal').addEventListener('click', event => {
    if (event.target.id === 'wallet-setup-modal') closeWalletSetup();
  });
  window.addEventListener('online', renderDashboard);
  window.addEventListener('offline', renderDashboard);
}

document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  setAuthMode('signup');
  signInDemo('amara');
  showPage('landing');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

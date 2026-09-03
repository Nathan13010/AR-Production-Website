(function () {
  try {
    if (localStorage.getItem('ar-analytics-opt-out') === 'true') return;
    if (document.querySelector('script[data-project="AR production - Website"]')) return;

    const tracker = document.createElement('script');
    tracker.src = 'https://ar-analytics-self.vercel.app/tracker.js';
    tracker.dataset.project = 'AR production - Website';
    tracker.defer = true;
    tracker.async = false;
    document.head.appendChild(tracker);
  } catch {
    // Analytics must never prevent the website from loading.
  }
})();

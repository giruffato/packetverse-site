(() => {
  const cfg = window.PACKETVERSE || {};

  const links = {
    instagram: cfg.instagramUrl,
    support: cfg.supportUrl || cfg.instagramUrl,
    ccna: cfg.ccnaCheckout,
    ccnaBio: cfg.ccnaCheckoutInstagram || cfg.ccnaCheckout
  };

  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const url = links[key];
    if (url) el.href = url;
  });

  document.querySelectorAll("[data-instagram-label]").forEach((el) => {
    if (cfg.instagramLabel) el.textContent = cfg.instagramLabel;
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const btn = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav]");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }));
  }

  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth", block:"start"});
      }
    });
  });
})();
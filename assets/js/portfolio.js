/* A small progressive enhancement layer for this otherwise static website. */
(() => {
  'use strict';

  // Add the owner's chosen portrait to assets/images and set its relative URL here.
  // An empty value intentionally shows the designed monogram, with no broken image.
  const PORTRAIT_URL = '';
  const EMAIL = 'sergii.khomutov@gmail.com';
  const STORAGE_KEY = 'hybrid-res-language';
  const root = document.documentElement;
  root.classList.add('js');

  const textNodes = Array.from(document.querySelectorAll('[data-en]'));
  textNodes.forEach(node => {
    node.dataset.uk = node.tagName === 'META' ? node.content : node.textContent;
  });
  const attributeTranslations = [
    ['aria-label', 'label'], ['alt', 'alt'], ['href', 'href']
  ];
  attributeTranslations.forEach(([attribute, key]) => {
    document.querySelectorAll(`[data-${key}-en]`).forEach(node => {
      node.dataset[`${key}Uk`] = node.getAttribute(attribute) || '';
    });
  });

  const languageButtons = document.querySelectorAll('[data-language]');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const status = document.querySelector('.copy-status');
  let language = 'uk';

  function updateMenuLabel() {
    if (!menuToggle) return;
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', language === 'en'
      ? (open ? 'Close navigation' : 'Open navigation')
      : (open ? 'Закрити меню' : 'Відкрити меню'));
  }

  function setLanguage(next, persist = false) {
    language = next === 'en' ? 'en' : 'uk';
    root.lang = language;
    textNodes.forEach(node => {
      const text = language === 'en' ? node.dataset.en : node.dataset.uk;
      if (node.tagName === 'META') node.content = text;
      else node.textContent = text;
    });
    attributeTranslations.forEach(([attribute, key]) => {
      document.querySelectorAll(`[data-${key}-en]`).forEach(node => {
        node.setAttribute(attribute, node.dataset[`${key}${language === 'en' ? 'En' : 'Uk'}`]);
      });
    });
    document.title = language === 'en' ? root.dataset.titleEn : root.dataset.titleUk;
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.content = language === 'en' ? 'en_GB' : 'uk_UA';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.querySelectorAll('[data-language-link]').forEach(link => {
      const target = new URL(link.getAttribute('href'), window.location.href);
      target.searchParams.set('lang', language);
      link.setAttribute('href', `${target.pathname}${target.search}${target.hash}`);
    });
    updateMenuLabel();
    if (status) status.textContent = '';
    if (persist) {
      try { window.localStorage.setItem(STORAGE_KEY, language); } catch (_) { /* Storage is optional. */ }
      try {
        const url = new URL(window.location.href);
        if (language === 'en') url.searchParams.set('lang', 'en');
        else url.searchParams.delete('lang');
        window.history.replaceState(null, '', url);
      } catch (_) { /* Language switching also works from a local file. */ }
    }
  }

  let preferred = 'uk';
  try { preferred = window.localStorage.getItem(STORAGE_KEY) || 'uk'; } catch (_) { /* Use Ukrainian. */ }
  const requested = new URLSearchParams(window.location.search).get('lang');
  if (requested === 'uk' || requested === 'en') preferred = requested;
  setLanguage(preferred);
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));

  function closeMenu(returnFocus = false) {
    if (!menuToggle || !navigation) return;
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
    if (returnFocus) menuToggle.focus();
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      navigation.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      updateMenuLabel();
      if (open) navigation.querySelector('a')?.focus();
    });
    navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    const desktop = window.matchMedia('(min-width: 851px)');
    desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
  }

  const copyButton = document.querySelector('.copy-email');
  if (copyButton && status) {
    copyButton.addEventListener('click', async () => {
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(EMAIL);
          copied = true;
        }
      } catch (_) { /* Fall back to an explicit, user-triggered copy operation. */ }
      if (!copied) {
        const field = document.createElement('textarea');
        field.value = EMAIL;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(field);
        field.select();
        try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
        field.remove();
        copyButton.focus();
      }
      status.textContent = copied
        ? (language === 'en' ? 'Email address copied.' : 'Адресу скопійовано.')
        : (language === 'en' ? 'Please select and copy the email address above.' : 'Виділіть і скопіюйте адресу вище.');
    });
  }

  const portraitCard = document.querySelector('.portrait-card');
  if (PORTRAIT_URL && portraitCard) {
    const portrait = new Image();
    portrait.className = 'profile-portrait';
    portrait.alt = 'Sergii Khomutov / Сергій Хомутов';
    portrait.decoding = 'async';
    portrait.addEventListener('load', () => {
      portraitCard.prepend(portrait);
      portraitCard.classList.add('has-portrait');
    });
    portrait.src = PORTRAIT_URL;
  }

  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
})();

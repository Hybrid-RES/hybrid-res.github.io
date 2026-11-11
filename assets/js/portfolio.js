/* A small progressive enhancement layer for this otherwise static website. */
(() => {
  'use strict';

  const STORAGE_KEY = 'hybrid-res-language';
  const root = document.documentElement;
  root.classList.add('js');

  const textNodes = Array.from(document.querySelectorAll('[data-en]'));
  textNodes.forEach(node => {
    node.dataset.uk = node.tagName === 'META' ? node.content : node.textContent;
  });
  const attributeTranslations = [
    ['aria-label', 'label'], ['alt', 'alt'], ['href', 'href'], ['placeholder', 'placeholder']
  ];
  attributeTranslations.forEach(([attribute, key]) => {
    document.querySelectorAll(`[data-${key}-en]`).forEach(node => {
      node.dataset[`${key}Uk`] = node.getAttribute(attribute) || '';
    });
  });

  const languageButtons = document.querySelectorAll('[data-language]');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const contactForm = document.querySelector('[data-contact-form]');
  const formFields = contactForm?.querySelector('.form-fields');
  const formStatus = contactForm?.querySelector('.form-status');
  const formAvailability = contactForm?.querySelector('.form-availability');
  const formSubmit = contactForm?.querySelector('[type="submit"]');
  const formSubmitLabel = contactForm?.querySelector('[data-form-submit-label]');
  let language = 'uk';
  let formState = 'idle';
  let formActive = false;
  let formPending = false;

  const formMessages = {
    pending: ['Надсилаємо звернення…', 'Sending your enquiry…'],
    success: ['Звернення надіслано. Дякую!', 'Your enquiry has been sent. Thank you!'],
    invalid: ['Перевірте email і додайте запитання: від 10 до 5000 символів.', 'Check your email and enter a question between 10 and 5,000 characters.'],
    inactive: ['Форма ще не активована. Надсилання повідомлень поки недоступне.', 'The form is not activated yet. Sending messages is currently unavailable.'],
    error: ['Не вдалося підтвердити надсилання. Текст залишився у формі — спробуйте ще раз пізніше.', 'We could not confirm your submission. Your text is still in the form — please try again later.']
  };

  function updateFormPresentation() {
    if (!contactForm) return;
    if (formStatus) {
      formStatus.textContent = formMessages[formState]?.[language === 'en' ? 1 : 0] || '';
      formStatus.dataset.state = formState;
    }
    if (formSubmitLabel) {
      formSubmitLabel.textContent = formPending
        ? (language === 'en' ? 'Sending…' : 'Надсилання…')
        : (language === 'en' ? formSubmitLabel.dataset.en : formSubmitLabel.dataset.uk);
    }
    contactForm.setAttribute('aria-busy', String(formPending));
  }

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
    updateFormPresentation();
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

  if (contactForm && formFields && formSubmit) {
    // The recipient is never placed in page source. Only a configured public form ID is accepted.
    let endpoint = null;
    try {
      const candidate = new URL(contactForm.dataset.endpoint || '');
      if (candidate.protocol === 'https:' && candidate.hostname === 'formsubmit.co'
          && !candidate.port && !candidate.username && !candidate.password
          && !candidate.search && !candidate.hash
          && /^\/[A-Za-z0-9_-]{16,128}\/?$/.test(candidate.pathname)) {
        endpoint = candidate;
      }
    } catch (_) { /* An unconfigured form stays visibly unavailable. */ }

    formActive = Boolean(endpoint);
    formFields.disabled = !formActive;
    formSubmit.disabled = !formActive;
    if (formAvailability) formAvailability.hidden = formActive;
    if (endpoint) contactForm.action = endpoint.href;

    const topics = {
      general: 'General enquiry',
      hybridaep: 'HybridAEP',
      research: 'Research and collaboration',
      infrastructure: 'Critical infrastructure'
    };
    const topicField = contactForm.querySelector('[name="topic"]');
    const requestedTopic = new URLSearchParams(window.location.search).get('topic');
    if (topicField && Object.hasOwn(topics, requestedTopic || '')) topicField.value = requestedTopic;

    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (formPending) return;
      if (!endpoint || !formActive) {
        formState = 'inactive';
        updateFormPresentation();
        formStatus?.focus();
        return;
      }
      if (!contactForm.reportValidity()) return;

      // Capture only intended fields before disabling the fieldset during the request.
      const data = new FormData(contactForm);
      const email = String(data.get('email') || '').trim();
      const message = String(data.get('message') || '').trim();
      const name = String(data.get('name') || '').trim();
      const topic = Object.hasOwn(topics, String(data.get('topic'))) ? String(data.get('topic')) : 'general';
      if (!email || email.length > 254 || message.length < 10 || message.length > 5000
          || name.length > 100 || String(data.get('_honey') || '').trim()) {
        formState = 'invalid';
        updateFormPresentation();
        formStatus?.focus();
        return;
      }

      const payload = {
        name,
        email,
        topic: topics[topic],
        message,
        _honey: '',
        _subject: `[Hybrid-RES] ${topics[topic]}`,
        _template: 'table',
        _url: 'https://hybrid-res.github.io/contact.html'
      };
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 20000);
      formPending = true;
      formState = 'pending';
      formFields.disabled = true;
      formSubmit.disabled = true;
      updateFormPresentation();

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${endpoint.pathname.replace(/^\/|\/$/g, '')}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
          credentials: 'omit',
          referrerPolicy: 'strict-origin-when-cross-origin'
        });
        const result = await response.json();
        const needsActivation = /activat|confirm\s+(?:your\s+)?(?:email|form)/i.test(String(result?.message || ''));
        const accepted = response.ok && (result?.success === true || result?.success === 'true') && !needsActivation;
        if (!accepted) {
          formState = needsActivation ? 'inactive' : 'error';
        } else {
          contactForm.reset();
          if (topicField) topicField.value = topic;
          formState = 'success';
        }
      } catch (_) {
        // A timeout or network error is not proof of delivery. Preserve the visitor's text.
        formState = 'error';
      } finally {
        window.clearTimeout(timeout);
        formPending = false;
        formFields.disabled = !formActive;
        formSubmit.disabled = !formActive;
        updateFormPresentation();
        formStatus?.focus();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
})();

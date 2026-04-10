/**
 * スムーススクロール
 * ヘッダーの高さ分オフセット対応
 */
export const goScroll = (target, offset = 0) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

// アンカーリンクに自動適用
export const initGoScroll = (headerSelector = 'header') => {
  const header = document.querySelector(headerSelector);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = header ? header.offsetHeight : 0;
      goScroll(target, offset);
    });
  });
};

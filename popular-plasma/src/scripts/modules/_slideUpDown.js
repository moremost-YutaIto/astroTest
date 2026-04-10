/**
 * スライドアニメーション（アコーディオン用）
 */
export const slideDown = (el, duration = 300) => {
  el.style.height = '0';
  el.style.overflow = 'hidden';
  el.style.display = 'block';

  const height = el.scrollHeight;
  el.style.transition = `height ${duration}ms ease`;
  el.style.height = `${height}px`;

  el.addEventListener(
    'transitionend',
    () => {
      el.style.height = '';
      el.style.overflow = '';
      el.style.transition = '';
    },
    { once: true }
  );
};

export const slideUp = (el, duration = 300) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.overflow = 'hidden';
  el.style.transition = `height ${duration}ms ease`;

  requestAnimationFrame(() => {
    el.style.height = '0';
  });

  el.addEventListener(
    'transitionend',
    () => {
      el.style.display = 'none';
      el.style.height = '';
      el.style.overflow = '';
      el.style.transition = '';
    },
    { once: true }
  );
};

export const slideToggle = (el, duration = 300) => {
  if (el.style.display === 'none' || getComputedStyle(el).display === 'none') {
    slideDown(el, duration);
  } else {
    slideUp(el, duration);
  }
};

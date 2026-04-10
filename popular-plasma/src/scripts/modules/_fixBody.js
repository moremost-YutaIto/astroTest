/**
 * スクロール禁止（モーダル・ドロワー開閉時に使用）
 */
let scrollY = 0;

export const fixBody = () => {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
};

export const unfixBody = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
};

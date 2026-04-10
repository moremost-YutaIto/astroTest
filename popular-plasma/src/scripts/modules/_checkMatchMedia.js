/**
 * メディアクエリ判定
 */
const SP_BREAKPOINT = 768;

export const isSP = () => window.matchMedia(`(max-width: ${SP_BREAKPOINT}px)`).matches;
export const isPC = () => !isSP();

/**
 * ブレークポイントをまたいだタイミングでコールバック実行
 * @param {Function} callback - ({ isSP, isPC }) を受け取る関数
 */
export const onBreakpointChange = (callback) => {
  const mq = window.matchMedia(`(max-width: ${SP_BREAKPOINT}px)`);
  mq.addEventListener('change', (e) => {
    callback({ isSP: e.matches, isPC: !e.matches });
  });
};

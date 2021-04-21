// Breakpoints are inspired bootstrap
// https://getbootstrap.com/docs/5.0/layout/breakpoints/
export const widthSm = 576;
export const widthMd = 768;
export const widthLg = 992;
export const widthXl = 1200;
export const widthXxl = 1400;

function buildBreakpointsWithMinWidth(breakpoint: number): string {
  return `(min-width: ${breakpoint}px)`;
}

export const xs = `(max-width: ${widthSm - 1}px)`;
export const sm = buildBreakpointsWithMinWidth(widthSm);
export const md = buildBreakpointsWithMinWidth(widthMd);
export const lg = buildBreakpointsWithMinWidth(widthLg);
export const xl = buildBreakpointsWithMinWidth(widthXl);
export const xxl = buildBreakpointsWithMinWidth(widthXxl);

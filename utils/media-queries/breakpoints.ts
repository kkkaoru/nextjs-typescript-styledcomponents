// 374px is less than iPhone8, iPhone SE2,
export const widthXS = 374;
export const widthSm = 600;
export const widthMd = 960;
export const widthLg = 1280;
export const widthXl = 1920;

function buildBreakpointsWithMinWidth(breakpoint: number): string {
  return `(min-width: ${breakpoint}px)`;
}

export const xs = `(max-width: ${widthXS}px)`;
export const sm = buildBreakpointsWithMinWidth(widthSm);
export const md = buildBreakpointsWithMinWidth(widthMd);
export const lg = buildBreakpointsWithMinWidth(widthLg);
export const xl = buildBreakpointsWithMinWidth(widthXl);

export function hasGTMId(): boolean {
  // GTM_ID is string and not empty
  return typeof process.env.GTM_ID === 'string' && process.env.GTM_ID !== '';
}

import { hasGTMId } from './has-id';

export async function initializeGTM(): Promise<void> {
  // Load only both client side and has gtm id
  if (!process.browser || !hasGTMId()) {
    return;
  }
  // Use dynamic import because occur error when ssr
  (await import('react-gtm-module')).default.initialize({
    gtmId: String(process.env.GTM_ID),
  });
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

interface Window {
	dataLayer: unknown[];
	gtag?: (...args: unknown[]) => void;
	SGVTurfAnalytics?: {
		track: (eventName: string, params?: Record<string, unknown>) => void;
	};
}

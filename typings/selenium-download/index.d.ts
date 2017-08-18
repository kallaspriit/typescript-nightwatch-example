declare module 'selenium-download' {
	export function ensure(path: string, callback: (error: Error) => void): void;
}

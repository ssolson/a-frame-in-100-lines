// utils/checkEnv.ts

export function checkEnv(): void {
  if (!process.env.NEXT_PUBLIC_URL) {
    throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_URL"');
  }
}

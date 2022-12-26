export {};

declare global {
  interface Window {
    signUpCallback: any; // 👈️ turn off type checking
  }

  interface User {
    username?: string;
    age?: number;
  }
}

export type AuthCredentials = {
  identifier: string;
  password: string;
  remember: boolean;
};

export type SocialAuthProvider = 'google' | 'steam';

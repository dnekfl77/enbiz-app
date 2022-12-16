interface User {
  username?: string;
  age?: number;
}

export const useUserState = () => {
  return useState('user', (): User => {
    return { };
  });
};

import { constants } from '../constants';

function subIdGenerator(): string {
  return (~~(Math.random() * Math.pow(36, 6))).toString(36);
}

export default function getUserKey() {
  if (typeof window !== 'undefined') {
    let userKey = localStorage.getItem(constants.STORAGE_KEY);

    if (userKey) return userKey;

    userKey = subIdGenerator();

    localStorage.setItem(constants.STORAGE_KEY, userKey);

    return userKey;
  }

  return subIdGenerator();
}

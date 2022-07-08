function subIdGenerator(): string {
  return (~~(Math.random() * Math.pow(36, 6))).toString(36);
}

const keyName = 'USER_KEY';

export default function getUserKey() {
  if (typeof window !== 'undefined') {
    let userKey = localStorage.getItem(keyName);

    if (userKey) return userKey;

    userKey = subIdGenerator();

    localStorage.setItem(keyName, userKey);

    return userKey;
  }

  return subIdGenerator();
}

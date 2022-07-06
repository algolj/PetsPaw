import { useRouter } from 'next/router';

import locales, { TLocale } from '../locales';

//returns an object with a translations in the language
// set by default in the browser

const useLocale = () => {
  const router = useRouter();
  return locales[router.locale as TLocale];
};

export default useLocale;

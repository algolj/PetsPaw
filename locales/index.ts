import en from './en.json';
import uk from './uk.json';

// an object with all translations,
// where the key is the abbreviated name of the language.
const locale = { en, uk };

// specify the keys via binary OR,
// for correct work with the TS in the useLocale hook
export type TLocale = 'en' | 'uk';

export default locale;

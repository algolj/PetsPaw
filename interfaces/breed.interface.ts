import { TStar } from './star.type';

export interface IBreed {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  vetstreet_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  alt_names: string;
  adaptability: TStar;
  affection_level: TStar;
  child_friendly: TStar;
  dog_friendly: TStar;
  energy_level: TStar;
  grooming: TStar;
  health_issues: TStar;
  intelligence: TStar;
  shedding_level: TStar;
  social_needs: TStar;
  stranger_friendly: TStar;
  vocalisation: TStar;
  experimental: 0 | 1;
  hairless: 0 | 1;
  natural: 0 | 1;
  rare: 0 | 1;
  rex: 0 | 1;
  suppressed_tail: 0 | 1;
  short_legs: 0 | 1;
  wikipedia_url: string;
  hypoallergenic: 0 | 1;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

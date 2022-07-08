export interface IGalleryReqParams {
  size: 'full' | 'med' | 'small' | 'thumb';
  limit: 5 | 10 | 15 | 20;
  page: number;
  mime_types: string[];
  order: 'RANDOM' | 'ASC' | 'DESC';
  format: 'json' | 'src';
  bread_id?: string;
}

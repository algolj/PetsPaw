export interface IGalleryParams {
  limit: 5 | 10 | 15 | 20;
  page: number;
  mime_types: 'All' | 'Static' | 'Animated';
  order: 'RANDOM' | 'ASC' | 'DESC';
  bread_id: string;
}

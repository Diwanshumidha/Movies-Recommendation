export type PosterSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
export type BackdropSize = 'w300' | 'w780' | 'w1280' | 'original';

export class ImageService {
  private readonly baseImageUrl = 'https://image.tmdb.org/t/p';

  getPosterUrl(posterPath: string | null, size: PosterSize = 'w500'): string {
    if (!posterPath) return '';

    return `${this.baseImageUrl}/${size}${posterPath}`;
  }

  getBackdropUrl(backdropPath: string | null, size: BackdropSize = 'w1280'): string {
    if (!backdropPath) return '';

    return `${this.baseImageUrl}/${size}${backdropPath}`;
  }
}

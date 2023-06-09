export interface ITrack {
  id?: string;
  name?: string;
  duration?: number;
  artist_id?: string;
  artist_name?: string;
  album_name?: string;
  album_id?: string;
  position?: number;
  releasedate?: string;
  album_image?: string;
  audio?: string;
  audiodownload?: string;
  audiodownload_allowed?: boolean;
  image?: string;
}

export interface TrackState {
  tracks: ITrack[];
  error?: string;
}

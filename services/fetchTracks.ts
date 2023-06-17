import { CLIENT_ID } from '@/services/apiConfig';
import { ITrack } from '@/types/tracks';
import process from 'process';

export async function fetchTracks() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tracks?${CLIENT_ID}`,
    );
    if (!res.ok) {
      console.error('Failed to fetch products', res.statusText);
      return null;
    }
    const data = await res.json();

    return data.results as ITrack[];
  } catch (error) {
    console.error(error);
    return null;
  }
}

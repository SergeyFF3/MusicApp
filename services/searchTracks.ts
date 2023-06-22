import { CLIENT_ID } from '@/configs/apiConfig';
import process from 'process';

export async function searchTracks(name: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tracks?${name}&${CLIENT_ID}`,
      { method: 'POST' },
    );
    if (!res.ok) {
      console.error('Failed to fetch products', res.statusText);
      return null;
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

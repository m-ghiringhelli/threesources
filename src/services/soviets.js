import { checkError, client } from './client.js';

export async function fetchSoviets() {
  const resp = await client.from('sovietleaders').select('*').order('id', { ascending: true });
  return checkError(resp);
}
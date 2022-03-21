import { checkError, client } from './client.js';

export async function fetchPresidents() {
  const resp = await client.from('presidentslist').select('*').order('id', { ascending: true });
  return checkError(resp);
}
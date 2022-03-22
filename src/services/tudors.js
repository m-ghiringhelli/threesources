import { checkError, client } from './client.js';

export async function fetchTudors() {
  const resp = await client.from('tudormonarchs').select('*').order('id', { ascending: true });
  return checkError(resp);
}
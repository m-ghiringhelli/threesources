import { checkError, client } from './client.js';

export async function fetchSoviets(search) {
  if (search) {
    const resp = await 
    client.from('sovietleaders')
      .select('*')
      .ilike('name', `%${search}%`)
      .order('id', { ascending: true });
    return checkError(resp);
  } else {
    const resp = await 
    client.from('sovietleaders')
      .select('*')
      .order('id', { ascending: true });
    return checkError(resp);
  }
}
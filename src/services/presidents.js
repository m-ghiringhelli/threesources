import { checkError, client } from './client.js';

export async function fetchPresidents(search) {
  if (search) {
    const resp = await 
    client.from('presidentslist')
      .select('*')
      .ilike('name', `%${search}%`)
      .order('id', { ascending: true });
    return checkError(resp);
  } else {
    const resp = await client.from('presidentslist')
      .select('*')
      .order('id', { ascending: true });
    return checkError(resp);
  }
}
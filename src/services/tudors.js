import { checkError, client } from './client.js';

export async function fetchTudors(search) {
  if (search) {
    const resp = await 
    client.from('tudormonarchs')
      .select('*')
      .ilike('name', `%${search}%`)
      .order('id', { ascending: true });
    return checkError(resp);
  } else {
    const resp = await 
    client.from('tudormonarchs')
      .select('*')
      .order('id', { ascending: true });
    return checkError(resp);
  }
}
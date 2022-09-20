export async function getData(url) {
  try {
    const data = await fetch(url).then(res => res.json());
    return data;
  } catch(err) {
    console.error(err);
  }
}
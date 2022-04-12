export default async function FetchApi(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("something went wrong: " & { error });
    return null;
  }
}

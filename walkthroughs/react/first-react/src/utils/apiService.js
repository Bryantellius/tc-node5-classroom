export async function apiService(url, method = "GET", headers = {}) {
  try {
    let res = await fetch(url, { mode: "cors", method, headers });

    if (res.ok) {
      return await res.json();
    } else return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

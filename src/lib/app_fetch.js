const API_ROUTE = "https://backend.getlinked.ai";

const targetAPI = `${API_ROUTE}/hackathon`;

export default async function app_fetch(api, params = {}) {
  if (!params.headers) {
    params.headers = {};
  }

  params["headers"]["Content-Type"] =
    params["headers"]["Content-Type"] || "application/json";
  return await fetch(`${targetAPI}/${api}`, params);
}

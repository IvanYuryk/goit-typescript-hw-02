import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const fetchImagesSearch = async (query, pageNumber, pagination) => {
  const response = await instance.get("/search/photos", {
    params: {
      client_id: "DWEIFMTlPfAxVuojH75lzqhCc2a8uuC5lBy8fDIH4sA",
      query: query,
      orientation: "landscape",
      page: pageNumber,
      per_page: pagination,
    },
  });

  return response.data;
};

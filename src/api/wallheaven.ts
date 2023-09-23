import axios from "axios";
import { useSnackbarStore } from "@/stores/snackbarStore";
const snackbarStore = useSnackbarStore();
// change the access key to your own
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const instance = axios.create({
  baseURL: "https://wallhaven.cc/api/v1",
  timeout: 20000,

});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;
      snackbarStore.showErrorMessage(data.errors[0]);
    } else {
      snackbarStore.showErrorMessage("Network Error");
    }
    return Promise.reject(error);
  }

)
// List photos 图片一览
export const getPhotoApi = () => {
  return instance.get("/w/d6dzql/");
};

export const getTagApi = () => {
  return instance.get("/tag/1/");
}



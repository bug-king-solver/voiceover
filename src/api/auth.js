import axios from "axios";
import { getStoreItem } from "src/services/localstorage.service";

const api = "http://localhost:2001";
const applicationToken = "eaf2f95635a43f2:ff4313e9a93a9d6";

export const apiSearch = `${api}/api/auth`;
export const registerUrl = "/signup";

export const customHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const apiClient = axios.create({
  apiSearch,
  headers: customHeader,
});

// Add request interceptor to set the Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const jwt = getStoreItem("auth")?.jwt; // Get JWT from local storage
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    } else {
      config.headers.Authorization = `token ${applicationToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

export { api };

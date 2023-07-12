export const getStoreItem = (key) => {
  const data = window.localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return null;
};

export const setStoreItem = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const destroyStoreItem = (key) => {
  window.localStorage.removeItem(key);
};

export default {
  getStoreItem,
  setStoreItem,
  destroyStoreItem,
};

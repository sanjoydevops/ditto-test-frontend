export const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch(e) {
    return null;
  }
};

export const remove = key => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch(e) {
    return false;
  }
};

export const set = (key, payload) => {
  try {
    localStorage.setItem(key, JSON.stringify(payload));
    return payload;
  } catch(e) {
    return null;
  }
}

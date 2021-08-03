
export const storage = {
  get(key) {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(error);
      }
    }

    return null;
  },

  set(key, value) {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(error);
      }
    }
  },

  unset(key) {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.removeItem(key);
  },
};

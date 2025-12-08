const TOKEN_KEY = "auth_token";
const EXPIRY_KEY = "token_expiry";
const DEFAULT_EXPIRY_MINUTES = 15;

/**
 * Save JWT and expiry
 */
export const setToken = (token, minutes = DEFAULT_EXPIRY_MINUTES) => {
  try {
    if (!token) return;
    const expiry = Date.now() + minutes * 60 * 1000;

    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(EXPIRY_KEY, String(expiry));
  } catch (err) {
    console.error("setToken failed:", err);
  }
};

/**
 * Get JWT
 */
export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (err) {
    console.error("getToken failed:", err);
    return null;
  }
};

/**
 * Remove JWT + expiry
 */
export const clearToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRY_KEY);
  } catch (err) {
    console.error("clearToken failed:", err);
  }
};

/**
 * Alias for logout
 */
export const logout = () => {
  clearToken();
};

/**
 * Check if token expired
 */
export const isExpired = () => {
  try {
    const expiry = localStorage.getItem(EXPIRY_KEY);
    if (!expiry) return true;
    return Date.now() > Number(expiry);
  } catch (err) {
    console.error("isExpired failed:", err);
    return true;
  }
};

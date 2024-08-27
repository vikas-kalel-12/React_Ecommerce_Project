import { TOKEN } from "../utilities/CONSTANTS";

const isValidToken = (token) => {
  return typeof token === "string" && token.trim()?.length > 0;
};

export const saveToken = (token) => {
  try {
    if (isValidToken(token)) {
      localStorage.setItem(TOKEN, JSON.stringify(token));
    } else {
      console.warn("Token is invalid");
    }
  } catch (error) {
    console.error("Failed to save token", error.message);
  }
};

// Remove token from localStorage
export const removeToken = () => {
  try {
    localStorage.removeItem(TOKEN);
  } catch (error) {
    console.error("Failed to remove token:", error.message);
  }
};

export const getEnv = () => import.meta.env.MODE;

export const env = {
  mode: import.meta.env.MODE,
  nodeEnv: import.meta.env.VITE_APP_NODE_ENV,
  siteURL: import.meta.env.VITE_APP_ADMIN_URL,
  apiURL: `${import.meta.env.VITE_APP_API_URL}/${import.meta.env.VITE_APP_API_PREFIX}/${import.meta.env.VITE_APP_API_VERSION}`,
};

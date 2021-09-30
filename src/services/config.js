const devBaseURL = "http://140.249.176.146:3000";
const proBaseURL = "http://140.249.176.146:3000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;

const baseUrl = location.hostname === "localhost" ?
    "http://localhost:2000/api" :
    "https://flipkart-project-admin-app.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
}

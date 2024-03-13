import http from "./config";

export const createUser = async (user) => {
    const response = await http().post("/user/create", user);
    return response.data;
}

export const getAllUsers = async (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await http().get(`/user?${queryString}`);
    return response.data;
}

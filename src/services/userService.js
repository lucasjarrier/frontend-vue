import http from "./config";

export const createUser = async (user) => {
    const response = await http().post("/user/create", user);
    return response.data;
}

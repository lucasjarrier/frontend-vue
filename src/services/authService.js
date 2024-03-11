import http from "./config";

export const login = async (form) => {
    return http().post("/login", form)
}

export const logout = async (form) => {
    return http().post("/logout", form)
}
import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from ".";

export const registration = async (username, password, name, surname, phoneNumber) =>{
    const {data} = await $host.post('/api/auth/register', {username, password, name, surname, phoneNumber})

    return data
}

export const login = async (username, password) =>{
    const {data} = await $host.post('/api/auth/login', {username, password})
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return jwtDecode(data.accessToken)
}

export const check = async () =>{
    const {data} = await $host.post('/api/check')
    return data
}
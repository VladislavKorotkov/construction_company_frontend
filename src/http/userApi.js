import { $authHost, $host } from ".";

export const registration = async (username, password, name, surname, phoneNumber) =>{
    const response = await $host.post('/api/signup', {username, password, name, surname, phoneNumber})
    return response
}

export const login = async (username, password) =>{
    const response = await $host.post('/api/signin', {username, password})
    return response
}

export const check = async () =>{
    const response = await $host.post('/api/check')
    return response
}
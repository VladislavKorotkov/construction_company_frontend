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
    const token = localStorage.getItem('accessToken')
    if(token){
        const {data} = await $authHost.post('/api/auth/is-access-token-valid', {token: token})
        if(data.accessTokenValid)
            return jwtDecode(token)
        else{
            try {
                const jwtRefreshToken = localStorage.getItem("refreshToken")
                const response = await $host.post('/api/auth/refresh-token', {
                    jwtRefreshToken: jwtRefreshToken
                });
                localStorage.setItem('accessToken', response.data.accessToken);
                return jwtDecode(response.data.accessToken)
            } catch (e) {
                return false
            }
        }
    }
    else{
        return false
    }
}


export const GetUserInfo = async () =>{
    const {data} = await $authHost.get('/api/auth/user')
    return data
}
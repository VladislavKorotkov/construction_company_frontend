import axios from "axios";

const $host= axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost= axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config =>{
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

$authHost.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const jwtRefreshToken = localStorage.getItem("refreshToken")
            const response = await $host.post('/api/auth/refresh-token', {
                jwtRefreshToken: jwtRefreshToken
            });
            localStorage.setItem('accessToken', response.data.accessToken);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export{
    $host,
    $authHost
}
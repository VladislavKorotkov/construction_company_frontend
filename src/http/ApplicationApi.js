import { $authHost, $host } from ".";

export const getApplicationsForUser = async () =>{
    const {data} = await $authHost.get('/api/applications/user')
    return data
}

export const postApplication = async(application)=>{
    const {data} = await $authHost.post('/api/applications', application)
}
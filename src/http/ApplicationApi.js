import { $authHost, $host } from ".";

export const getApplicationsForUser = async () =>{
    const {data} = await $authHost.get('/api/applications/user')
    return data
}

export const getApplicationsForForeman = async () =>{
    const {data} = await $authHost.get('/api/applications')
    return data
}

export const postApplication = async(application)=>{
    const {data} = await $authHost.post('/api/applications', application)
}

export const deleteApplication = async(id)=>{
    const {data} = await $authHost.delete('/api/applications/' + id)
    return data;
}

export const acceptApplication = async(id)=>{
    const {data} = await $authHost.post('/api/applications/accept/'+ id)
    return data
}
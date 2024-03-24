import { $authHost, $host } from ".";

export const getProjectsForUser = async () =>{
    const {data} = await $authHost.get('/api/projects/user')
    return data
}

export const getProject = async(id)=>{
    const {data} = await $authHost.get('/api/projects/'+id)
    return data
}
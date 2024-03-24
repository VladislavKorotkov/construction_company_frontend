import { $authHost, $host } from ".";

export const getProjectsForUser = async () =>{
    const {data} = await $authHost.get('/api/projects/user')
    return data
}

// export const postApplication = async(application)=>{
//     const {data} = await $authHost.post('/api/applications', application)
// }
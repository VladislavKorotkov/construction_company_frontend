import { $authHost, $host } from ".";

export const GetApplicationsForUser = async () =>{
    const {data} = await $authHost.get('/api/applications/user')
    return data
}
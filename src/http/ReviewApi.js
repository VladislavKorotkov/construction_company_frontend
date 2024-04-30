import { $authHost, $host } from ".";

export const getReviews = async () =>{
    const {data} = await $host.get("/api/reviews")
    return data;
}

export const addReview = async (message, id)=>{
    const {data} = await $authHost.post('/api/reviews/project/'+id, {message: message})
}
import axios from "axios"

export const fetchPhotos = async (query) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query
        },
        headers: {
            Authorization: 'Client-ID _1lGAIPsgisF2RbcbqEmlfXQPecGaCH0SHkv5XVfpI0' // замініть '_1lGAIPsgisF2RbcbqEmlfXQPecGaCH0SHkv5XVfpI0' на ваш реальний ключ доступу
        }
    });
    return response.data;
}
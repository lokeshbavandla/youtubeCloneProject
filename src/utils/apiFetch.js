import axios from 'axios'

const Base_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchApi = async (url)=>{
  try{
    const {data} = await axios.get(`${Base_URL}/${url}`,options);

    return data;
  }

  catch(error){
    return  error.message;
  }
}
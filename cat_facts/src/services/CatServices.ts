import Axios from 'axios';


export const getCatFacts = async (amount: number): Promise<Response> => {
    const response = await Axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${amount}`);
    return response.data;

  };
import axios from 'axios'

export const removeUser = async ( id: number ) => {
    console.log('removeUser')
    const response = await axios.delete(`/members/${id}`);
    console.log(response)
    return response;
}


import axios from "axios";
import {urlConstants} from '@/urlConstants'

const getTodos = async ()=>{
    try{
        const {data} = await axios.get(urlConstants.GET_TODOS);
        
        return data;
    }
    catch(e){
        console.log(e);
    }
}

const deletePost = async (id:number) => {
  const url = `${urlConstants.GET_TODOS}/${id}`;

    const res = await axios.delete(
      url,
      {
        method: "DELETE",
      }
    );
    return res;
  }

export const todoService = {
    getTodos,
    deletePost
}

// class TodoService {
//     getAllTodos() {
//         return axios.get("https://jsonplaceholder.typicode.com/posts");
//     }
// }

// export const todoService = new TodoService();
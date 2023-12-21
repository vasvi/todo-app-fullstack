import { useQuery } from 'react-query';
import {todoService} from '../services/todo-service';

export const useGetTodos = () => {
    const {data} = useQuery(['todos'],  todoService.getTodos);
   
    return {todos:data?.todos}
}

import { useMutation, useQueryClient } from "react-query";
import {todoService} from '../services/todo-service';

export const useDeleteTodo = () => {
  return useMutation(
    (id:number) => {
      return todoService.deletePost(id);
    },
    {
      onSuccess: () => {
        console.log('deleted successfully');
      },
    }
  );
};
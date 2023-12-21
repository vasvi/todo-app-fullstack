import { useFormik } from "formik";
import { useMutation } from "react-query";
import Layout from '../components/layout';
import axios from "axios";
import {todoService} from '../services/todo-service';
import { useQueryClient } from "react-query";
import { useGetTodos } from "@/hooks/useGetTodos";
import {useState} from 'react';
import { useRouter } from 'next/navigation'

const AddTodo = (props) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const {todos} = useGetTodos();
  const [todo, setTodo] = useState(todos)
  const useAddMutation = () => {
    return useMutation((formPayload) => {
      return axios.post(
        "https://dummyjson.com/todos/add",
        formPayload
      )
    });
  }
  const { mutate } = useAddMutation();
  const todosList: any = [];
    const formik = useFormik({
        initialValues: {
          todo: "",
          userId: 22,
          completed: true,
          id: todo ? todo.length + 1 : 10
        },
        onSubmit: (values) => {
          mutate(values, {
            onSuccess: () => {
              alert("Form submitted successfully");
              const addTodo = todo.concat(values)
              setTodo(addTodo);
              queryClient.setQueryData(['todos'], addTodo)
              router.push('/list')

            },
            onError: (response) => {
              alert("An error occured while submiting the form");
              console.log(response);
            }
          });
          }
      });

    return(
    <Layout headerName={props.edit? "Add Todo" : "Edit Todo"} showButton={false}>
    <div>
    <h1 className="text-2xl text-center pt-6">{props.edit? "Add Todo" : "Edit Todo"}</h1>
    <form onSubmit={formik.handleSubmit} className="pt-8 flex items-center justify-center">
    <div className="border-2 px-16 py-16 grid gap-6 mb-6">
    <div>
    <label className="pr-4">Todo:</label>
    <input id="todo" name="todo" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" value={props.edit ? formik.values.todo : props.todoName} onChange={formik.handleChange} />
    </div>
    <button color="primary" type="submit" className="w-full mt-4 py-2 border-stone-400 bg-blue-800">{props.edit? "Add" : "Update"}</button>
    </div>
    </form>
    </div>
    </Layout>
    )
}

export default AddTodo;

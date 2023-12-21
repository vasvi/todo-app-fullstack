import AddTodo from "../addTodo"
import { useParams } from 'next/navigation'

// Get param from route and pass it on to addTodo page.
const EditTodo = () => {
    const params = useParams()
return(
    <div>
       <AddTodo edit={false}/>
    </div>
)
}
export default EditTodo
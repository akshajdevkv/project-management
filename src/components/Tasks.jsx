import NewTask from "./NewTask"
export default function Tasks({tasks,onAdd,onDelete}){
    return <section>
        <h1 className="text-stone-700 text-2xl font-bold py-2">Tasks</h1>
       <NewTask onAdd={onAdd}/>
       {tasks.length ===0 && <p>This project does not have any tasks yet</p>}
       {tasks.length >0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task)=>{
            return <li className="flex justify-between my-4 " key={task.id}>
                <span>{task.text}</span>
                <button onClick={()=> onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
            </li>
        })}
        </ul>}
       
    </section>
}
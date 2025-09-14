import NewTask from "./NewTask"
export default function Tasks(){
    return <section>
        <h1 className="text-stone-700 text-2xl font-bold py-2">Tasks</h1>
       <NewTask/>
       <p>This project does not have any tasks yet</p>
    </section>
}
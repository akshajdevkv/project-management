import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProjects from "./components/SelectedProjects";
import {useState} from "react"
export default function App(){
  const [projectsState,setProjectsState]= useState({
 
    selectedProjectId:undefined,
    projects:[],
    tasks:[]


  })
  function handleAddTask(text){
      setProjectsState((prevState)=>{
        if(text.trim()===''){
          return prevState;
        }
        const taskId = Math.random();
        const newTask ={
          text:text,
          projectId:prevState.selectedProjectId,
          id:taskId,

        }
        return {
          ...prevState,
       
          tasks:[...prevState.tasks,newTask]
        }
      })
  }
  function handleDeleteTask(id){
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        
        tasks:prevState.tasks.filter((task)=> task.id !== id)
      }
    })
  }
  function handleSelectProject(id){
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:id,

      }
    })
  }
  function handleStartAddProject(){
    setProjectsState( prevState=>{
        return{
          ...prevState,
          selectedProjectId:null,

        }
    })
  }

  function handleCancelProject(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }

  function handleAddProject(projectData){
      setProjectsState(prevState => {
        const newProject ={
            ...projectData,
            id: Math.random()

        }
        return {
          ...prevState,
          selectedProjectId:undefined,
          projects:[...prevState.projects,newProject]
        }
      });
  }
  function handleDeleteProject(){
    setProjectsState((prevState)=>{
      return {

 
        projects:prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId)
      }
    })
  }
  const selectedProject = projectsState.projects.find(project=>project.id===projectsState.selectedProjectId)
  console.log(projectsState.projects)
  let content = <SelectedProjects project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask}  tasks={projectsState.tasks} onDeleteTask={handleDeleteTask} />;
  if(projectsState.selectedProjectId===null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>

  }else if(projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return  <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
       {content}
    </main>
  </>
}
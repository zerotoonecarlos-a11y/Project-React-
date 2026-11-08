import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w[500px]">
          <h1 className="text-slate-100 text-3xl font-bold text-center">Geranciador de Tarefas</h1>
          <Task />
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default App;

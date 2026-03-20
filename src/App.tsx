import { GradeCalculator } from "./components/GradeCalculator";
import { StatusTogle } from "./components/StatusToggle";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-4xl mb-5">Asignacion de Prueba</h1>

      <UserList />
      <GradeCalculator />
      <StatusTogle />
    </div>
  );
}

export default App;

import { AppName } from "./components/AppName";
import { AddToDo } from "./components/AddToDo";
import { TodoItems } from "./components/TodoItems";
import { TodoItemsProvider } from "./store/TodoItemsContext";
import { LoadItems } from "./components/LoadItems";

function App() {
  return (
    <TodoItemsProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex justify-center items-start py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
          
          {/* App Title */}
          <div className="mb-8 text-center">
            <AppName />
          </div>

          {/* Add Todo */}
          <div className="mb-6">
            <AddToDo />
          </div>

          {/* Load items (on refresh) */}
          <LoadItems />

          {/* Todo List */}
          <div className="mt-6">
            <TodoItems />
          </div>

        </div>
      </div>
    </TodoItemsProvider>
  );
}

export default App;

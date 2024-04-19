import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import "./App.css";

const App = () => {
  return (
    <>
      <AppBar />
      <Layout>
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};

export default App;

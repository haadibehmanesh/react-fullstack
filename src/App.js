import User from "./components/user"

const App = () => {
  const users = [
    {
      id: 1, name: 'Hadi'
    },
    {
      id: 2, name: 'Ali'
    },
    {
      id: 3, name: 'Reza'
    }
  ]
  return (
    <>
      <User users={users} />
    </>
  );
}

export default App;
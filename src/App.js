import { useState } from "react";

const App = (props) => {
  const [state, setState] = useState({
    count: props.initialValue,
    user: "Hadi"
  })
  let [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Super awesome post',
      body: 'The content of the post'
    },
    {
      id: 2,
      name: 'Js is great',
      body: 'something ....'
    }
  ])
  const addPost = () => {
    let newPost = {
      id: 3,
      name: 'php is still awesome',
      body: 'something new'
    }
    setPosts([...posts, newPost])
  }



  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count : {state.count}</h3>
      <button onClick={() => ((setState({
        ...state,
        count: state.count + 1
      })))}>add </button>
      <button onClick={() => ((setState({ ...state, count: state.count - 1 })))}>minus</button>
      <button onClick={() => ((setState({ ...state, count: props.initialValue })))}>reset</button>
      <hr />
      {posts.map((item) => (
        <div key={item.id}>
          <div>Name: {item.name}</div>
          <div>Body: {item.body}</div>
          <hr />
        </div>
      ))}

      <button onClick={addPost}>add post</button>
    </>
  );
}

export default App;

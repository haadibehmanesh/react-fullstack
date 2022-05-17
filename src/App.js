import { useEffect, useState } from "react";
import Post from './post'
const App = (props) => {
  const [state, setState] = useState({
    count: props.initialValue,
    user: "Hadi"
  })
  let [text, setText] = useState('text');
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
  const removePosts = () => (setPosts([]))

  useEffect(() => {
    console.log('change if input values changed')

  }, [text])
  useEffect(() => {
    console.log('Mount')

  }, [])


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
        <Post item={item} key={item.id} />
      ))}

      <button onClick={addPost}>add post</button>
      <button onClick={removePosts}>Remove posts</button>

      <hr />
      <input onChange={(e) => (setText(e.target.value))}></input>
    </>
  );
}

export default App;

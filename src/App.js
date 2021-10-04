import Login from './Login';

function App() {
  return (
    <div class="flex flex-col min-h-screen min-w-screen items-center justify-center">
      <h1 class="font-extrabold text-6xl m-11">CRUMZ</h1>
      <h1 class="font-extrabold text-4xl mb-6">Heading</h1>
      <div class="m-4 w-full text-center flex justify-evenly">
        <button class=" text-white bg-blue-800 py-2 px-4 w-1/3">Facebook Button</button>
        <button class=" text-red bg-green-500 py-2 px-4 w-1/3">Google Button</button>
      </div>
      <p class="m-4">OR</p>
      <Login />
    </div>
  );
}

export default App;

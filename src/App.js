import logo from './logo.svg';
import Logo from './Logo';
import Login from './Login';
import Heading from './Heading';
import Buttons from './Buttons';

function App() {
  return (
    <div class="flex flex-col min-h-screen items-center justify-center">
      <Logo />
      <Heading />
      <p class="mb-4">OR</p>
      <Buttons />
      <Login />
    </div>
  );
}

export default App;

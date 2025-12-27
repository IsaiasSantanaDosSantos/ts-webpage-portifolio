import { MobileMenuProvider } from './context/mobileMenuContext';
import NavBar from './components/NavBar/navBar';

function App() {
  return (
    <>
      <MobileMenuProvider>
        <NavBar />
      </MobileMenuProvider>
    </>
  );
}

export default App;


import Container from "../container/Container";
import AppHeader from "../appHeader/AppHeader";
import AboutMe from "../aboutMe/AboutMe";


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Container>
        <AboutMe/>
      </Container>
    </div>
  );
}

export default App;

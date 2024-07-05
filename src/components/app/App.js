
import Container from "../container/Container";
import AppHeader from "../appHeader/AppHeader";
import AboutMe from "../aboutMe/AboutMe";
import MyExp from "../myExp/myExp";


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Container>
        <AboutMe/>
        <MyExp/>
      </Container>
    </div>
  );
}

export default App;

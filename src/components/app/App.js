
import Container from "../container/Container";
import AppHeader from "../appHeader/AppHeader";
import AboutMe from "../aboutMe/AboutMe";
import MyExp from "../myExp/myExp";
import MyHobby from "../myHobby/MyHobby";
import AppFooter from "../appFooter/AppFooter";


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Container>
        <AboutMe/>
        <MyExp/>
        <MyHobby/>
      </Container>
      <AppFooter/>
    </div>
  );
}

export default App;

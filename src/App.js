import styled from "styled-components";
import './App.css';
import Weather from "./component/Weather";


const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://wallpapercave.com/w/tAXPmkI.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

`;


function App() {
    return (
        <MainWrapper>

            <Weather/>
        </MainWrapper>
    );
}

export default App;

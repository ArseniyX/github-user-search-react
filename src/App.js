import styled from "styled-components";
import "./App.css";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1``;

const App = () => {
  return (
    <div className="App">
      <Header>
        <Logo>devfinder</Logo> Light Dark
      </Header>
      Search GitHub username... Search Joined Repos Followers Following
    </div>
  );
};

export default App;

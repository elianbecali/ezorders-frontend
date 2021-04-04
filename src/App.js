import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles/App';
import Orders from './components/Orders';

import logo from './images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <img src={logo} alt="ezOrders"/>

        <Orders />
      </Container>
    </>
  );
}

export default App;

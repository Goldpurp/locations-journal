import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import { Container } from "./App.styled";
import Data from "./component/Data";

function App() {
  
  const cardsList = Data.map((data) =>{
    return <Hero {...data} key={data.id}/>
  })

  

  return (
    <Container>
      <Header />
      <div>
      {cardsList}
      </div>
      <Footer />
    </Container>
  );
}

export default App;

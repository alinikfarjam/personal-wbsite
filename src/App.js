import './App.css';
import Layout from './Layout/Layout';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function App() {

  return (<>
    <AnimationOnScroll animateIn="animate__bounceIn">
      <Layout />


    </AnimationOnScroll>
  </>
  )
}

export default App;

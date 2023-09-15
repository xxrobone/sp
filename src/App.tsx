import './App.css';
import HoverEffect from './components/hovereffect/HoverEffect';
import image1 from './assets/images/nike1.png';
import image2 from './assets/images/nike2.png';

function App() {
  return (
    <>
      <h1>Clean project</h1>
      <HoverEffect
        title='Get your new shoes'
        subtitle='2024'
        desc='Only at Sneaker Spot'
        img1={image1}
        img2={image2}
      />
    </>
  );
}

export default App;

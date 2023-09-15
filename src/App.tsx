import './App.css';
import HoverEffect from './components/hovereffect/HoverEffect';
import image1 from './assets/images/nike4.png';
import image2 from './assets/images/nike3.png';
import swoosh from './assets/images/nikeswoosh.png';

function App() {
  return (
    <div className='main'>
      <h1>SneakerSpot</h1>
      <div>
        <h2>Collab with</h2>
        <img src={swoosh} alt='swoosh' className='img'></img>
      </div>
      <HoverEffect
        title="Air Force 1's"
        subtitle='2024'
        desc='Only @sneakerspot'
        img1={image1}
        img2={image2}
      />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from'./Components/Navbar'
import Content from './Components/Content'
import Video from './video.mp4'


function App() {
  return (
    
      <div className="hero">
        <video autoPlay loop muted plays-inline className="back-video">
          <source src={Video} type="video/mp4"/>
        </video>        
        
        <Navbar />
        <Content />
      </div>
    
  );
}

export default App;

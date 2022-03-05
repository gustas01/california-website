import './App.css';
import Navbar from'./Components/Navbar'
import Content from './Components/Content'


function App() {
  return (
    
      <div className="hero">
        <video loop muted playsInline className="back-video">
          <source src="./video.mp4" type="video/mp4"/>
        </video>        
        
        <Navbar />
        <Content />
      </div>
    
  );
}

export default App;

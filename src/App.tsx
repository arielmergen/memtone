import MemTone from './components/memorization-game/index';
import './tailwind.css';
const App = () => {
  return (
    <div className="min-h-screen w-full bg-primarybg flex items-center justify-center">
      <div className="content">
        <MemTone />
      </div>
    </div>
  );
};

export default App;

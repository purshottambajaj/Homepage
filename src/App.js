import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Albums from './components/Albums';
import Boards from './components/Boards';
import Contacts from './components/Contacts';
import Events from './components/Events';
import Feeds from './components/Feeds';
import Followers from './components/Followers';
import Progress from './components/Progress';
import Projects from './components/Projects';
import Tasks from './components/Tasks';


function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row bg-gray-100">
        <div className="flex flex-col w-1/4 p-4">
          <Events />
          <Contacts />
          <Projects />
          <Albums />
          <Followers />
        </div>
        <div className="flex-grow p-4">
          <Feeds />
        </div>
        <div className="flex flex-col w-1/4 p-4">
          <Boards />
          <Progress />
          <Tasks />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

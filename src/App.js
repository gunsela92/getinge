import Header from '../src/components/Header/header.component';
import Mainblock from '../src/components/Mainblock/mainblock.component';
import Center from '../src/components/Center/center.component';
import Announcements from '../src/components/Announcements/announcements.component';
import './App.css';


function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
    <div className="_Getinge_OneScreen">
    <Header/>
    <Mainblock/>
    <Center />
    <Announcements />
    </div>
    </div>
  );
}

export default App;

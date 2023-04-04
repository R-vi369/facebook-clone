
import './App.css';
import Header from './header/Header';
import LeftSideBar from './leftSideBar/LeftSideBar';
import Feed from './feedComponent/Feed';
import RightSideBar from './rightSideBar/RightSideBar';
// import Login from './facebookLogin/Login';
function App() {
  return (
    <>
<div className='app'>

      {/* <Login/> */}

      <Header />

      <div className='side__bar'>
        <LeftSideBar />
        <Feed/>
        <RightSideBar/>
      </div>
</div>
    </>
  );
}

export default App;

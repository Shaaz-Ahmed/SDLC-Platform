import React from 'react';
import logo from '../src/Assets/chatgptLogo.svg';

const App =()=>{
  return<>
       <div className='App'>
          <div className='sidebar'>
              <div className='upperSide'>
                <div className='upperSideTop'><img src={logo} className='logo'/> <span className='brand'> SDLC Platoform</span></div>
                <button className='midBtn'><img src='' alt='' className='addBtn'/>New Chat</button>
                <div className='upperSideBotton'>
                <button className='query'><img src='' alt='' />What is programming</button>
                <button className='query'><img src='' alt='' />What is programming</button>

                </div>
                   
                
              </div>

              <div className='lowerSide'>

              </div>
          </div>

          <div className='main'>

          </div>
       </div>
  </>
};

export default App;
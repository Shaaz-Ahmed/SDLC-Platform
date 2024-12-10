import React from 'react';
import logo from '../src/Assets/sdlclogo.png';
import addBtn from '../src/Assets/add-30.png';
import msgIcon from '../src/Assets/message.svg';
import home from '../src/Assets/home.svg';
import saved from '../src/Assets/bookmark.svg';
import rocket from '../src/Assets/rocket.svg'; 

const App =()=>{
  return<>
       <div className='App'>
          <div className='sidebar'>
              <div className='upperSide'>
                <div className='upperSideTop'><img src={logo} className='logo'/> <span className='brand'> SDLC Platoform</span></div>
                <button className='midBtn'><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
                <div className='upperSideBotton'>
                <button className='query'><img src={msgIcon} alt='' />What is programming ?</button>
                <button className='query'><img src={msgIcon} alt='' />How to use an API ?</button>

                </div>
                   
                
              </div>

              <div className='lowerSide'>
                  <div className='listItems'> <img src={home} alt='' className='listitemsImg'/>Home</div>
                  <div className='listItems'> <img src={saved} alt='' className='listitemsImg'/>Saved</div>
                  <div className='listItems'> <img src={rocket} alt='' className='listitemsImg'/>Upgrade to Pro</div>


              </div>
          </div>

          <div className='main'>
              <div className='chats'>

              </div>

              <div className='chatFooter'>
                  
              </div>
          </div>
       </div>
  </>
};

export default App;
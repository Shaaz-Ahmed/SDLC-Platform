import React, { useEffect, useState } from 'react';
import logo from '../src/Assets/sdlclogo.png';
import addBtn from '../src/Assets/add-30.png';
import msgIcon from '../src/Assets/message.svg';
import home from '../src/Assets/home.svg';
import saved from '../src/Assets/bookmark.svg';
import rocket from '../src/Assets/rocket.svg'; 
import sendBtn from '../src/Assets/send.svg';
import profileLogo from '../src/Assets/profile logo.png';
import { sendMsgToOpenAI } from './openai';
import { useRef } from 'react';

function App() {

  const msgEnd = useRef(null);
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
    text : "hello",
    isBot: true,
    }
]);

  useEffect(()=> {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      { text, isBot: false }
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false},
      { text: res, isBot: true}
     ]);
  }

  const handleEnter = async (e) =>{
    if (e.key === 'Enter') await handleSend();
  }


  const handleQuery = async (e) =>{
    const text = e.target.value;
    setMessages([
      ...messages,
      { text, isBot: false }
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false},
      { text: res, isBot: true}
     ]);
  }
  return<>
       <div className='App'>
          <div className='sidebar'>
              <div className='upperSide'>
                <div className='upperSideTop'><img src={logo} className='logo'/> <span className='brand'> SDLC Platoform</span></div>
                <button className='midBtn' onClick={()=>{window.location.reload()}}><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
                <div className='upperSideBotton'>
                <button className='query' value={"What is programming"} onClick={handleQuery}><img src={msgIcon} alt='' />What is programming ?</button>
                <button className='query' value={"What is API"} onClick={handleQuery}><img src={msgIcon} alt='' />How to use an API ?</button>

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
                  
                  {messages.map((message, i) =>
                     <div key={i} className= {message.isBot?'chat bot':'chat'}>
                      <img className='chatimg' src={message.isBot?logo:logo} alt=''/> <p className='txt'> {message.text} </p>
                      </div>
                  )}
                  <div ref={msgEnd} />
              </div>

              <div className='chatFooter'>
                    <div className='inp'>
                      <input type='text' placeholder='Send a message' name='id' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/> <button className='send' onClick={handleSend}><img src={sendBtn} alt=''/></button>
                    </div>
              </div>
          </div>
       </div>
  </>
};

export default App;



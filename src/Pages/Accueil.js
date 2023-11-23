import '../Styles/App.css';
import { useEffect, useState } from 'react';
import logo from '../Assets/Images/logo.png';

function App() {


  
  const onClickCommand = (e) => {
    let command = e.target.textContent.replace(' - ', '')
  
    const newHistory = [...history, {
      "command" : <p class="sender"><span className='visitor'>visitor</span>@<span className='domain'>legrandenzo.fr</span>:~$ {command}</p>,
      "response" : commands[command]
    }];

    setHistory(newHistory);
    console.log(newHistory);
  }

  const[history, setHistory] = useState([{
    "command" : <p class="sender"><span className='visitor'>visitor</span>@<span className='domain'>legrandenzo.fr</span>:~$ first-visit</p>,
    "response" : <div className='commands'>
        <p>Welcome to my portfolio 👋! Right down there are some details about me!</p>
        <p className="help" onClick={onClickCommand}> - social</p>
        <p className="help" onClick={onClickCommand}> - presentation</p>
        <p className="help" onClick={onClickCommand}> - projets</p>
        <p className="help" onClick={onClickCommand}> - help</p>
      </div>
  }]);

  const commands = {
    "help": <div className='commands'>
    <p>Welcome to my portfolio 👋! Right down there are some details about me!</p>
    <p className="help" onClick={onClickCommand}> - social</p>
    <p className="help" onClick={onClickCommand}> - presentation</p>
    <p className="help" onClick={onClickCommand}> - projets</p>
    <p className="help" onClick={onClickCommand}> - help</p>
  </div>,
    "projets": <div className='commands'>
      <p> - <a href="https://www.lol-politics.fr" target="_blank">Lol-Politics 🎮</a></p>
      <p> - <a href="https://github.com/propaan" target="_blank">Minecraft Printer 🖨️</a></p>
      <p> - <a href="https://github.com/propaan" target="_blank">Lazulis | Online notes app 📑</a></p>
    </div>,
    "social": <div className='commands'>
        <p> - <a href="https://github.com/propaan" target="_blank">Github</a></p>
        <p> - <a href="https://www.linkedin.com/in/elgr5/" target="_blank">LinkedIn</a></p>
        <p> - <a href="mailto:legrandenzo.pro@gmail.com" target="_blank">E-Mail</a></p>
    </div>,
    "presentation": <div className='commands'>
        <p>Hello, I'm Enzo, a computer science student based in France with a passion for web development. Currently pursuing my degree, I aspire to become a skilled web developer. 👨‍🎓</p>

    </div>,
  }

  const onSubmitCommand = (e) => {
    if (e.key === 'Enter' && e.target.textContent !== '') {
      if (e.target.textContent === 'clear') {
        setHistory([]);
        e.target.textContent = '';
        e.preventDefault();
        return;
      }

      const sended = e.target.textContent;
      let value = commands[sended];
      let command = {
        "command": <p class="sender"><span className='visitor'>visitor</span>@<span className='domain'>legrandenzo.fr</span>:~${" "} {sended}</p>,
        "response": (value === undefined ? <p className='not-found'>command {sended} not found</p> : value)
      }

      const newHistory = [...history, command];

      setHistory(newHistory);

      console.log(newHistory);

      e.target.textContent = '';
      e.preventDefault();

    } else if (e.key === 'Enter' && e.target.textContent === '') {
      e.preventDefault();
    }
  }

  const onClickPrompt = () => {
    document.getElementById('span-prompt').focus();
  }

  return (
    <div className="App">
      <div onClick={onClickPrompt} className='terminal'>
        <img src={logo} id="logo-portfolio" alt='Logo portfolio legrandenzo.fr'></img>
        <div id="results">
          {history.map((command, index) => {
            return <div>
                <p>{command.command}</p>
                <p>{command.response}</p>
              </div>
          })}
          <div class="force-overflow"></div>
          <p className='prompt'><span className='visitor'>visitor</span>@<span className='domain'>legrandenzo.fr</span>:~${" "} <span contentEditable={true} onKeyDown={onSubmitCommand} id="span-prompt"></span></p>
          </div>
        </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import useGeneratePassword from './components/useGeneratePassword';
import PasswordStrengthIndicator from './components/StrengthChecker';
import ButtonComp from './components/ButtonComp';
import CheckboxComp from './components/CheckboxComp';

//password text and copy button
//chracter length slider
//checkboxes 4
//strength 
//generate password button

const App = () => {

  const [charLength, setCharLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    {title: 'Include Uppercase Letters', state:false},
    {title: 'Include Lowercase Letters', state:false},
    {title: 'Include Numbers', state:false},
    {title: 'Include Symbols', state:false},
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !checkboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
   }

  const {password, errorMessage, generatePassword} = useGeneratePassword();

  return (
    <div className='App'>
      <h1>Password Generator</h1>
    <div className="container">
      {password &&  (<div className='header'>
        {/* <input type='text' value='PungHER@435' /> */}
        <div className='title' >{password}</div>
        <ButtonComp text={copied ? 'Copied' : 'Copy'} customClass='copyBtn' onClick={handleCopy}/>
      </div>)}
      <div className='char-length'>
        <span>
          <label>Charater Length</label>
          <label>{charLength}</label>
          </span>
          <input type='range' min='4' max='20'
            value={charLength}
            onChange={(e) =>setCharLength(e.target.value)}
           />
        
      </div>
      <div className='checkboxes'>
        {checkboxData.map((data, index) => (
          <div>
              <CheckboxComp key={index} title={data.title} onChange={() => handleCheckboxChange(index)}  state={data.state} />
          </div>
        ))}
      </div>
      <div className='strength'>
        {/* <label>Strength</label>
        <label>Medium</label> */}
        <PasswordStrengthIndicator password={password} />
      </div>
      {errorMessage && <div className='error'>{errorMessage}</div>}
      <div>
        <ButtonComp text='Generate Password' onClick={() => generatePassword(checkboxData, charLength)} customClass='generate-btn' />
      </div>
    </div>
    </div>
  );
}

export default App;

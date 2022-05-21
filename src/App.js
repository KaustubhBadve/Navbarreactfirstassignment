import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo.jsx'
import Links from './components/Links.jsx'
import Button from './components/Button.jsx'
import Style from './components/navbar.module.css'

function App() {
  
  const linkarray=["Services","Projects","About"]

  return (
    <div className="App">
      <div className={Style.app}>
      <Logo></Logo>
      <div className={Style.link}>
        {linkarray.map((elem)=>(
          <Links elem={elem}></Links>
        ))}
      
      </div>
      
      <Button/>
      </div>
    </div>
  );
}

export default App;

import Body from './components/Body/Body';
import './App.css'

const App = () => {



  return (
    <div>
    <div className='App'>
      <img className='icon' src="./qicon.png" alt="" />
      <ul className='ull'>
        <li className='lii'>
        <a href="#">Vakansiyalar</a>
        </li>
        <li className='lii'>
        <a href="#">Kandidatlar</a>
        </li>
        <li className='lii'>
        <a href="#">Kompaniyalar</a>
          </li>
          <li className='lii'>
          <a href="#">Xizmatlar</a>
          </li>
          <li className='lii'>
          <a href="#">Ta’lim</a>
          </li>
          <h3>Uzb</h3>
          <img src="./icon.svg" alt="" />
          <button className='boshlash' href="./components/Body/Body">Boshlash</button>
      </ul>
    </div>
    <Body></Body>
    </div>

  );
}

export default App;

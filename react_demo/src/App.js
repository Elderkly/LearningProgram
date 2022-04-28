import './App.css';
import {Link,useNavigate} from 'react-router-dom'
import {Carousel} from 'antd'

function App() {
  const naviate = useNavigate()
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  function onClick(e) {
    naviate('/page1')
  }

  return (
    <div className="App">
       <Carousel afterChange={onChange}>
          <div onClick={onClick}>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
      </Carousel>
      <Link to='/page1'>Page1</Link>
      <Link to='/page2'>Page2</Link>
    </div>
  );
}

export default App;

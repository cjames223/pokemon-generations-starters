import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <div className='accordion'>

        {data.map((item, i) => {
          <div className='item'>
            <div className='title'>
              <h2></h2>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

const data =[]

export default App;

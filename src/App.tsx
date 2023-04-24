import React, {useState} from 'react';
import JSONViewer  from './JSONViewer';
import myJsonParse from './utils';
function App() {
  const [object, setObject] = useState<string>()
  const [data, setData] = useState()
  console.log(data)
  return (
    <main>
      <div className='code'>
        <button>请输入JSON对象</button><br/>
        <textarea value={object} onChange={e => setObject(e.target.value)}></textarea>
      </div>
      <div className='transform-btn'>
        <button onClick={() => setData(myJsonParse(object))}>转换</button>
      </div>
      <div className='json'>
        <JSONViewer value={data}/>
      </div>

    </main>
  )
}

export default App;

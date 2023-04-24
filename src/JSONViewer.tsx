import React from 'react'
type Props = {
  value: any
}
const JSONViewer:React.FC<Props>= ({value}) => {
  const [isfolded, setIsfolded] = React.useState(true)
  if (typeof value === 'number') {
    return <span>{value}</span>
  }
  if (typeof value === 'boolean') {
    return <span>{String(value)}</span>
  }
  if (typeof value === 'string') {
    return <span>"{value}"</span>
  }
  if ( value == null ) {
    return <span>{String(value)}</span>
  }
  if (Array.isArray(value)) {
    return <span>
      {<span onClick={() => setIsfolded(!isfolded)} className='foldbtn'>{isfolded
      ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
      </svg>
      :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
}</span>}
      [

          {isfolded &&   value.map((it,index) => (
            <div key={index} style={{paddingLeft:'1em'}}>
            <JSONViewer value={it} />
            {index === value.length -1? '':','}
            </div>
          ))}

      ]</span>
  }
  if (typeof value === 'object') {
    const objectLength = Object.keys(value).length
    return <span>
      {<span onClick={() => setIsfolded(!isfolded)} className='foldbtn'>{isfolded
      ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
      </svg>
      :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    }</span>}
      {'{'}

        {isfolded &&
          Object.entries(value).map((item,index) => {
            const [key,value] = item
            return (
              <div key={key} style={{paddingLeft:'1em'}} >
                {key}: <JSONViewer value={value} />
                {index === objectLength -1 ? '':','}
              </div>
            )
          })
        }

      {'}'}
    </span>
  }
  return <span>{String(undefined)}</span>
}

export default JSONViewer

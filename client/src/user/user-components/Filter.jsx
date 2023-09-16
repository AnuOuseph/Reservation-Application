import { createPortal } from 'react-dom';

function Filter(props) {
  return createPortal(
    <>
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-50"></div>
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-10 rounded-lg shadow-md'>
        <button onClick={props.menu}>X</button>
      <h1 className='w-96 h-96 bg-blue-100'>hi</h1>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Filter

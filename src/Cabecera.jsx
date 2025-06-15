import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Cabecera() {
  return (
    <div>
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://i.ytimg.com/vi/lCJ4Y7zPm4Y/maxresdefault.jpg')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Academia Sergio el Bailador</h1>
              <h4 className='mb-3'>Univ. Conde Gutierrez Rafael Blas</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabecera;
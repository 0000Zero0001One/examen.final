import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function FilaColumna() {
  const items = [
    { id: 1, content: 'Danza 1', image: 'https://cancilleria.gob.bo/mre/wp-content/uploads/2023/10/RECORRIDO_LIMA_161023_19.jpg' },
    { id: 2, content: 'Danza 2', image: 'https://cancilleria.gob.bo/mre/wp-content/uploads/2023/10/RECORRIDO_LIMA_161023_8.jpg' },
    { id: 3, content: 'Danza 3', image: 'https://cancilleria.gob.bo/mre/wp-content/uploads/2023/10/RECORRIDO_LIMA_161023_15.jpg' },

  ];

  return (
    <div className="container">
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4">
            <div className="card p-3 mb-3">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.content}
                  className="card-img-top"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              )}
              <div className="card-body">
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilaColumna;
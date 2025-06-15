import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modales(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Precios</ModalHeader>
        <ModalBody>
          CAP PARTICIPA EN SUYANA, 5to Encuentro de Danza Contemporánea 
“El arte de la danza debe ser compartido, porque el movimiento une, salva y se magnífica cuando se la hace en comunidad”
SUYANA, como bien dice el nombre, es un espacio de ESPERANZA para las nuevas generaciones; en esta su Quinta versión, más de 10 escuelas, grupos y/o proyectos independientes nos juntamos para celebrar desde la danza.
Nos vemos el sábado 17 y domingo 18 de Mayo a hrs. 19:00 (apertura de puertas), con una muestra increible, variada y llena de emociones en el Teatro. NUNA
❤️ Apoyemos el arte ❤️
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Inscribirse
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modales;
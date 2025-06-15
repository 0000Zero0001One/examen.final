import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">La Morenada</AccordionHeader>
          <AccordionBody accordionId="1">
            La Morenada tiene por tema la colonización española el siglo XVI que recurrió a una importación masiva de esclavos negros africanos, para trabajar en las minas de Potosí.

La danza presenta de manera satírica las difíciles condiciones de trabajo de los mineros, y la música melancólica da prueba de sus dolores y sufrimientos.

Esclavos encadenados, tiesos por el frío del altiplano, y aplastados bajo el peso de las cargas que deben llevar, todas estas condiciones de trabajo se transcriben en los pasos a tirones de los bailarines morenos y en su traje imponente de más de 25 kilos.

Bajo su máscara negra decorada de largas plumas, una peluca blanca simboliza la nieve que descubrían con estupor los esclavos africanos.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">La Diablada</AccordionHeader>
          <AccordionBody accordionId="2">
            Nació en la ciudad minera de Oruro el siglo XVII – XVIII en homenaje religioso de los españoles a la milagrosa Virgen de Candelaria o Virgen del Socavón, cuya pintura se descubrió en la casa del famoso ladrón Nina Nina, y considerada como la madre protectora de los mineros.

Esta danza espectacular pone en escena a distintos personajes que simbolizan el combate del bien contra el mal: unos diablos con mascaras llevan ropas de colores vivos y bordados de diseños dorados, a su cabeza Lucifer (amo de los demonios) personificando los 7 pecados capitales y la diablesa de las colinas China Supay.

Opuesto a los diablos, el arcángel San Miguel con sus 7 virtudes lleva la danza después de haber desafiado y triunfado a Lucifer.

Figuras de oso y cóndor, participan en la danza. La Diablada es el símbolo del carnaval de Oruro.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Danza de La Saya</AccordionHeader>
          <AccordionBody accordionId="3">
            La danza y la música de la Saya son originarias del valle de los Yungas (La Paz) y representativas de la cultura afro andino.

El ritmo de la Saya esta dado por el sonido sordo de tambor (bombo) que resuena como la doble palpitación del corazón y se caracterizada por el tintineo de campanillas del caporal (capataz elegido por los colonizadores españoles para supervisar el trabajo de los esclavos) que dirige la danza agitando un látigo.

Los hombres tocan el tambor mientras que las mujeres cantan y bailan removiendo las caderas, los hombros y los brazos.

Los comportamientos de los bailarines son relativamente simples: las mujeres llevan un largo vestido (pollera), una blusa de color, un mantón (manta), y un sombrero borsalino, y los hombres camisa, pantalones y sandalias.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Danza de los Negritos o Tundiquis</AccordionHeader>
          <AccordionBody accordionId="4">
            Esta danza de la familia de la Saya es típica de la comunidad negra que vive en los Yungas.

Expresa los sentimientos de los esclavos negros (de ahí el nombre “Negritos”) desarraigados en el siglo XVI para venir a trabajar como esclavos de los españoles en las minas de plata de Potosí.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Danza del Caporal</AccordionHeader>
          <AccordionBody accordionId="5">
            Muchas personas confunden la danza de los Caporales con la Saya, es en realidad un derivado de la Saya y del Tundiqui.

Se encuentran, los dos rítmos, con dos tiempos y el tintineo de cascabeles sobre las botas de los bailarines y el látigo.

La danza refleja la autoridad de los caporales (capataces en la época de la colonización española).

Las mujeres vestidas de faldas cortas agitan las caderas de manera sensual, mientras que los hombres bailan de un paso firme y enérgico combinando de vez en cuando unas figuras acrobáticas espectaculares.

Actualmente, los bailarines (Varones y Damas), llevan trajes folklóricos lujosos y mucho brillante.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
      
    </div>
  );
}

export default Acordeon;
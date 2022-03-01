import React from 'react';
import Carousel from 'nuka-carousel';

const PhotoCarousel = () => {
  return (
    <Carousel>
      <img src={require ("../../images/photos/rest360_seccion_carta.jpg")} alt="Foto Restaurante 1"/>
      <img src={require ("../../images/photos/rest360_seccion_dondeestamos.jpg")} alt="Foto Restaurante 2"/>
      <img src={require ("../../images/photos/rest360_seccion_mesa.jpg")} alt="Foto Restaurante 3"/>
      <img src={require ("../../images/photos/rest360_seccion_recoger.jpg")} alt="Foto Restaurante 4"/>
      <img src={require ("../../images/photos/rest360_seccion_socios.jpg")} alt="Foto Restaurante 5"/>
      <img src={require ("../../images/photos/rest360_seccion_pedido.jpg")} alt="Foto Restaurante 6"/>
  </Carousel>
  )
}

export default PhotoCarousel;
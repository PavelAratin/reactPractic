const Foto = ({name,image}) => {
  return (
    <div className='fotos__foto'>
      <img className='fotos__item foto__item--big' src={image}></img>
      <div className='fotos__wrapper'>
        <img className='fotos__item foto__item--min' src={image}></img>
        <img className='fotos__item foto__item--min' src={image}></img>
        <img className='fotos__item foto__item--min' src={image}></img>
      </div>
      <h2 className='foto__title'>{name}</h2>
    </div>
  )
};

export default Foto;
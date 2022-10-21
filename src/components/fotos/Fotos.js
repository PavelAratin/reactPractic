import './Fotos.css';
import Foto from '../foto/Foto';

const Fotos = ({ collection, searchValue, isLoadind }) => {
  return (
    <div className='fotos'>
      <div className='container'>
        <div className='fotos__inner'>
          {isLoadind
            ? <h2>Идет загрузка ... </h2>
            : collection
              .filter(obj => {
                return obj.name.toLowerCase().includes(searchValue.toLowerCase())
              })
              .map((collect, index) => <Foto key={index} name={collect.name} image={collect.photos}></Foto>
              )
          }
        </div>
      </div>
    </div>
  )
}
export default Fotos;
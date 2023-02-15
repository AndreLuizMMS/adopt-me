import { Link } from 'react-router-dom';
const Pet = ({ props }) => {
  const { id, name, breed, city, state, images, animal } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet" key={id}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

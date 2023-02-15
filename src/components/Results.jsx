import Pet from './Pet';

const Results = ({ Pets }) => {
  return (
    <div className="search">
      {!Pets.length ? (
        <h1>not found</h1>
      ) : (
        Pets.map(pet => {
          return <Pet props={pet} key={pet.id} />;
        })
      )}
    </div>
  );
};
export default Results;

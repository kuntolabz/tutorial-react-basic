import "../styles/Tutors.css";
function Tutors(props) {
  return (
    <div className="tutor-list">
      {props.tutorList.map((key, index) => {
        return (
          <div className="kartu-tutor" key={index}>
            <img src={key.image} />
            <p>{key.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Tutors;

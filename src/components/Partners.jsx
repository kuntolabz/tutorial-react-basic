import "../styles/Partners.css";
function Partners(props) {
  return (
    <div className="partner-list">
      {props.PartnersList.map((key, index) => {
        return (
          <div className="kartu-partner" key={index}>
            <img src={key.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Partners;

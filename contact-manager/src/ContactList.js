const ContactList = (props) => {
  return (
    <div className="main__contacts">
      <p>
        <span className="span"> Name:</span> {props.data.name}
      </p>
      <p>
        <span className="span"> Phone Number: </span>
        {props.data.number}
      </p>
      <p>
        <span className="span"> Address:</span> {props.data.address}
      </p>
    </div>
  );
};
export default ContactList;

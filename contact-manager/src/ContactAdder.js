import { useState } from "react";
const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const additionalContacts = {
      id: Math.random(),
      name: name,
      number: number,
      address: address,
    };
    if (name.length < 1 || number.length < 1 || address.length < 1) {
      alert("Please fill out all the fields!");
    } else {
      props.addContacts(additionalContacts);
      setName("");
      setNumber("");
      setAddress("");
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <fieldset className="form__fieldset">
          <legend className="offscreen">Add a Contact</legend>
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form__input"
            id="name"
          />

          <label htmlFor="phone-number"></label>
          <input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form__input"
            id="phone-number"
          />

          <label htmlFor="address"></label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form__input"
            id="address"
          />
        </fieldset>
        <p className="button_container">
          <button className="button">Add Contact</button>
        </p>
      </form>
    </>
  );
};
export default ContactAdder;

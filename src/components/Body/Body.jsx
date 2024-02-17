import { useState, useRef } from "react";
import "./body.css";

function MyForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "companyName":
        setCompanyName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };
  const MyComponent = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = [];

    function checkINputs() {
      if (!companyName) {
        newErrors.push("Kompaniya nomi majburiy");
        return;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.push("Iltimos, to'gri elektron pochta manzilini kiriting");
        return;
      }

      if (!country) {
        newErrors.push("Davlat majburiy");
        return;
      }
      if (!phoneNumber || !/^\d+$/.test(phoneNumber)) {
        newErrors.push("Iltimos, to'gri telefon raqamini kiriting");
        return;
      }
    }
    checkINputs();

    setErrors(newErrors);

    if (!newErrors.length) {
      formRef.current.submit();
    }
  };

  return (
    <form ref={formRef}>
      <h2>Kompaniya malumotlari</h2>
      <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
      <div className="flex">
        <img className="fon" src="./fon.jpg" alt="" />
        <br />
        <a className="install" href="">
          Yuklash
        </a>
      </div>
      <div className="izoh">
        <label htmlFor="companyName">Kompaniya nomi</label>

        <br />
        <input
          placeholder="Kompaniya nomi"
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
          required
        />
        <div className="errors">
          {errors.length > 0 && (
            <ul>
              <li>{errors[0]}</li>
            </ul>
          )}
        </div>
      </div>

      <div className="izoh">
        <label htmlFor="email">Email</label>
        <br />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          
        />
        <div className="errors">
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="izoh">
        <label htmlFor="phoneNumber">Telefon raqami</label>
        <br />
        <input
          placeholder="UZ +9989"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          required
        />
        <div className="errors">
          {errors.length > 0 && (
            <ul>
              <li>{errors[0]}</li>
            </ul>
          )}
        </div>
      </div>

      <div className="ista">
        <div className="kiik">
          <label className="kik" htmlFor="">
            Linklar
          </label>
        </div>
        <ul className="linklar">
          <p className="kik" htmlFor=""></p>
          <li className="link" href="#">
            <img className="globus" src="./globus.png" alt="" />
          </li>
          <li className="link" href="#">
            <img src="./insta.svg" alt="" />
          </li>
          <li className="link" href="#">
            <img src="./telegram.svg" alt="" />
          </li>
          <li className="link" href="#">
            <img src="./github.svg" alt="" />
          </li>
        </ul>
      </div>
      
      <div className="errors">
        {errors.length > 0 && (
          <ul>
            <li>{errors[0]}</li>
          </ul>
        )}
      </div>
      <span className="Davlatlar">Davlat</span>
      <span className="Shahr">Shahar</span>
      <br />
      <div className="form-group1">
        <br />
        <input
          className="form-group__city"
          placeholder="Davlat"
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          required
        />

        <br />
        <input
          className="form-group__city"
          placeholder="Shahar"
          type="text"
          name="country"
          value={country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="izoh">
        <label htmlFor="companyName">Yashash joyi</label>
        <br />
        <input
          placeholder="Joy"
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="izoh">
        <label htmlFor="companyName">Hodimlar soni</label>
        <br />
        <input
          placeholder="Hodimlar soni"
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="izoh">
        <label htmlFor="companyName">Izoh</label>
        <br />
        <input
          className="izzoh"
          placeholder="Kompaniya haqida izoh qoldiring "
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleChange}
          required
        />
      </div>

      <button className="orqaga" type="orqaga" onClick={MyComponent}>
        Ortga
      </button>
      <button className="jonatish" type="submit" onClick={handleSubmit}>
        Jonatish
      </button>
    </form>
  );
}

export default MyForm;

import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

function Form() {
  const navigate = useNavigate ();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    navigate('/thankspage');
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  console.log(formData)

  return (
    <div className="form">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '20', color: 'white' }}>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="name"
          style={{ color: 'white', padding: "10px" }}
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '20', color: 'white' }}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="name"
          style={{ color: 'white', padding: "10px" }}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '20', color: 'white'}}>Message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="name"
          style={{ height: '6pc', color: 'white' }}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div>
        <button className="submit" onClick={handleSubmit }  >
          <b>Submit</b>
        </button>
      </div>
    </div>
  );
}

export default Form;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { validate } from "./util";
import "./Auth.css"

const Registration = () => {
  const SERVER_ADDRESS = import.meta.env.VITE_SERVER_ADDRESS;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company: '',
    phonenumber: '',
    email: '',
    password: '',
  });
  
  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    company: '',
    phonenumber: '',
    email: '',
    password: '',
  });

  const [formattedPhone, setFormattedPhone] = useState('');
  
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    setError(prev => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validate(formData, setError)){
      return;
    }

    const data = {
      name: formData.firstname + ' ' + formData.lastname,
      company_name: formData.company,
      phone_number: formData.phonenumber,
      email: formData.email,
      password: formData.password,
    };

    axios.post(`${SERVER_ADDRESS}/user/register/`, data)
    .then(() => {
      navigate('/login')
      
      setFormData({
        firstname: '',
        lastname: '',
        company: '',
        phonenumber: '',
        email: '',
        password: '',
      });
      
      setError({
        firstname: '',
        lastname: '',
        company: '',
        phonenumber: '',
        email: '',
        password: '',
      });
    })
    .catch(err => {
      console.log(err.response)
    });
  };

  const handlePhone = (e) => {
    setError(prev => ({
      ...prev,
      phonenumber: ''
    }));

    if(e.key) {
      if(e.key === 'Backspace'){
        const val = e.target.value;

        if(val[val.length - 1] === '-' || val[val.length - 1] === ')') {
          setFormattedPhone(val.substring(0, val.length - 1));
        }
      }

      return;
    }
    
    const num = "8" + e.target.value.replace(/\D/g, '').substring(1);
    let s = '+7(';
    
    for(let i = 1; i < num.length; i++) {
      s += num[i];

      if(i === 3) {
        s += ')';
      } else if (i === 6) {
        s += '-';
      }
    }

    setFormData(prev => ({
      ...prev,
      phonenumber: num
    }));
    setFormattedPhone(s);
  }

  return (
    <div className="content">
      <div className="wrapper">
        <p className="form-title">Регистрация</p>

        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">Имя</label>

            { error.firstname && <span className="error-msg">{error.firstname}</span> }

            <input 
              id="firstname" 
              type="text"
              className="form-field" 
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastname">Фамилия</label>

            { error.lastname && <span className="error-msg">{error.lastname}</span> }

            <input 
              id="lastname" 
              type="text"
              className="form-field" 
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="company">Компания</label>

            { error.company && <span className="error-msg">{error.company}</span> }

            <input 
              id="company" 
              type="text"
              className="form-field" 
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phone-number">Номер телефона</label>

            { error.phonenumber && <span className="error-msg">{error.phonenumber}</span> }

            <input 
              id="phone-number" 
              type="tel"
              // pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}"
              maxLength="15"
              placeholder="+7(777)777-7777"
              className="form-field"
              value={formattedPhone}
              onChange={handlePhone}
              onKeyDown={handlePhone}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            { error.email && <span className="error-msg">{error.email}</span> }

            <input 
              id="email" 
              type="text"
              className="form-field" 
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Пароль</label>

            { error.password && <span className="error-msg">{error.password}</span> }

            <input 
              id="password"
              type="password"
              className="form-field" 
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Link to='/login' className="link">
            <button className="btn-link" type="button">
              Войти
            </button>
          </Link>
          
          <button className="btn-submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

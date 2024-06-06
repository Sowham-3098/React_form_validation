import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import countries from './../constants/Country'; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode: '',
    phone: '',
    country: '',
    city: '',
    aadhaar: '',
    pan: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cityList, setCityList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error message for the field being edited
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    if (name === 'country') {
      const selectedCountry = countries.find((country) => country.name === value);
      setCityList(selectedCountry ? selectedCountry.cities : []);
      setFormData((prevFormData) => ({
        ...prevFormData,
        country: value,
        city: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataQueryString = new URLSearchParams(formData).toString();
      navigate(`/success?${formDataQueryString}`);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'required';
    if (!formData.lastName) newErrors.lastName = 'required';
    if (!formData.username) newErrors.username = 'required';
    if (!formData.email) {
      newErrors.email = 'required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid Email address';
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = 'required';
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    if (!formData.phone) newErrors.phone = 'required';
    if (formData.phone.length !== 10) newErrors.phone = 'Phone number must be 10 digits';

    if (!formData.country) newErrors.country = 'required';
    if (!formData.city) newErrors.city = 'required';

    if (!formData.aadhaar) {
      newErrors.aadhaar = 'required';
    } else if (formData.aadhaar.length !== 12 || !/^\d{12}$/.test(formData.aadhaar)) {
      newErrors.aadhaar = 'Invalid Aadhaar number';
    }

    const panPattern = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
    if (!formData.pan) {
      newErrors.pan = 'required';
    } else if (!panPattern.test(formData.pan)) {
      newErrors.pan = 'Invalid PAN number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h1 className="title">React Form</h1>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label className="label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label className="label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="label">Password:</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input password-input"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="toggle-password"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label className="label">Phone Number:</label>
          <div className="phone-wrapper">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="input country-code"
            >
              <option value="">Select Country Code</option>
              {countries.map((country) => (
                <option key={country.id} value={country.mobilePrefix}>
                  {country.mobilePrefix}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input phone-number"
            />
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label className="label">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>

        <div className="form-group">
          <label className="label">City:</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select City</option>
            {cityList.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label className="label">Aadhaar No.:</label>
          <input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            className="input"
          />
          {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
        </div>

        <div className="form-group">
          <label className="label">Pan No.:</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="input"
          />
          {errors.pan && <span className="error">{errors.pan}</span>}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Success() {
  const location = useLocation();
  const formData = Object.fromEntries(new URLSearchParams(location.search));

  return (
    <div className="container">
      <div className="success-wrapper">
        <h1 className="title">Thank You for Submitting!</h1>
        {Object.keys(formData).length > 0 && (
          <div className="details">
            <h2 className="subtitle">Here are the details you submitted:</h2>
            {Object.entries(formData).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


import React, { useState } from 'react';

const Appointments = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date:', date);
    console.log('Time:', time);
  };

  return (
    <div>
      <h2>Appointments</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointments;
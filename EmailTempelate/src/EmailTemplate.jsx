// src/EmailTemplate.js
import React, { useState } from 'react';
import './EmailTemplate.css';

const EmailTemplate = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [lastDate, setLastDate] = useState('');

  const generateTemplate = () => {
    return `Hi,

Please accept this email as my formal resignation from ${companyName}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same.

Request you to consider my letter of resignation effective from ${effectiveDate}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be ${lastDate}.

I would request you to consider if an early release is possible. I am grateful to ${companyName} and looking forward to your support.

Thanks and Regards,
${name}`;
  };

  return (
    <div className="email-template">
      <h1>Resignation Email Template</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Effective Date:</label>
          <input type="date" value={effectiveDate} onChange={(e) => setEffectiveDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Last Date:</label>
          <input type="date" value={lastDate} onChange={(e) => setLastDate(e.target.value)} />
        </div>
      </form>
      <h2>Generated Email:</h2>
      <pre>{generateTemplate()}</pre>
    </div>
  );
};

export default EmailTemplate;

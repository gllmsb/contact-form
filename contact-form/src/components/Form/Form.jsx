import { useState } from 'react';
import styles from './Form.module.scss';

export const Form = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [preferredContactMethod, setPreferredContactMethod] = useState('email');
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
        fullName,
        phoneNumber,
        email,
        comment,
        preferredContactMethod,
      };
      setSubmittedData(data);
    };
  
    const handleReset = () => {
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setComment('');
      setPreferredContactMethod('email');
      setSubmittedData(null);
    };
  
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.formGroup}>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
  
          <div className={styles.formGroup}>
            <label>Preferred Contact Method:</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="phone"
                  checked={preferredContactMethod === 'phone'}
                  onChange={() => setPreferredContactMethod('phone')}
                />
                Phone
              </label>
              <label>
                <input
                  type="radio"
                  value="email"
                  checked={preferredContactMethod === 'email'}
                  onChange={() => setPreferredContactMethod('email')}
                />
                Email
              </label>
            </div>
          </div>
  
          <div className={styles.buttonGroup}>
            <button type="submit">Send</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </form>
  
        {submittedData && (
          <div className={styles.submittedData}>
            <h3>Submitted Data:</h3>
            <p><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p><strong>Phone Number:</strong> {submittedData.phoneNumber}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Comment:</strong> {submittedData.comment}</p>
            <p><strong>Preferred Contact Method:</strong> {submittedData.preferredContactMethod}</p>
          </div>
        )}
      </div>
    );
  }
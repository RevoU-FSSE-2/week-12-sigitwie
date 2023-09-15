import React from 'react';
import RegistrationForm from './components/Forms/RegistrationForm';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <RegistrationForm />
      <p>&copy; 2023 <strong>SW</strong>. RevoU week 12.</p>
    </div>
  );
};

export default App;
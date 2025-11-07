import { useState } from 'react';

const instructionsId = 'calculator-instructions';
const inputId = 'numbers-input';

const App = () => {
  const [input, setInput] = useState('');
  const [result] = useState<number | null>(null);

  const handleCalculate = () => {};

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#ffffff',
        color: '#1a1a1a',
        maxWidth: '640px',
        margin: '0 auto',
        lineHeight: 1.5,
      }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
        alt='String calculator workspace with a laptop and notepad'
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      />

      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>String Calculator</h1>
      <p id={instructionsId} style={{ marginBottom: '16px' }}>
        Enter numbers separated by commas or new lines, then select calculate to view the
        total.
      </p>

      <label
        htmlFor={inputId}
        style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>
        Numbers to add
      </label>
      <textarea
        id={inputId}
        aria-describedby={instructionsId}
        style={{
          marginBottom: '16px',
          color: '#1a1a1a',
          width: '100%',
          minHeight: '120px',
          padding: '12px',
          border: '2px solid #1a1a1a',
          borderRadius: '6px',
          fontSize: '1rem',
        }}
        placeholder='Example: 1,2,3'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type='button'
        onClick={handleCalculate}
        style={{
          padding: '12px 20px',
          backgroundColor: '#005a9c',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer',
        }}>
        Calculate
      </button>

      {result !== null && (
        <p role='status' aria-live='polite' style={{ color: '#046c4e', marginTop: '16px' }}>
          Result: {result}
        </p>
      )}
    </main>
  );
};

export default App;

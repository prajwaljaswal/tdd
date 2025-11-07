import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App accessibility', () => {
  it('provides descriptive alternative text for the hero image', () => {
    render(<App />);

    expect(
      screen.getByRole('img', {
        name: /string calculator workspace/i,
      }),
    ).toBeInTheDocument();
  });

  it('labels the number entry textarea for assistive technology users', () => {
    render(<App />);

    expect(
      screen.getByRole('textbox', { name: /numbers to add/i }),
    ).toBeInTheDocument();
  });

  it('exposes the calculate action as a button control', () => {
    render(<App />);

    const [calculateButton] = screen.getAllByRole('button', { name: /calculate/i });
    expect(calculateButton).toBeEnabled();
  });

  it('uses high contrast text colors for readability', () => {
    render(<App />);

    const [container] = screen.getAllByRole('main');
    expect(container).toHaveStyle({ color: '#1a1a1a' });

    const [textarea] = screen.getAllByRole('textbox', { name: /numbers to add/i });
    expect(textarea).toHaveStyle({ color: '#1a1a1a' });
  });

  it('announces the calculated sum when the user submits numbers', () => {
    render(<App />);

    const [textarea] = screen.getAllByRole('textbox', { name: /numbers to add/i });
    fireEvent.change(textarea, { target: { value: '1,2,3' } });

    const [calculateButton] = screen.getAllByRole('button', { name: /calculate/i });
    fireEvent.click(calculateButton);

    expect(screen.getByRole('status')).toHaveTextContent('Result: 6');
  });
});


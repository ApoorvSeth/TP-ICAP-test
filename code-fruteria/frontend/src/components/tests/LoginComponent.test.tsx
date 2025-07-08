import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginComponent from '../LoginComponent';

describe('LoginComponent', () => {
  it('renders username and password fields', () => {
    render(<LoginComponent />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows error when fields are empty and submitted', async () => {
    render(<LoginComponent />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findAllByText(/please input/i)).toHaveLength(2);
  });

  it('calls onLoginSuccess when valid credentials are submitted', async () => {
    const mockLogin = jest.fn();
    render(<LoginComponent onLoginSuccess={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '1234' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
    });
  });

  it('shows error message on invalid credentials', async () => {
    const mockLogin = jest.fn();
    render(<LoginComponent onLoginSuccess={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });
});

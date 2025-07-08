import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../UserProfile';

describe('UserProfile', () => {
  it('renders without crashing and opens popover', () => {
    render(<UserProfile theme="light" onLogout={() => {}} onThemeToggle={() => {}} />);

    // Simulate user icon click to open the popover
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log out/i })).toBeInTheDocument();
  });

  it('calls onThemeToggle when switch is clicked', () => {
    const mockToggle = jest.fn();
    render(<UserProfile theme="light" onLogout={() => {}} onThemeToggle={mockToggle} />);

    fireEvent.click(screen.getByRole('button'));
    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    expect(mockToggle).toHaveBeenCalled();
  });

  it('calls onLogout when logout button is clicked', () => {
    const mockLogout = jest.fn();
    render(<UserProfile theme="dark" onLogout={mockLogout} onThemeToggle={() => {}} />);

    fireEvent.click(screen.getByRole('button'));
    const logoutButton = screen.getByRole('button', { name: /log out/i });
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});

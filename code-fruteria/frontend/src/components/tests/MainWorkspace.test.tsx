import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainWorkspace } from '../MainWorkspace';

describe('MainWorkspace (functional)', () => {
  const mockOnDrop = jest.fn();
  const mockOnDragOver = jest.fn();
  const mockOnGridDropInfo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <MainWorkspace
        onDrop={mockOnDrop}
        onDragOver={mockOnDragOver}
        onGridDropInfo={mockOnGridDropInfo}
        gridRows={2}
        gridCols={2}
      >
        <div>Test Panel</div>
      </MainWorkspace>
    );

    expect(getByText('Test Panel')).toBeInTheDocument();
  });

  it('calls onDrop when drop event is triggered', () => {
    const { container } = render(
      <MainWorkspace
        onDrop={mockOnDrop}
        onDragOver={mockOnDragOver}
        onGridDropInfo={mockOnGridDropInfo}
        gridRows={2}
        gridCols={2}
      >
        <div>Drop Zone</div>
      </MainWorkspace>
    );

    fireEvent.drop(container.firstChild as HTMLElement);
    expect(mockOnDrop).toHaveBeenCalled();
  });

  it('calls onDragOver and onGridDropInfo on drag over event', () => {
    const { container } = render(
      <MainWorkspace
        onDrop={mockOnDrop}
        onDragOver={mockOnDragOver}
        onGridDropInfo={mockOnGridDropInfo}
        gridRows={2}
        gridCols={2}
      >
        <div>Drag Zone</div>
      </MainWorkspace>
    );

    const element = container.firstChild as HTMLElement;
    fireEvent.dragOver(element, {
      clientX: 50,
      clientY: 50,
  });

    expect(mockOnDragOver).toHaveBeenCalled();
    expect(mockOnGridDropInfo).toHaveBeenCalled();
  });
});

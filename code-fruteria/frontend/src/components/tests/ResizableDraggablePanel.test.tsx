import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ResizableDraggablePanel from '../ResizableDraggablePanel';

describe('ResizableDraggablePanel', () => {
  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();

    const requiredProps = {
      id: 'test-panel',
      key: 'test-key',
      title: 'Test Panel',
      content: <div>Test Content</div>,
      x: 100,
      y: 100,
      width: 400,
      height: 300,
      onClose,
      onMove: jest.fn(),
      onResize: jest.fn(),
      theme: "light" as "light"
    };

    render(<ResizableDraggablePanel {...requiredProps} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});

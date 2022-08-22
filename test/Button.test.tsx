import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../src/Button/Button';

describe('Button', () => {
  describe('should be rendered correctly', () => {
    it('default', () => {
      render(<Button onClick={console.log}>Click me</Button>);
      const button = screen.getByText('Click me');
      expect(button.classList.contains('button_primary')).toBeTruthy();
    });
    it('success', () => {
      const { container } = render(
        <Button onClick={console.log} variant="success">
          Click me
        </Button>
      );
      const button = container.querySelector('button');
      expect(button!.classList.contains('button_success')).toBeTruthy();
    });
    it('disabled', () => {
      const { asFragment } = render(
        <Button onClick={console.log} isDisabled={true}>
          Click me
        </Button>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be clickable', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should not be clickable if disabled', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} isDisabled={true}>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).not.toHaveBeenCalled();
  });
});

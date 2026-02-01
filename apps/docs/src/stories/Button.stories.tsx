import type { Meta, StoryObj } from '@storybook/react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', size = 'medium', children, onClick }: ButtonProps) => {
  const baseStyles = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: size === 'large' ? 'var(--typography-body)' : 'var(--typography-body-small)',
    fontWeight: 'var(--font-weight-medium)',
    padding: size === 'large' ? '14px 24px' : '12px 20px',
    borderRadius: 'var(--radius-s)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all var(--motion-duration-normal) var(--motion-easing-default)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-2)',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--component-button-primary-bg)',
      color: 'var(--component-button-primary-text)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--component-button-secondary-text)',
      border: '1px solid var(--component-button-secondary-border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--component-button-ghost-text)',
    },
  };

  return (
    <button style={{ ...baseStyles, ...variantStyles[variant] }} onClick={onClick}>
      {children}
    </button>
  );
};

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Botão Primário',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Botão Secundário',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Botão Ghost',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Botão Grande',
  },
};
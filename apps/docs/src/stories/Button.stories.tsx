import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@prismia/ui-tailwind';

/**
 * Button - Componente de botão do Prismia Design System
 * 
 * Botão versátil com múltiplas variantes, tamanhos e estados.
 * Segue rigorosamente os tokens do Design System Prismia.
 */
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
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Botão primário - Ações principais
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Botão Primário',
  },
};

/**
 * Botão secundário - Ações secundárias
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Botão Secundário',
  },
};

/**
 * Botão ghost - Ações terciárias ou contextuais
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Botão Ghost',
  },
};

/**
 * Tamanho pequeno
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Pequeno',
  },
};

/**
 * Tamanho grande
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Grande',
  },
};

/**
 * Estado desabilitado
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Desabilitado',
    disabled: true,
  },
};

/**
 * Demonstração de todas as variantes
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primário</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

/**
 * Demonstração de todos os tamanhos
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Pequeno</Button>
      <Button size="md">Médio</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};
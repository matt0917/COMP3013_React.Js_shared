// components/ui/label.tsx
import React from 'react';

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
};

export const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);

// components/ui/card.tsx
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

type CardHeaderProps = {
  children: ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps) => (
  <div className="p-4 border-b">{children}</div>
);

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export const CardTitle = ({ children, className }: CardTitleProps) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

type CardDescriptionProps = {
  children: ReactNode;
};

export const CardDescription = ({ children }: CardDescriptionProps) => (
  <p className="text-sm text-gray-600">{children}</p>
);

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export const CardContent = ({ children, className }: CardContentProps) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);

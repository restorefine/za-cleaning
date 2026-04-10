import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group flex flex-col h-full rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-light hover:shadow-xl">
      {icon && (
        <div className="mb-5 text-4xl text-accent transition-transform duration-300 group-hover:scale-110 group-hover:text-primary">
          {icon}
        </div>
      )}
      <h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3>
      <p className="m-0 flex-1 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

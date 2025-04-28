import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;
import React from 'react';
import { SectionItem } from './types';

interface LearningOutcomesProps {
    title: string;
    items: SectionItem[];
}

/**
 * Displays the learning outcomes of the course.
 * @param {LearningOutcomesProps} props - Component properties.
 * @returns {JSX.Element} The learning outcomes section.
 */
const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ title, items }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-2 columns-1 md:columns-2">
        {items.map((item) => (
          <li key={item.id} className="text-gray-700">{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningOutcomes;
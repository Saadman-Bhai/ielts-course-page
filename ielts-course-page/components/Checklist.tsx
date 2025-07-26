import React from 'react';
import Image from 'next/image';
import { ChecklistItem } from './types';

interface ChecklistProps {
  items: ChecklistItem[];
}

/**
 * Renders a list of features or items included in the course.
 * @param {ChecklistProps} props - Component properties.
 * @returns {JSX.Element} The checklist component.
 */
const Checklist: React.FC<ChecklistProps> = ({ items }): JSX.Element => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">What's Included</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center">
            <Image src={item.icon} alt="" width={24} height={24} className="mr-3" />
            <span className="text-gray-700">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
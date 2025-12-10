import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { formatDateRange } from '../utils/formatDate';

const TimelineItem = ({ item, isExperience = true }) => {
  const startDate = item.start_date;
  const endDate = item.end_date;
  const isCurrent = isExperience ? item.current_job : false;

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0F0F10] group-hover:scale-125 transition-transform" />
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-white/10 last:hidden" />

      <div className="bg-[#1A1A1E] rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {isExperience ? item.title : item.degree}
            </h3>
            <p className="text-blue-400 font-medium">
              {isExperience ? item.company : item.school}
            </p>
          </div>
          {isCurrent && (
            <span className="px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full w-fit">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{formatDateRange(startDate, endDate, isCurrent)}</span>
          </div>
          {item.location && (
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>{item.location}</span>
            </div>
          )}
        </div>

        {item.description && (
          <p className="text-gray-300 mb-4 leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-[#0F0F10] text-gray-300 rounded-md border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
export const formatDate = (dateString) => {
  if (!dateString) return 'Present';

  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
};

export const formatDateRange = (startDate, endDate, isCurrent = false) => {
  const start = formatDate(startDate);
  const end = isCurrent ? 'Present' : formatDate(endDate);
  return `${start} - ${end}`;
};

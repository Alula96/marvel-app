export const formatDateToHuman = (date) => {
  return date.toLocaleString('en-US', {
    day: 'numeric', 
    year: 'numeric',
    month: 'long'
  });
};

export const formatDateToDefault = (date) => {
  return date.toLocaleString('en-US', {
    day: '2-digit', 
    month: '2-digit',
    year: 'numeric'
  });
};
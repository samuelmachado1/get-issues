export const dateFormatterBR = (date) => {
  let dateCopy = date;
  if (typeof date === 'object') {
    dateCopy = JSON.stringify(date);
  }
  const [yyyy, mm, dd] = dateCopy.split('T', 1)[0].replace('"', '').split('-');
  return `${dd}/${mm}/${yyyy}`;
};

export const dateFormatterUSA = (date) => {
  let dateCopy = date;
  if (typeof date === 'object') {
    dateCopy = JSON.stringify(date);
  }
  const [yyyy, mm, dd] = dateCopy.split('T', 1)[0].replace('"', '').split('-');
  return `${yyyy}-${mm}-${dd}`;
};

export const dateFormatterBrToUsa = (date) => {
  let dateCopy = date;

  if (typeof date === 'object') {
    dateCopy = JSON.stringify(date);
  }
  if (date === null || date === 'Não marcada') {
    dateCopy = '06/06/2006';
  }

  const [dd, mm, yyyy,] = dateCopy.split('T', 1)[0].replace('"', '').split('/');

  return `${yyyy}-${mm}-${dd}`;
};

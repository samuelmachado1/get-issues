export function getFileExtension(fileName) {
  const nameSplit = fileName.split('.');
  return nameSplit[nameSplit.length - 1];
}

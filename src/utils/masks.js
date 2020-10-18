export function cpfMask(cpf) {
  cpf = cpf.toString().replace(/\D/g, '');
  const length = cpf.length;
  if (length > 3 && length <= 6) {
    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}`;
  } if (length > 6 && length <= 9) {
    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}`;
  } if (length > 9) {
    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;
  }
  return cpf.toString();
}

export function cpfMaskValue(mask) {
  let value = mask;
  if (mask) {
    value = value.split('.').join('');
    value = value.split('-').join('');
  }
  return value.substr(0, 11);
}

export function limit(value, size) {
  
  return value.toString().substr(0, size);
}

// export function phoneMask(value){

//   return value
//     .replace(/\D/g, '')
//     .replace(/(\d{2})(\d)/, '($1) $2')
//     .replace(/(\d{4})(\d)/, '$1-$2')
//     .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
//     .replace(/(-\d{4})\d+?$/, '$1')
//     .toString()
    
//   }


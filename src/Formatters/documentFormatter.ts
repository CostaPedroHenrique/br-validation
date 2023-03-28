const documentFormatter = (document: string): string | null => {
  const onlyNumbers = document.replace(/[^\d]+/g, '')
  const isCpf = onlyNumbers.length <= 11
  const isCnpj = onlyNumbers.length <= 14
  if (isCpf) {
    var cpfParser = onlyNumbers
      .replace(/(\d{3})/, '$1.')
      .replace(/(\d{3})\.(\d{3})/, '$1.$2.')
      .replace(/(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-')
      .replace(/(\d{3})\.(\d{3})\.(\d{3})-(\d{2})/, '$1.$2.$3-$4')
    return cpfParser
  } else if (isCnpj) {
    var cnpjParser = onlyNumbers
      .replace(/(\d{2})/, '$1.')
      .replace(/(\d{2})\.(\d{3})/, '$1.$2.')
      .replace(/(\d{2})\.(\d{3})\.(\d{3})/, '$1.$2.$3/')
      .replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})/, '$1.$2.$3/$4-')
      .replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})/, '$1.$2.$3/$4-$5')
    return cnpjParser
  }
  return null
}

export default documentFormatter

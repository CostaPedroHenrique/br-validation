const phoneFormatter = (value: string) => {
  const phone = value.replace(/\D/g, '')
  var phoneParser = phone
    .replace(/(\d{2})/, '($1) ')
    .replace(/\((\d{2})\)\ (\d{4,5})/, '($1) $2-')
    .replace(/\((\d{2})\)\ (\d{4,5})\ (\d{4})/, '($1) $2-$3')

  return phoneParser
}

export default phoneFormatter

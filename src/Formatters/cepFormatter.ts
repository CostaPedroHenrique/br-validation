const cepFormatter = (value: string): string => {
  return value.replace(/(\d{5})(\d{3})/, '$1-$2')
}

export default cepFormatter

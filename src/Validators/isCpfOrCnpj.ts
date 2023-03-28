const isCpfOrCnpj = (value: string): 'cpf' | 'cnpj' | null => {
  const onlyNumbers = value.replace(/[^\d]+/g, '')
  const isCpf = onlyNumbers.length === 11
  const isCnpj = onlyNumbers.length === 14
  return isCpf ? 'cpf' : isCnpj ? 'cnpj' : null
}

export default isCpfOrCnpj

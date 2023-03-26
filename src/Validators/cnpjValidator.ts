const cnpjValidator = (cnpj: string) => {
  const cnpjNumbers = cnpj.replace(/[^\d]+/g, '')

  if (
    cnpjNumbers.length != 14 ||
    cnpjNumbers == '00000000000000' ||
    cnpjNumbers == '11111111111111' ||
    cnpjNumbers == '22222222222222' ||
    cnpjNumbers == '33333333333333' ||
    cnpjNumbers == '44444444444444' ||
    cnpjNumbers == '55555555555555' ||
    cnpjNumbers == '66666666666666' ||
    cnpjNumbers == '77777777777777' ||
    cnpjNumbers == '88888888888888' ||
    cnpjNumbers == '99999999999999'
  ) {
    return false
  }

  const cnpjNumbersArray = cnpjNumbers.split('').map(number => parseInt(number))

  const firstDigit = cnpjNumbersArray[12]
  const secondDigit = cnpjNumbersArray[13]

  const firstDigitCalc = cnpjNumbersArray
    .slice(0, 12)
    .reduce((acc, number, index) => {
      const multiplier = index < 4 ? index + 5 : index - 3
      return acc + number * multiplier
    }, 0)
  const firstDigitCalcRest = 11 - (firstDigitCalc % 11)
  const firstDigitCalcResult =
    firstDigitCalcRest === 10 || firstDigitCalcRest === 11
      ? 0
      : firstDigitCalcRest

  const secondDigitCalc = cnpjNumbersArray
    .slice(0, 13)
    .reduce((acc, number, index) => {
      const multiplier = index < 5 ? index + 6 : index - 2
      return acc + number * multiplier
    }, 0)
  const secondDigitCalcRest = 11 - (secondDigitCalc % 11)
  const secondDigitCalcResult =
    secondDigitCalcRest === 10 || secondDigitCalcRest === 11
      ? 0
      : secondDigitCalcRest

  return (
    firstDigit === firstDigitCalcResult && secondDigit === secondDigitCalcResult
  )
}

export default cnpjValidator

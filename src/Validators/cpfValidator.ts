const cpfValidator = (cpf: string): boolean => {
  const cpfNumbers = cpf.replace(/[^\d]+/g, '')

  if (
    cpfNumbers.length != 11 ||
    cpfNumbers == '00000000000' ||
    cpfNumbers == '11111111111' ||
    cpfNumbers == '22222222222' ||
    cpfNumbers == '33333333333' ||
    cpfNumbers == '44444444444' ||
    cpfNumbers == '55555555555' ||
    cpfNumbers == '66666666666' ||
    cpfNumbers == '77777777777' ||
    cpfNumbers == '88888888888' ||
    cpfNumbers == '99999999999'
  ) {
    return false
  }

  const cpfNumbersArray = cpfNumbers.split('').map(number => parseInt(number))

  const firstDigit = cpfNumbersArray[9]
  const secondDigit = cpfNumbersArray[10]

  const firstDigitCalc = cpfNumbersArray
    .slice(0, 9)
    .reduce((acc, number, index) => acc + number * (10 - index), 0)
  const firstDigitCalcRest = 11 - (firstDigitCalc % 11)
  const firstDigitCalcResult =
    firstDigitCalcRest === 10 || firstDigitCalcRest === 11
      ? 0
      : firstDigitCalcRest

  const secondDigitCalc = cpfNumbersArray
    .slice(0, 10)
    .reduce((acc, number, index) => acc + number * (11 - index), 0)
  const secondDigitCalcRest = 11 - (secondDigitCalc % 11)
  const secondDigitCalcResult =
    secondDigitCalcRest === 10 || secondDigitCalcRest === 11
      ? 0
      : secondDigitCalcRest

  return (
    firstDigit === firstDigitCalcResult && secondDigit === secondDigitCalcResult
  )
}

export default cpfValidator

import MessageFormat from 'messageformat'

export const generateTranslations = (formatter) => {
  return {
    coresAmount: formatter.compile(`{count} {count, plural, one {ядро} few {ядра} other {ядер}}`),
    currency: {
      rub: formatter.compile('{V, number}')
    }
  }
}

export const translations = generateTranslations(new MessageFormat('ru'))

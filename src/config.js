export const PHONE_DISPLAY = '(12) 99335-5553'
export const PHONE_E164 = '5512993355553'
export const INSTAGRAM_URL = 'https://www.instagram.com/tclima_engenharia/'

export const DEFAULT_MESSAGE =
  'Olá, TCLIMA! Vim pelo site e gostaria de solicitar um orçamento para ar-condicionado. 😊'

export function waLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}

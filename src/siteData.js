
export const WHATSAPP_NUMBER = '5588999851852'
export const INSTAGRAM_URL = 'https://www.instagram.com/osaulofigueiredo/'
// Completar somente com endereços oficiais confirmados.
export const TIKTOK_URL = ''
export const YOUTUBE_CHANNEL_URL = ''
export const FEATURED_VIDEO_URL = ''
export const FEATURED_VIDEO_TITLE = ''
// Apenas obras reais autorizadas: { title, category, image, url }.
export const portfolioProjects = []
export const whatsAppUrl = (message = 'Olá, Saulo! Gostaria de conversar sobre um projeto audiovisual.') =>
  'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
export const navigation = [
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'YouTube', href: '/#youtube' },
  { label: 'Sobre', href: '/#sobre' },
]

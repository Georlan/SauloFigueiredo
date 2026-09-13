import {
  Clapperboard,
  Gauge,
  Layers3,
  MonitorPlay,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'

export const WHATSAPP_URL =
  'https://wa.me/5588999851852?text=Ol%C3%A1%20Saulo,%20quero%20saber%20mais%20sobre%20a%20sua%20mentoria!'
export const INSTAGRAM_URL = 'https://www.instagram.com/osaulofigueiredo/'

export const navItems = [
  ['Mentoria', '#mentoria'],
  ['Método', '#metodo'],
  ['Produtos', '#produtos'],
  ['Sobre', '#sobre'],
]

export const pillars = [
  {
    icon: Clapperboard,
    number: '01',
    title: 'Audiovisual cinematográfico',
    description:
      'Captação, luz, enquadramento e edição pensados para transformar conteúdo em uma experiência visual coerente com o seu posicionamento.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Percepção de valor',
    description:
      'Posicionamento, direção criativa e consistência visual para sair da disputa por preço e sustentar uma presença mais premium.',
  },
  {
    icon: MonitorPlay,
    number: '03',
    title: 'Storytelling & retenção',
    description:
      'Estruturas narrativas para abrir vídeos com intenção, manter atenção e transformar ideias soltas em histórias que fazem sentido.',
  },
  {
    icon: Gauge,
    number: '04',
    title: 'Monetização & vendas',
    description:
      'Conteúdo conectado a oferta: mensagens, chamadas para ação e jornadas que aproximam audiência de conversas comerciais reais.',
  },
]

export const modules = [
  {
    index: '01',
    kicker: 'Flagship',
    title: 'Mentoria 1 a 1',
    description:
      'Acompanhamento individual para diagnosticar posicionamento, organizar narrativa, direcionar o audiovisual e transformar execução em um sistema repetível.',
    bullets: [
      'Análise de perfil e posicionamento',
      'Direção criativa aplicada ao seu contexto',
      'Reuniões estratégicas e plano de ação',
      'Feedback sobre conteúdo e execução',
    ],
    icon: Sparkles,
  },
  {
    index: '02',
    kicker: 'Toolkit visual',
    title: 'Dark Aesthetic Presets',
    description:
      'Uma base visual para acelerar tratamento e manter consistência de cor entre peças, sem transformar preset em atalho para direção criativa.',
    bullets: [
      'Base monocromática e cinematográfica',
      'Consistência visual entre conteúdos',
      'Fluxo mais rápido de pós-produção',
      'Aplicação flexível ao material captado',
    ],
    icon: Layers3,
  },
  {
    index: '03',
    kicker: 'Creative OS',
    title: 'Sistema para creators',
    description:
      'Templates e fluxos de produção para organizar ideias, roteiros, gravações e publicação em uma operação mais previsível.',
    bullets: [
      'Framework de roteiros e storytelling',
      'Pipeline editorial no Notion',
      'Biblioteca de ideias e referências',
      'Fluxo de produção de ponta a ponta',
    ],
    icon: Workflow,
  },
]

export const faqs = [
  {
    question: 'Para quem é a mentoria?',
    answer:
      'Para profissionais, creators e negócios pessoais que já entendem que imagem, narrativa e posicionamento influenciam percepção de valor — e querem organizar isso em uma estratégia executável, com acompanhamento individual.',
  },
  {
    question: 'Preciso de câmera profissional?',
    answer:
      'Não. A direção vem antes do equipamento. O trabalho parte da estrutura que você já tem e prioriza luz, enquadramento, roteiro, captação e edição com intenção. Equipamento entra quando existe um motivo claro para evoluir.',
  },
  {
    question: 'Como funciona o processo de entrada?',
    answer:
      'O primeiro passo é uma conversa pelo WhatsApp para entender momento, objetivo e aderência. A partir daí, Saulo apresenta o formato mais adequado e os próximos passos.',
  },
  {
    question: 'É só sobre estética?',
    answer:
      'Não. Estética é uma camada do posicionamento. A proposta conecta direção visual, narrativa, percepção de valor e conversão para que o conteúdo tenha função comercial sem parecer genérico.',
  },
]

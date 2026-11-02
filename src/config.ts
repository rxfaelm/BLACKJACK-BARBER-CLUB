/** Substitua pelos números reais, com DDI e DDD, apenas dígitos. */
export const CONTACT = {
  barbershopWhatsApp: '5511900000000', // PLACEHOLDER: telefone fictício da barbearia
  portfolioWhatsApp: 'SEU_NUMERO_AQUI', // PLACEHOLDER: substitua pelo seu número
  instagram: 'https://instagram.com/',
}

export const services = [
  { name: 'Corte clássico', detail: 'Tesoura ou máquina, acabamento na régua', price: 55, duration: '45 min' },
  { name: 'Corte + barba', detail: 'O combo completo, toalha quente inclusa', price: 95, duration: '1h 15' },
  { name: 'Barba tradicional', detail: 'Desenho, navalha e toalha quente', price: 50, duration: '35 min' },
  { name: 'Degradê', detail: 'Fade na medida, finalização com pomada', price: 60, duration: '50 min' },
  { name: 'Sobrancelha', detail: 'Limpeza e desenho natural', price: 20, duration: '15 min' },
  { name: 'Combo pai & filho', detail: 'Dois cortes, uma cadeira de cada vez', price: 95, duration: '1h 30' },
]

export const barbers = [
  { name: 'Rafa “Navalha”', role: 'CORTE & DEGRADÊ', image: 'photo-1621605815971-fbc98d665033', number: '01' },
  { name: 'Júlio Santos', role: 'BARBA & CLÁSSICOS', image: 'photo-1503951914875-452162b0f3f1', number: '02' },
  { name: 'Caio Martins', role: 'CORTE & TEXTURA', image: 'photo-1599351431202-1e0f0137899a', number: '03' },
]

export const gallery = [
  { image: 'photo-1503951914875-452162b0f3f1', label: 'O espaço', className: 'gallery-tall' },
  { image: 'photo-1621605815971-fbc98d665033', label: 'Precisão no detalhe', className: '' },
  { image: 'photo-1599351431202-1e0f0137899a', label: 'Cadeira ocupada', className: '' },
  { image: 'photo-1622286342621-4bd786c2447c', label: 'No capricho', className: 'gallery-wide' },
]

export const photo = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`

const greeting = () => {
  const horas = Number(new Date().toTimeString().slice(0, 2))
  const lastPart = horas < 12 && horas > 8
    ? 'dia 🌤'
    : horas < 18 && horas > 8
      ? 'tarde ⛅'
      : 'noite 🌙'
  return `${lastPart.includes('dia') ? 'bom' : 'boa'} ${lastPart}`
}

export const state = () => ({
  messages: {
    '/': [
      `Olá, ${greeting()}`,
      'Me chamo Flávio, e trabalho com programação Web.',
      'Hoje, com minhas soluções, consigo ajudar empreendedores a terem controle de seus negócios e finanças de forma digital, e meu foco é alcançar o nível de escala nos meus projetos.',
      'Ao lado você encontrará alguns dos trabalhos que considero importante para o meu aprendizado! 😉'
    ]
  }
})

export const getters = {
  getMessages: state => route => state.messages[route]
}

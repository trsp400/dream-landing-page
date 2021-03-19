const question1 = {
  quest: 'Se você investisse R$ 1.000, qual seria a sua preferência?',
  options: {
    Conservador:
      '<span>Aumentar para <strong>R$ 1.200</strong> no fim do seu ciclo de investimento, <strong>sem eventuais riscos</strong>.</span>',
    Moderado:
      '<span>Ter a possibilidade de aumentar para <strong>R$ 1.500</strong> no fim do seu ciclo, com um <strong>risco moderado</strong>.</span>',
    Arrojado:
      '<span>Aumentar para <strong>R$ 2.200</strong> no fim do seu ciclo de investimento, <strong>com risco elevado</strong>.</span>',
  },
};

const question2 = {
  quest: 'Qual é o seu principal objetivo ao investir seu dinheiro?',
  options: {
    Conservador:
      '<span><strong>Preservar</strong> meu patrimônio assumindo um <strong>menor</strong> risco.</span>',
    Moderado:
      '<span>Uma combinação entre <strong>preservação</strong> do patrimônio e sua <strong>valorização</strong>.</span>',
    Arrojado:
      '<span><strong>Maximizar</strong> o potencial de ganho assumindo um <strong>risco maior</strong>, porém, com perdas controladas.</span>',
  },
};

const question3 = {
  quest:
    'As oscilações do mercado depreciam seus investimentos consideravelmente. O que você faria?',
  options: {
    Conservador:
      '<span>Retiraria todo o seu dinheiro, a fim de preservar seu patrimonio e evitar novas perdas.</span>',
    Moderado:
      '<span>Manteria o meu dinheiro e faria uma <strong>revisão</strong> dos ativos que compõe a sua carteira.</span>',
    Arrojado:
      '<span>Entenderia que <strong>oscilações</strong> são comuns no mercado e buscaria uma forma de <strong>recuperar</strong> esse prejuizo.</span>',
  },
};
export { question1, question2, question3 };

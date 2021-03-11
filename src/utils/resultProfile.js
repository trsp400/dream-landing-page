export default (profile = 'Conservador/Conservador') => {
  const [first, second] = profile.split('/');

  switch (first) {
    case `Conservador`:
      return {
        label1: `Prefiro ganhar pouco, mas ganhar sempre!`,
        label2: `Se para mergulhar em um baú de moedas de ouro, você tiver que pular de um precipício, você não pula. Independente do tamanho da montanha, arriscar, pra você, não é uma opção. Então, você procura ficar no mesmo caminho, pela estrada afora, sem montanhas e com menos moedas de ouro na sacola.`,
        label3: `Sua prioridade é a segurança.`,
      };
    case `Moderado`:
      return {
        label1: `Quem não arrisca não petisca!`,
        label2: `Se você está caminhando pela estrada em busca dos baús de ouro, você procura atalhos. Quando encontra um precipício, fica na dúvida: pular ou não pular? Para mergulhar no baú, você só pula nas montanhas menores.`,
        label3: `Por isso, você está disposto a apimentar um pouco mais a sua carteira de investimentos, buscando uma rentabilidade levemente acima da média, sem correr grandes riscos.`,
      };
    case `Arrojado`:
      return {
        label1: `Maior risco, maior retorno.`,
        label2: `Pela estrada dos baús de ouro, você quer mergulhar em todos, sem medo. À frente de um precipício, você pula sem hesitar. Quanto maior a montanha, melhor! `,
        label3: `Apesar de não gostar de uma queda acentuada, o que te motiva é poder subir ainda mais forte. Você entende de mercado e quer alavancar o resultado da sua carteira de investimentos.`,
      };
  }
};

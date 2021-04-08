export default (profile = 'Conservador', rate) => {
  // const [first, second] = profile.split('/');

  const parseRate = parseFloat(rate).toFixed(2);

  if (profile === 'Conservador') {
    switch (true) {
      case parseRate <= 0.15:
        return `Em meio a isso tudo, notamos que a sua carteira está de acordo com o que você quer. Seus sonhos, portanto, são factíveis.`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `A sua carteira de investidor está alinhada com o caminho que você precisa seguir, logo, seus sonhos são possíveis de realizar.`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `A rentabilidade que você precisa ter é compatível com o resultado da sua carteira conservadora. Sendo assim, é viável concretizar os seus sonhos.`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Para atingir esse objetivo, dentro do perfil conservador, será necessário recorrer a investimentos com os quais você não está acostumado. Mas não se preocupe, é possível fazer isso com equilíbrio, sem alterar demasiadamente a sua forma de pensar e agir nos investimentos.`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Acontece que a montagem de carteira que precisa ser feita foge consideravelmente da sua carteira conservador. Por isso, será necessário rever  a sua forma de investir, o que é ótimo!`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Essa rentabilidade é viável, porém, não está compatível com seu perfil conservador. Será necessário rever seus objetivos, seu horizonte de tempo ou seu valor de contribuição mensal.`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Este tipo de rendimento não é muito viável. Temos 3 opções: rever seus objetivos, seu horizonte de tempo ou o seu valor de contribuição mensal.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Este tipo de rendimento não é muito viável. Temos 3 opções: rever seus objetivos, seu horizonte de tempo ou o seu valor de contribuição mensal.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Este tipo de rendimento não é muito viável. Temos 3 opções: rever seus objetivos, seu horizonte de tempo ou o seu valor de contribuição mensal.`;
      case parseRate > 2.5:
        return `Este tipo de rendimento não é muito viável. Temos 3 opções: rever seus objetivos, seu horizonte de tempo ou o seu valor de contribuição mensal.`;
    }
  }

  if (profile === 'Moderado') {
    switch (true) {
      case parseRate <= 0.15:
        return `Você está disposto a apimentar um pouco mais a sua carteira de investimentos, buscando uma rentabilidade levemente acima da média sem precisar correr grandes riscos. Entre casar ou comprar uma bicicleta, você pode ter os dois!`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `Você está disposto a apimentar um pouco mais a sua carteira de investimentos, buscando uma rentabilidade levemente acima da média sem precisar correr grandes riscos. Entre casar ou comprar uma bicicleta, você pode ter os dois!`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `Você está disposto a apimentar um pouco mais a sua carteira de investimentos, buscando uma rentabilidade levemente acima da média, com ativos mais estratégicos, que te aproximem do seu objetivo.`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Seu perfil e seus sonhos estão perfeitamente alinhados. Você poderá trabalhar o seu dinheiro da forma mais adequada à sua carteira moderada!`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Seu perfil e seus sonhos estão super de acordo. Você poderá trabalhar o seu dinheiro da forma mais adequada à sua carteira moderada!`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Pela sua carteira de investidor, talvez você tenha que sair um pouco da sua zona de conforto para atingir esses objetivos. É primordial que você busque uma casa de análise conceituada e converse com um planejador financeiro experiente.`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Este tipo de rendimento é viável, mas está distante da sua carteira moderada. É necessário rever seus objetivos, seu horizonte de tempo ou seu valor de contribuição mensal.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Esta rentabilidade é possível, mas está desalinhada com o seu perfil moderado. Para transformar os seus sonhos em realidade, é necessário rever o seu perfil de investidor.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Este tipo de rendimento não é viável, e não condiz com a sua carteira moderada. Para conquistar o que você quer, precisamos rever seus objetivos, seu horizonte de tempo ou seu valor de contribuição mensal.`;
      case parseRate > 2.5:
        return `Este tipo de rendimento não é viável, e não condiz com a sua carteira moderada. Para conquistar o que você quer, precisamos rever seus objetivos, seu horizonte de tempo ou seu valor de contribuição mensal.`;
    }
  }

  if (profile === 'Arrojado') {
    switch (true) {
      case parseRate <= 0.15:
        return `Você pode sonhar MUITO mais! O perfil arrojado permite diversificar a sua carteira para ter uma rentabilidade maior.

        Entre casar ou comprar uma bicicleta, você pode optar pelos dois com as melhores marcas e fornecedores.`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `Você pode ter objetivos ainda mais grandiosos! O perfil arrojado permite diversificar a sua carteira para ter uma rentabilidade maior.

        Entre casar ou comprar uma bicicleta, você pode optar pelos dois com tudo do bom e do melhor!`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `Há espaço para sonhos muito maiores... Que tal revermos seus objetivos? Você vai se surpreender quando descobrir o quanto cabe no seu bolso!`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Sonhe mais, MUITO mais! Com esse perfil, é possível. Então, que tal revermos os seus objetivos? Temos certeza de que você vai se surpreender quando descobrir o quanto você pode conquistar!`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Seus sonhos podem ser muito maiores. Que tal revermos os seus objetivos? Temos certeza de que você vai se surpreender com os resultados que podemos atingir juntos.`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Seus sonhos e a sua carteira de investidor estão perfeitamente alinhados. Há várias formas de montar a sua carteira para cumprir os seus objetivos sem precisar expor grande parte de sua carteira em ativos de risco.`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Seus sonhos estão de acordo com a sua carteira de investidor. Há várias formas de montar a sua carteira sem precisar expor grande parte dela em ativos de risco.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Seus sonhos e a sua carteira de investidor estão alinhados. Há várias formas de montar a sua carteira para alcançar tudo que você quer, porém,  como os  níveis de rendimento são altos, é necessário ter muito cuidado para não se exceder nos ativos de risco.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Seus sonhos estão totalmente de acordo com a sua carteira de investidor. Há várias formas de montar a sua carteira para cumprir com seus objetivos, porém, para atingir níveis de rendimento tão altos, é recomendável tomar muito cuidado para não se exceder nos ativos de risco.`;
      case parseRate > 2.5:
        return `Seus sonhos estão totalmente de acordo com a sua carteira de investidor. Há várias formas de montar a sua carteira para cumprir com seus objetivos, porém, para atingir níveis de rendimento tão altos, é recomendável tomar muito cuidado para não se exceder nos ativos de risco.`;
    }
  }
};

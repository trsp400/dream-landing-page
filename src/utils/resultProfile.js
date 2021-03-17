export default (profile = 'Conservador', rate) => {
  // const [first, second] = profile.split('/');

  const parseRate = parseFloat(rate).toFixed(2);

  if (profile === 'Conservador') {
    switch (true) {
      case parseRate <= 0.15:
        return `Em meio a isso tudo, notamos que o seu perfil de investidor está de acordo com o que você quer. Seus sonhos, portanto, são factíveis.`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `O seu perfil de investidor está alinhado com o caminho que você precisa seguir, logo, seus sonhos são possíveis de realizar.`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `A rentabilidade que você precisa ter é compatível com o resultado do seu perfil conservador. Sendo assim, é viável concretizar os seus sonhos.`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Para atingir esse objetivo, dentro do perfil conservador, será necessário recorrer a investimentos com os quais você não está acostumado. Mas não se preocupe, é possível fazer isso com equilíbrio, sem alterar demasiadamente a sua forma de pensar e agir nos investimentos.`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Acontece que a montagem de carteira que precisa ser feita foge consideravelmente do seu perfil conservador. Por isso, será necessário rever  a sua forma de investir, o que é ótimo!`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Essa rentabilidade é viável, porém, não está compatível com seu perfil conservador. Será necessário rever o seu horizonte de tempo, para concretizar seus sonhos`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Este tipo de rendimento é viável, mas está muito desalinhado com o seu perfil conservador. Temos 2 opções: repensar seus objetivos ou revisar o seu tipo de perfil.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Alcançar essa rentabilidade é possível, mas ela não se alinha com o seu perfil conservador. Neste cenário, seus objetivos precisam ser revistos. A outra alternativa é rever o seu perfil de investidor.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Este tipo de rendimento é factível, mas foge demasiadamente do seu perfil conservador. Reconsiderar os seus objetivos ou rever o seu perfil são alternativas necessárias.`;
      case parseRate > 2.5:
        return `Este tipo de rendimento é factível, mas foge demasiadamente do seu perfil conservador. Reconsiderar os seus objetivos ou rever o seu perfil são alternativas necessárias.`;
    }
  }

  if (profile === 'Moderado') {
    switch (true) {
      case parseRate <= 0.15:
        return `Sem precisar correr grandes riscos. Entre casar ou comprar uma bicicleta, você pode ter os dois!`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `Sem precisar correr grandes riscos. Entre casar ou comprar uma bicicleta, você pode ter os dois!`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `Com ativos mais estratégicos, que te aproximem do seu objetivo.`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Seu perfil e seus sonhos estão perfeitamente alinhados. Você poderá trabalhar o seu dinheiro da forma mais adequada ao seu perfil moderado!`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Seu perfil e seus sonhos estão super de acordo. Você poderá trabalhar o seu dinheiro da forma mais adequada ao seu perfil moderado!`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Pelo seu perfil de investidor, talvez você tenha que sair um pouco da sua zona de conforto para atingir esses objetivos. É primordial que você busque uma casa de análise conceituada e converse com um planejador financeiro experiente.`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Este tipo de rendimento é viável, mas está distante do seu perfil moderado. É necessário rever seus sonhos ou rever o seu perfil.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Esta rentabilidade é possível, mas está desalinhada com o seu perfil moderado. Para transformar os seus sonhos em realidade, é necessário rever o seu perfil de investidor.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Este tipo de rendimento é viável, mas não condiz com o perfil moderado. Para conquistar o que você quer, precisamos rever o seu perfil de investidor. Caso você não se sinta confortável, recomendamos uma consultoria com nossos especialistas.`;
      case parseRate > 2.5:
        return `Este tipo de rendimento é viável, mas não condiz com o perfil moderado. Para conquistar o que você quer, precisamos rever o seu perfil de investidor. Caso você não se sinta confortável, recomendamos uma consultoria com nossos especialistas.`;
    }
  }

  if (profile === 'Arrojado') {
    switch (true) {
      case parseRate <= 0.15:
        return `Mas você pode sonhar MUITO mais! O perfil arrojado permite diversificar a sua carteira para ter uma rentabilidade maior. 

        Entre casar ou comprar uma bicicleta, você pode optar pelos dois com as melhores marcas e fornecedores.`;
      case parseRate > 0.15 && parseRate <= 0.25:
        return `Mas você pode ter objetivos ainda mais grandiosos! O perfil arrojado permite diversificar a sua carteira para ter uma rentabilidade maior. 

        Entre casar ou comprar uma bicicleta, você pode optar pelos dois com tudo do bom e do melhor!`;
      case parseRate > 0.25 && parseRate <= 0.4:
        return `Há espaço para sonhos muito maiores... Que tal revermos seus objetivos? Você vai se surpreender quando descobrir o quanto cabe no seu bolso!`;
      case parseRate > 0.4 && parseRate <= 0.6:
        return `Sonhe mais, MUITO mais! Com esse perfil, é possível. Então, que tal revermos os seus objetivos? Temos certeza de que você vai se surpreender quando descobrir o quanto você pode conquistar!`;
      case parseRate > 0.6 && parseRate <= 0.85:
        return `Seus sonhos podem ser muito maiores. Que tal revermos os seus objetivos? Temos certeza de que você vai se surpreender com os resultados que podemos atingir juntos.`;
      case parseRate > 0.85 && parseRate <= 1.25:
        return `Seus sonhos e o seu perfil de investidor estão perfeitamente alinhados. Com certeza há várias formas de montar a sua carteira para cumprir os seus objetivos sem precisar expor grande parte de sua carteira em ativos de risco.`;
      case parseRate > 1.25 && parseRate <= 1.8:
        return `Seus sonhos estão de acordo com o seu perfil de investidor. Há várias formas de montar a sua carteira sem precisar expor grande parte dela em ativos de risco.`;
      case parseRate > 1.8 && parseRate <= 2:
        return `Seus sonhos e o seu perfil de investidor estão alinhados. Com certeza há várias formas de montar a sua carteira para alcançar tudo que você quer, porém,  como os  níveis de rendimento são altos, é necessário ter muito cuidado para não se exceder nos ativos de risco.`;
      case parseRate > 2 && parseRate <= 2.5:
        return `Seus sonhos estão totalmente de acordo com o seu perfil de investidor. Com certeza há várias formas de montar a sua carteira para cumprir com seus objetivos, porém, para atingir níveis de rendimento tão altos, é recomendável tomar muito cuidado para não se exceder nos ativos de risco.`;
      case parseRate > 2.5:
        return `Seus sonhos estão totalmente de acordo com o seu perfil de investidor. Com certeza há várias formas de montar a sua carteira para cumprir com seus objetivos, porém, para atingir níveis de rendimento tão altos, é recomendável tomar muito cuidado para não se exceder nos ativos de risco.`;
    }
  }
};

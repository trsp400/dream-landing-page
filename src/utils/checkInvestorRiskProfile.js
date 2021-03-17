// import { investorProfiles } from './financialAssetsOptions';

export default decision => {
  // export default assets => {
  //eslint-disable-line
  const { first, second, third } = decision;

  if (!second && !third) return first;

  let conservador = 0,
    moderado = 0,
    arrojado = 0;

  Object.keys(decision).forEach(d => {
    conservador = decision[d] === 'Conservador' ? conservador + 1 : conservador;
    moderado = decision[d] === 'Moderado' ? moderado + 1 : moderado;
    arrojado = decision[d] === 'Arrojado' ? arrojado + 1 : arrojado;
  });

  if (conservador > moderado && conservador > arrojado) {
    return 'Conservador';
  }

  if (moderado > conservador && moderado > arrojado) {
    return 'Moderado';
  }

  if (arrojado > moderado && arrojado > conservador) {
    return 'Arrojado';
  }

  if (
    moderado === conservador &&
    moderado === arrojado &&
    conservador === arrojado
  ) {
    return 'Moderado';
  }

  // if (!assets) return 'Conservador';

  // const contemAtivosArrojados = assets.some(i =>
  //   investorProfiles?.arrojado.includes(i),
  // );
  // const contemAtivosModerados = assets.some(i =>
  //   investorProfiles?.moderado.includes(i),
  // );
  // const contemAtivosConservadores = assets.some(i =>
  //   investorProfiles?.conservador.includes(i),
  // );

  // if (
  //   contemAtivosArrojados &&
  //   contemAtivosConservadores &&
  //   contemAtivosModerados
  // )
  //   return 'Arrojado';
  // if (
  //   contemAtivosArrojados &&
  //   !contemAtivosConservadores &&
  //   !contemAtivosModerados
  // )
  //   return 'Arrojado';
  // if (
  //   contemAtivosArrojados &&
  //   contemAtivosModerados &&
  //   !contemAtivosConservadores
  // )
  //   return 'Arrojado';
  // if (
  //   contemAtivosArrojados &&
  //   !contemAtivosModerados &&
  //   contemAtivosConservadores
  // )
  //   return 'Moderado';
  // if (
  //   !contemAtivosArrojados &&
  //   contemAtivosConservadores &&
  //   contemAtivosModerados
  // )
  //   return 'Moderado';
  // if (
  //   contemAtivosModerados &&
  //   !contemAtivosArrojados &&
  //   !contemAtivosConservadores
  // )
  //   return 'Moderado';
  // if (
  //   !contemAtivosArrojados &&
  //   !contemAtivosModerados &&
  //   contemAtivosConservadores
  // )
  //   return 'Conservador';
  // if (
  //   !contemAtivosArrojados &&
  //   !contemAtivosModerados &&
  //   !contemAtivosConservadores
  // )
  //   return 'Conservador';
};

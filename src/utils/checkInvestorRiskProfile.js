import { investorProfiles } from './financialAssetsOptions';

export default assets => {
  //eslint-disable-line
  const result = {};

  Object.keys(assets).map((key, index) => {
    if (
      !assets.investmentsPlacement.length &&
      !assets.desiredInvestmentsPlacement.length
    )
      result[key] = 'Conservador';

    const contemAtivosArrojados = assets[key].some(i =>
      investorProfiles?.arrojado.includes(i),
    );
    const contemAtivosModerados = assets[key].some(i =>
      investorProfiles?.moderado.includes(i),
    );
    const contemAtivosConservadores = assets[key].some(i =>
      investorProfiles?.conservador.includes(i),
    );

    if (
      contemAtivosArrojados &&
      contemAtivosConservadores &&
      contemAtivosModerados
    )
      result[key] = 'Arrojado';
    if (
      contemAtivosArrojados &&
      !contemAtivosConservadores &&
      !contemAtivosModerados
    )
      result[key] = 'Arrojado';
    if (
      contemAtivosArrojados &&
      contemAtivosModerados &&
      !contemAtivosConservadores
    )
      result[key] = 'Arrojado';
    if (
      contemAtivosArrojados &&
      !contemAtivosModerados &&
      contemAtivosConservadores
    )
      result[key] = 'Moderado';
    if (
      !contemAtivosArrojados &&
      contemAtivosConservadores &&
      contemAtivosModerados
    )
      result[key] = 'Moderado';
    if (
      contemAtivosModerados &&
      !contemAtivosArrojados &&
      !contemAtivosConservadores
    )
      result[key] = 'Moderado';
    if (
      !contemAtivosArrojados &&
      !contemAtivosModerados &&
      contemAtivosConservadores
    )
      result[key] = 'Conservador';
    if (
      !contemAtivosArrojados &&
      !contemAtivosModerados &&
      !contemAtivosConservadores
    )
      result[key] = 'Conservador';
  });

  return `${result.investmentsPlacement}/${result.desiredInvestmentsPlacement}`;
};

import { investorProfiles } from './financialAssetsOptions';

export default assets => {
  //eslint-disable-line
  // if (!assets) return 'Conservador';
  return 'Conservador';

  const contemAtivosArrojados = assets.some(i =>
    investorProfiles?.arrojado.includes(i),
  );
  const contemAtivosModerados = assets.some(i =>
    investorProfiles?.moderado.includes(i),
  );
  const contemAtivosConservadores = assets.some(i =>
    investorProfiles?.conservador.includes(i),
  );

  if (
    contemAtivosArrojados &&
    contemAtivosConservadores &&
    contemAtivosModerados
  )
    return 'Arrojado';
  if (
    contemAtivosArrojados &&
    !contemAtivosConservadores &&
    !contemAtivosModerados
  )
    return 'Arrojado';
  if (
    contemAtivosArrojados &&
    contemAtivosModerados &&
    !contemAtivosConservadores
  )
    return 'Arrojado';
  if (
    contemAtivosArrojados &&
    !contemAtivosModerados &&
    contemAtivosConservadores
  )
    return 'Moderado';
  if (
    !contemAtivosArrojados &&
    contemAtivosConservadores &&
    contemAtivosModerados
  )
    return 'Moderado';
  if (
    contemAtivosModerados &&
    !contemAtivosArrojados &&
    !contemAtivosConservadores
  )
    return 'Moderado';
  if (
    !contemAtivosArrojados &&
    !contemAtivosModerados &&
    contemAtivosConservadores
  )
    return 'Conservador';
  if (
    !contemAtivosArrojados &&
    !contemAtivosModerados &&
    !contemAtivosConservadores
  )
    return 'Conservador';
};

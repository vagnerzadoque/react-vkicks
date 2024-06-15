import React from 'react';

type IconProps = {
  iconName: string;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({ iconName, color }) => {
  // Caminho dinâmico baseado no nome do ícone
  const SvgIcon = React.lazy(() => import(`./assets/icons/${iconName}.svg`));

  // Importa e exibe o ícone como imagem
  return <SvgIcon style={{ color }} />;
};

export default Icon;
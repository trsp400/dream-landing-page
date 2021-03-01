import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'


addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: "Máquina dos sonhos - ui components",
    brandUrl: "maquinadossonhos.be.capital",
    colorSecondary: '#7159c1',
    appBg: '#0b0a0d',
    appContentBg: '#16161A',
    appBorderColor: '#7159c1',
    textColor: '#fff',
    barTextColor: '#E6E6E6',
    barSelectedColor: '#ffffff',
    barBg: '#000',

  })
})

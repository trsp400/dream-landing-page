import React from 'react';
import { storiesOf } from '@storybook/react';
import { action  } from '@storybook/addon-actions';

import RippleButton from '../src/components/Button'


const style = {
  paddingLeft: 18,
  paddingRight: 18
}

storiesOf("RippleButton", module)
  .add("Beorange - default", ()=> <RippleButton style={style} onClick={action("Beorange")}>Beorange - default</RippleButton> )
  .add("Beblue", ()=> <RippleButton variant="beblue" style={style} onClick={action("BeBlue")}>Beblue</RippleButton>)
  .add("Bewhite", ()=> <RippleButton variant="bewhite" style={style} onClick={action("Bewhite")}>Bewhite</RippleButton>)
  .add("Begreen", ()=> <RippleButton variant="begreen" style={style} onClick={action("Begreen")}>Begreen</RippleButton>)

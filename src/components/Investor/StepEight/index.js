import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigate } from 'gatsby';

import { ToastContainer, toast } from 'react-toastify';
import toastConfig from '../../../utils/toastConfig';

import {
  changeFormState,
  sendDreamMachineResultToAPIRequest,
} from '../../../redux/dream_machine/actions';

import Input from '../../CustomComponents/Input';
import Loading from '../../CustomComponents/Loading';
import Button from '../../CustomComponents/Button';
import MessageFeedback from '../../CustomComponents/MessageFeedback';
import { Container, Body, Footer } from './styles';

const StepEight = () => {
  const dispatch = useDispatch();
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const {
    result: { email },
    resultSuccess,
  } = store;

  const [inputValue, setInputValue] = useState(email);

  const [requestLoading, setRequestLoading] = useState(false);

  const notify = useCallback(
    () => toast('Por favor, digite seu e-mail!', toastConfig),
    [],
  );

  const handleSubmit = useCallback(() => {
    if (!inputValue) return notify();
    setRequestLoading(true);
    dispatch(
      sendDreamMachineResultToAPIRequest({
        ...store,
        currentStep: null,
        result: {
          ...store?.result,
          email: inputValue,
        },
      }),
      navigate('/resultado'),
    );
  }, [dispatch, store]);

  return (
    <Container>
      <ToastContainer />
      <Body>
        <MessageFeedback strong="normal">
          Para receber o <strong>resultado completo</strong> do seu perfil,
          deixei aqui o seu e-mail:
        </MessageFeedback>

        <Input
          state={inputValue}
          setState={setInputValue}
          type="text"
          placeholder="E-mail"
        />

        <span style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie
          ac lorem et vulputate. Praesent dapibus, augue ut euismod mattis,
          massa leo tempus erat, et aliquam nulla turpis sed nisi. Praesent id
          ipsum est. Integer posuere interdum eros. Nam nec aliquet ipsum, at
          sodales elit. Phasellus eget enim mi.
        </span>
      </Body>

      <Footer>
        <Button
          ripple
          variant="beorange"
          glow
          onClick={() => handleSubmit()}
          style={{
            width: '100%',
          }}
        >
          OK
        </Button>
      </Footer>
      {requestLoading && <Loading size="5" />}
    </Container>
  );
};

export default StepEight;

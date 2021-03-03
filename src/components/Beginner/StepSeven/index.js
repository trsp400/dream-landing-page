/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFormState } from '../../../redux/dream_machine/actions';

import Loading from '../../CustomComponents/Loading';

const StepSeven = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const store = useSelector(({ dreamMachine }) => dreamMachine);
  const { currentStep } = store;

  const handleDispatch = useCallback(
    step => {
      dispatch(
        changeFormState({
          ...store,
          currentStep: step,
        }),
      );
    },
    [dispatch, store],
  );

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  });

  useEffect(() => {
    if (loading) handleDispatch(8);
  }, [loading]);

  return (
    <div>
      <h2>Step: {currentStep}</h2>
      <button type="button" onClick={() => handleDispatch(6)}>
        {' '}
        step anterior
      </button>
      <br />
      {!loading && <Loading />}
      <br />
      <br />
    </div>
  );
};

export default StepSeven;

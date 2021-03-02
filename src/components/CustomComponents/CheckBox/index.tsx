import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import _ from 'lodash';

import {
  FormStyled,
  CheckStyled,
  LabelStyled,
  SpanInputStyled,
  SpanControlStyled,
  RadioLabelStyled,
} from './styles';

// Form
interface FormProps {
  children: JSX.Element[] | JSX.Element | any;
  className?: string;
}

const Form: FC<FormProps> = ({ children, className }) => (
  <FormStyled className={className}>{children}</FormStyled>
);

// Label
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: JSX.Element[] | JSX.Element | any;
  className?: any;
}

const Label: FC<LabelProps> = ({ children, className }) => (
  <LabelStyled className={className}>{children}</LabelStyled>
);

// Span
interface SpanProps {
  children: JSX.Element[] | JSX.Element | any;
  className?: any;
}

const SpanInput: FC<SpanProps> = ({ children, className }) => (
  <SpanInputStyled className={className}>{children}</SpanInputStyled>
);

const SpanControl: FC<SpanProps> = ({ children, className }) => (
  <SpanControlStyled className={className}>{children}</SpanControlStyled>
);

const RadioLabel: FC<SpanProps> = ({ children, className }) => (
  <RadioLabelStyled className={className}>{children}</RadioLabelStyled>
);

// CheckBox
interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  state: string[];
  setState(value: any): void;
  className?: any;
  image: JSX.Element[] | JSX.Element;
}

const CheckBox: FC<CheckBoxProps> = ({ options, state, setState, image }) => {
  const chunkedData = _.chunk(options, 2);

  const handleInputChange = (e, option) => {
    if (state.includes(option)) {
      return setState(state.filter(value => value !== option));
    }
    return setState([...state, option]);
  };

  return (
    <Form className="d-flex col-12">
      {chunkedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row col-6">
          {row.map(col => (
            <Label className="col-12" key={col}>
              <SpanInput>
                <CheckStyled
                  name={col}
                  type="checkbox"
                  checked={state.some(value => value === col)}
                  onChange={e => handleInputChange(e, col)}
                />
                <SpanControl className="checkbox__control">{image}</SpanControl>
              </SpanInput>
              <RadioLabel className="radio__label">{col}</RadioLabel>
            </Label>
          ))}
        </div>
      ))}
    </Form>
  );
};

export default CheckBox;

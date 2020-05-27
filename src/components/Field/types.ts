import { ReactElement } from 'react';
export type TAlignment = 'center' | 'right' | 'left';

export interface IProps {
  value?: string;
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  labelClass?: string;
  labelWidth?: string;
  labelAlign?: TAlignment;
  inputAlign?: TAlignment;
  errorAlign?: TAlignment;
  maxLength?: number;
  showWordLimit?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  colon?: boolean;
  clickable?: boolean;
  autofocus?: boolean;
  error?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  input?: Function;
  clear?: Function;
  click?: Function;
  focus?: Function;
  blur?: Function;
  clickInput?: Function;
  clickLeftIcon?: Function;
  clickRightIcon?: Function;
  getContainerRef?: Function;
  getFieldRef?: Function;
  formatter?: Function;
  button?: ReactElement;
}

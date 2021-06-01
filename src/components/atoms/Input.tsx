import React, { forwardRef, useCallback, useState } from "react";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import styled from "styled-components";

interface IInput
  extends SpaceProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<EventTarget>;
  error?: any;
  onFocus?: React.EventHandler<any>;
  placeholder: string;
  width?: string;
  height?: string;
  ref?: any;
  dirty?: boolean;
  showPasswordFullError?: boolean;
}

export const Container = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${layout};
  ${space};
`;

const LabelWrapper = styled.div<
  Pick<IInput, "error"> & { focus: boolean; dirty: boolean }
>`
  position: absolute;
  margin-left: 0.75rem;
  padding: 0 0.1rem;
  top: -0.5rem;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  color: ${({ theme, error, focus }) =>
    error
      ? theme.colors.error
      : focus
      ? theme.colors.black
      : theme.colors.black};
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.4px;
  transform: translateX(${({ focus, dirty }) => (dirty ? 0 : focus ? 0 : -50)}%)
    scale(${({ focus, dirty }) => (dirty ? 1 : focus ? 1 : 0)});
  transition: transform 0.1s ease;
`;

const StyledInput = styled.input<IInput>`
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : "3rem")};
  padding: 1rem;
  border-radius: 15px;

  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  line-height: 24;
  letter-spacing: 0.15px;

  outline: 0;
  box-sizing: border-box;
  border: solid 2px
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.black)};
  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
  &:focus {
    border: solid 2px
      ${({ theme, error }) => (error ? theme.colors.error : theme.colors.black)};
  }
  &:focus::placeholder {
    color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.black};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 3.25rem white inset !important;
  }

  ${space};
`;

const ErrorMessageWrapper = styled.span<
  SpaceProps & ColorProps & { error: any }
>`
  display: flex;
  align-items: center;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.RobotoRegular};
  font-size: 0.75rem;
  line-height: 14px;
  letter-spacing: 0.4px;
  padding-left: 1rem;
  ${space};
  ${color};
`;

const Input = forwardRef(
  (
    {
      width = "30.125rem",
      height = "4.125rem",
      placeholder,
      label = placeholder,
      error,
      type,
      name,
      dirty = false,
      showPasswordFullError = true,
      ...rest
    }: IInput,
    ref?
  ) => {
    const [focus, setFocus] = useState<boolean>(false);
    const handleFocus = useCallback(() => {
      setFocus(true);
    }, []);
    const handleBlur = useCallback(() => {
      setFocus(false);
    }, []);

    return (
      <Container width={width} height={height} {...rest}>
        <LabelWrapper error={error} focus={focus} dirty={dirty}>
          {label}
        </LabelWrapper>
        <StyledInput
          label={label}
          error={error}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          ref={ref}
          name={name}
          placeholder={focus ? "" : placeholder}
        />
        <ErrorMessageWrapper error={error}>
          {error?.message && error.message}
        </ErrorMessageWrapper>
      </Container>
    );
  }
);

export default Input;

import React from "react";
import styled from "styled-components";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title: string;
  fill?: string;
  color?: string;
  height?: string;
  width?: string;
}

const Btn = styled.button<{
  fill: string | undefined;
  color: string | undefined;
  height: string | undefined;
  width: string | undefined;
}>`
  margin: 0.25rem;
  background: ${({ theme, fill }) => (fill ? fill : theme.colors.primary)};
  border-radius: 5px;
  color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  font-weight: bold;
  font-size: 16px;
  border: 1px solid black;
  height: ${({ height }) => (height ? height : "2.5rem")};
  width: ${({ width }) => (width ? width : "5rem")};

  &:disabled {
    color: ${({ theme }) => "darkgrey"};
    background: ${({ theme }) => theme.colors.grey};
    cursor: default;
  }
`;

const Button = ({
  onClick,
  title,
  fill,
  color,
  height,
  width,
  ...rest
}: IButton) => {
  return (
    <Btn
      onClick={onClick}
      title={title}
      fill={fill}
      color={color}
      height={height}
      width={width}
      {...rest}
    >
      {title}
    </Btn>
  );
};

export default Button;

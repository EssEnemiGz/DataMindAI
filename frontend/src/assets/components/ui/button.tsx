import React from 'react'

interface FlexibleText {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<FlexibleText> = ({ children, className }) => {
  const classes: string = `border-solid border-gray-50 ${className}`
  return (
    <>
      <a className={classes}>
        {children}
      </a >
    </>
  )
}

export default Button

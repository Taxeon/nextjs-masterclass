import React from 'react'

const ButtonLink = ({ onClick, children, as: Component = 'button', ...rest }) => {
  return (
    <Component onClick={onClick} className="button" {...rest}>
      {children}
    </Component>
  );
};

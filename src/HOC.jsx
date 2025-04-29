const HOC = (WrappedComponent) => {
  return (props) => {
    // You can modify props or add additional logic here
    return <WrappedComponent {...props} />;
  };
};

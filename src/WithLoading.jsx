import React from "react";

const WithLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className="text-center text-blue-500 text-lg">Loading...</div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;

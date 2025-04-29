import React from "react";

const WithHighDemand = (WrappedComponent) => {
  return (products, ...props) => {
    // Filter products with a rating of 4 or above
    const highDemandProducts = products.filter(
      (product) => product.rating >= 4
    );

    return <WrappedComponent products={highDemandProducts} {...props} />;
  };
};

export default WithHighDemand;

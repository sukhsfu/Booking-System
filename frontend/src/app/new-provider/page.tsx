"use client";

import React, { useCallback, useState } from "react";
import ProviderCredential from "./ProviderCredential";
import ProviderInformation from "./ProviderInformation";

const ProviderSignUp = () => {
  const totalForms = 3;
  const [formPosition, setFormPosition] = useState(1);
  const onSubmitHandler = useCallback(() => {
    setFormPosition((preFormPosition) => {
      return preFormPosition + 1;
    });
  }, []);

  return (
    <>
      {formPosition === 1 && (
        <ProviderCredential
          onSubmit={onSubmitHandler}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
      {formPosition === 2 && (
        <ProviderInformation
          onSubmit={onSubmitHandler}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
    </>
  );
};

export default ProviderSignUp;

"use client";

import React, { useCallback, useState } from "react";
import ProviderCredential from "../../components/commons/UserCredential";
import ProviderInformation from "./ProviderInformation";
import { useRouter } from "next/navigation";
import ProviderLocation from "./ProviderLocation";

const ProviderSignUp = () => {
  const router = useRouter();
  const totalForms = 3;
  const [formPosition, setFormPosition] = useState(1);
  const onSubmitHandler = useCallback(() => {
    setFormPosition((preFormPosition) => {
      if (preFormPosition === totalForms) {
        router.push("1");
      }
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
      {formPosition === 3 && (
        <ProviderLocation
          onSubmit={onSubmitHandler}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
    </>
  );
};

export default ProviderSignUp;

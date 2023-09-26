"use client";

import React, { useCallback, useState } from "react";
import ClientCredential from "../../components/commons/UserCredential";
import { useRouter } from "next/navigation";
import ClientInformation from "./ClientInformation";

const ClientSignUp = () => {
  const router = useRouter();
  const totalForms = 2;
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
        <ClientCredential
          onSubmit={onSubmitHandler}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
      {formPosition === 2 && (
        <ClientInformation
          onSubmit={onSubmitHandler}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
    </>
  );
};

export default ClientSignUp;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import ProviderCredential from "../../../components/commons/UserCredential";
import ProviderInformation from "./ProviderInformation";
import { useRouter } from "next/navigation";
import ProviderLocation from "./ProviderLocation";
import { NextRequest } from "next/server";

const ProviderSignUp = () => {
  const router = useRouter();
  const [baseUrl, setBaseurl] = useState<string>("");
  const totalForms = 3;
  const [formPosition, setFormPosition] = useState(1);
  const [providerDetails, setProviderDetails] = useState<any>(null);

  useEffect(() => {
    const host = window.location.host;
    setBaseurl(`http://${host}`);
  }, []);

  const onSubmitHandler = useCallback(() => {
    setFormPosition((preFormPosition) => {
      if (preFormPosition === totalForms) {
        router.replace("/protected/provider");
      }
      return preFormPosition + 1;
    });
  }, [totalForms]);

  const onLoginSubmit = useCallback(
    (userName: string, password: string) => {
      const request = new NextRequest(`${baseUrl}/api/token`, {
        method: "POST",
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
          roles: ["PROVIDER"],
        }),
      });
      fetch(request).then(
        (results) => results.status === 200 && onSubmitHandler()
      );
    },
    [onSubmitHandler, baseUrl]
  );

  const onDetailsSubmit = useCallback(
    (
      name: string,
      email: string,
      phone: string,
      service: string,
      price: string
    ) => {
      setProviderDetails({ name, email, phone, service, price });
      onSubmitHandler();
    },
    [onSubmitHandler]
  );

  const onLocationsubmit = useCallback(
    (
      address: string,
      city: string,
      state: string,
      country: string,
      postalCode: string
    ) => {
      const request = new NextRequest(
        `${baseUrl}/protected/provider/addProvider`,
        {
          method: "POST",
          headers: {
            credentials: "include",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...providerDetails,
            location: {
              address,
              city,
              state,
              country,
              postalCode,
            },
          }),
        }
      );
      fetch(request).then(
        (results) => results.status === 200 && onSubmitHandler()
      );
    },
    [providerDetails, baseUrl]
  );

  return (
    <>
      {formPosition === 1 && (
        <ProviderCredential
          onSubmit={onLoginSubmit}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
      {formPosition === 2 && (
        <ProviderInformation
          onSubmit={onDetailsSubmit}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
      {formPosition === 3 && (
        <ProviderLocation
          onSubmit={onLocationsubmit}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
    </>
  );
};

export default ProviderSignUp;

"use client";

import React, { useCallback, useState, useEffect } from "react";
import ClientCredential from "../../../components/commons/UserCredential";
import { useRouter } from "next/navigation";
import ClientInformation from "./ClientInformation";
import { NextRequest } from "next/server";

const ClientSignUp = () => {
  const router = useRouter();
  const totalForms = 2;
  const [baseUrl, setBaseurl] = useState<string>("");
  const [formPosition, setFormPosition] = useState(1);
  const [login, setLogin] = useState<any>(null);

  useEffect(() => {
    const host = window.location.host;
    setBaseurl(`http://${host}`);
  }, []);

  const onSubmitHandler = useCallback(() => {
    setFormPosition((preFormPosition) => {
      if (preFormPosition === totalForms) {
        router.replace("/protected/client");
      }
      return preFormPosition + 1;
    });
  }, [router]);

  useEffect(() => {
    if (formPosition == 2) {
      onGetToken();
    }
  }, [formPosition]);

  const onLoginSubmit = useCallback(
    (userName: string, password: string) => {
      setLogin({ userName, password });
      const request = new NextRequest(`${baseUrl}/api/token`, {
        method: "POST",
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
          roles: ["CLIENT"],
        }),
      });
      fetch(request).then(
        (results) => results.status === 200 && onSubmitHandler()
      );
    },
    [onSubmitHandler, baseUrl]
  );

  const onGetToken = () => {
    const request = new NextRequest(`${baseUrl}/api/token`, {
      method: "POST",
      headers: {
        credentials: "include",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...login,
        roles: ["PROVIDER"],
      }),
    });
    fetch(request);
  };

  const onDetailSubmit = (name: string, email: string, phone: string) => {
    const request = new NextRequest(`${baseUrl}/protected/client/addClient`, {
      method: "POST",
      headers: {
        credentials: "include",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    });
    fetch(request).then(
      (results) => results.status === 200 && onSubmitHandler()
    );
  };

  return (
    <>
      {formPosition === 1 && (
        <ClientCredential
          onSubmit={onLoginSubmit}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
      {formPosition === 2 && (
        <ClientInformation
          onSubmit={onDetailSubmit}
          formNumber={`${formPosition}/${totalForms}`}
        />
      )}
    </>
  );
};

export default ClientSignUp;

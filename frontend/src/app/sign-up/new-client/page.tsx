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
          roles: ["CLIENT"],
        }),
      });
      fetch(request).then(
        (results) => results.status === 200 && onSubmitHandler()
      );
    },
    [onSubmitHandler, baseUrl]
  );

  const onDetailSubmit = useCallback(
    (name: string, email: string, phone: string) => {
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
    },
    [baseUrl, onSubmitHandler]
  );

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

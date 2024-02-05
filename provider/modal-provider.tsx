"use client";

import { StoreModal } from "@/components/modals/store-modal";
import React, { useEffect } from "react";

export const ModalProvider = () => {
  const [isMounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <StoreModal />
    </>
  );
};

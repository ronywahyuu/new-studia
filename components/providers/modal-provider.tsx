"use client";

import { useEffect, useState } from "react";
import CreateClassModal from "../modals/create-class-modal";
import JoinClassModal from "../modals/join-class-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <CreateClassModal />
      <JoinClassModal />
    </>
  );
};

export default ModalProvider;

"use client";

import { useEffect, useState } from "react";
import CreateClassModal from "../modals/create-class-modal";
import JoinClassModal from "../modals/join-class-modal";
import SettingClassModal from "../modals/setting-class-modal";

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
      <SettingClassModal/>
    </>
  );
};

export default ModalProvider;

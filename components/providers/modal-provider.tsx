"use client";

import { useEffect, useState } from "react";
import CreateClassModal from "../modals/create-class-modal";
import JoinClassModal from "../modals/join-class-modal";
import SettingClassModal from "../modals/setting-class-modal";
import CreateMaterialModal from "../modals/create-material-modal";
import CreateAssignmentModal from "../modals/create-assignment-modal";
import CreateMeetingLink from "../modals/create-meeting-link";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <CreateAssignmentModal/>
      <CreateClassModal />
      <CreateMeetingLink/>
      <JoinClassModal />
      <SettingClassModal />
      <CreateMaterialModal />
    </>
  );
};

export default ModalProvider;

import { Class } from "@prisma/client";
import { create } from "zustand";
export type ModalType = "createClass" | "joinClass" | "settingClass" | "createMaterial" | 'createAssignment' | "createMeetingLink";

interface ModalData {
  class?: Class;
  classId?: string;
  type? : 'edit' | 'create';
}
export interface ModalStore {
  data: ModalData;
  isOpen: boolean;
  modalType: ModalType;
  onClose: () => void;
  onOpen: (type: ModalType, data?: ModalData) => void;
  setModalType: (type: ModalType) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalType: "createClass",
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, modalType: type, data }),
  onClose: () => set({ isOpen: false }),
  setModalType: (type) => set({ modalType: type }),
}));

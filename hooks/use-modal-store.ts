import { Class } from "@prisma/client";
import { create } from "zustand";
export type ModalType = "createClass" | "joinClass" | "settingClass";

interface ModalData {
  class?: Class;
}
export interface ModalStore {
  modalType: ModalType;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
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

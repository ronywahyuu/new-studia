import {create} from 'zustand'
export type ModalType = "createClass" | "joinClass"

export interface ModalStore {
  modalType: ModalType
  isOpen : boolean
  onOpen: (type: ModalType) => void
  onClose: () => void
  setModalType: (type: ModalType) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  modalType: "createClass",
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, modalType: type }),
  onClose: () => set({ isOpen: false }),
  setModalType: (type) => set({ modalType: type }),
}))
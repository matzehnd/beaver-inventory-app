import { ReactNode, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle } from "@mui/material";

export const useDialog = (content: ReactNode, title: ReactNode) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return {
    open: openDialog,
    close: closeDialog,
    Dialog: (
      <Dialog fullWidth open={isOpen} onClose={closeDialog}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    ),
  };
};

import { ReactNode, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";

export const useDialog = (content: ReactNode, title: ReactNode) => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    dialog: (
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>{title}</DialogTitle>
        {content}
      </Dialog>
    ),
  };
};

import { useState } from "react";
import NewLayerModal from "./NewLayerModal";

export default function CreateLayerButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Create Layer</button>

      <NewLayerModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

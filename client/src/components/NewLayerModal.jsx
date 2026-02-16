import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLayer } from "../store/layersSlice";

export default function NewLayerModal({ open, onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    geomType: "Point",
    crs: "EPSG:4326",
  });

  if (!open) return null;

  const handleOk = () => {
    dispatch(
      addLayer({
        id: crypto.randomUUID(),
        ...form,
        features: [],
      }),
    );
    onClose();
  };

  return (
    <div className="modal">
      <input
        placeholder="Layer name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.geomType}
        onChange={(e) => setForm({ ...form, geomType: e.target.value })}
      >
        <option>Point</option>
        <option>LineString</option>
        <option>Polygon</option>
      </select>

      <button onClick={handleOk}>OK</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

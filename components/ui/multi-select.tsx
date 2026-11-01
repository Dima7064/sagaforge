"use client";

import { Select } from "./select";

export function MultiSelect({
  options,
  selected,
  onChange,
  max,
}: {
  options: string[];
  selected: string[];
  onChange: (vals: string[]) => void;
  max?: number;
}) {
  const handleAdd = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (!val || selected.includes(val) || (max && selected.length >= max)) return;
    onChange([...selected, val]);
    e.target.value = "";
  };

  const handleRemove = (val: string) => {
    onChange(selected.filter((s) => s !== val));
  };

  const available = options.filter((o) => !selected.includes(o));

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 min-h-[32px]">
        {selected.map((val) => (
          <span key={val} className="bg-forge-gold/20 text-forge-gold-light px-2 py-1 rounded text-sm flex items-center gap-2 border border-forge-gold/30">
            {val}
            <button type="button" onClick={() => handleRemove(val)} className="hover:text-forge-ember font-bold text-lg leading-none">
              ×
            </button>
          </span>
        ))}
        {selected.length === 0 && <span className="text-sm text-forge-muted italic">Ничего не выбрано</span>}
      </div>
      {(!max || selected.length < max) && available.length > 0 && (
        <Select onChange={handleAdd} value="" className="text-sm py-1">
          <option value="">+ Добавить...</option>
          {available.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </Select>
      )}
    </div>
  );
}
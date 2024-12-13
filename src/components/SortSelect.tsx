interface SortSelectProps {
  order: 'asc' | 'desc';
  onChange: (value: 'asc' | 'desc') => void;
}

function SortSelect({ order, onChange }: SortSelectProps) {
  return (
    <select
      className="form-select w-auto"
      value={order}
      onChange={(e) => onChange(e.target.value as 'asc' | 'desc')}
    >
      <option value="desc">Mais estrelas primeiro</option>
      <option value="asc">Menos estrelas primeiro</option>
    </select>
  );
}

export default SortSelect;

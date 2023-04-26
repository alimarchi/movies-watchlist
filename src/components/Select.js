export const Select = ({ selectOptions, selectValue, setSelectValue }) => {

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value)
  }

  return (
    <select
      className="select"
      value={selectValue}
      onChange={handleChangeSelect}
    >
      {selectOptions.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export const RadioButton = ({label, value, onChange}) => {
    return (
        <label className="radio-label">
            <input type="radio" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}
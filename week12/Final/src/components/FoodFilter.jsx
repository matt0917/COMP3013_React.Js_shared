
// eslint-disable-next-line react/prop-types
function FoodFilter({ onChange }) {
    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search foods..."
                onChange={handleInputChange}
            />
        </div>
    );
}

export default FoodFilter;

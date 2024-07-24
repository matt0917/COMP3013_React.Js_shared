/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function highlightText(text, highlight) {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="highlight-yellow">
                {part}
            </span>
        ) : (
            part
        )
    );
}

function FoodList({ foods, searchText }) {
    return (
        <ul>
            {foods.map((food) => (
                <li key={food.id}>
                <strong>{highlightText(food.name, searchText)}</strong>: {highlightText(food.description, searchText)}
                </li>
            ))}
        </ul>
    );
}

export default FoodList;

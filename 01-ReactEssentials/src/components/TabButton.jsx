//children is what we put between the tags of the component

export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

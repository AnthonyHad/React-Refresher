//children is what we put between the tags of the component

export default function TabButton({ children, isSelected, ...props }) {
  return (
    //Props forwarding
    <li>
      {/* <button className={isSelected ? "active" : ""} onClick={onClick}> */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

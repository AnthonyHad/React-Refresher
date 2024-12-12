//children is what we put between the tags of the component

export default function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

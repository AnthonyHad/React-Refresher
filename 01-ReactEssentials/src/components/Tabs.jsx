export default function Tabs({ children, buttons }) {
  //JSX slots
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}

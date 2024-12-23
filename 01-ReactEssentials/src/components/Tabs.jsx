export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  //JSX slots
  const ButtonsContainer = buttonsContainer; // React will recognize that a string is passed and will allow us to update elements dynamically

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

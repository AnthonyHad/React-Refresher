export default function Section({ title, children, ...props }) {
  return (
    //Props forwarding
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

import Button from "./Button";

export default function Sidebar({ projectName }) {
  return (
    <aside className="mx-8 space-y-4 w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold">Your Projects</h2>
      <Button>+ Add Project</Button>
      <ul className="space-y-2">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  );
}

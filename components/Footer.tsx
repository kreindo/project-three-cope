export default function Footer() {
  return (
    <footer className="h-32 flex items-center w-full absolute bottom-0 border-8 border-red-500 bg-slate-300">
      <div className="flex w-full max-w-7xl mx-auto justify-between items-center">
        <div className="h-20 w-20 bg-blue-500"></div>
        <div className="h-20 w-20 bg-blue-500">
          <ul>
            <li>foo</li>
            <li>bar</li>
            <li>boo</li>
          </ul>
        </div>
        <div className="h-20 w-20 bg-blue-500">
          <ul>
            <li>foo</li>
            <li>bar</li>
            <li>boo</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

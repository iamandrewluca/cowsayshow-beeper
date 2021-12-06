export function Keyboard() {
  return (
    <div className="grid gap-2 grid-cols-[repeat(30,30px)] grid-rows-[repeat(5,60px)] bg-gray-100 p-2 overflow-scroll rounded">
      <Key span="col-span-2">~</Key>
      <Key span="col-span-2">1</Key>
      <Key span="col-span-2">2</Key>
      <Key span="col-span-2">3</Key>
      <Key span="col-span-2">4</Key>
      <Key span="col-span-2">5</Key>
      <Key span="col-span-2">6</Key>
      <Key span="col-span-2">7</Key>
      <Key span="col-span-2">8</Key>
      <Key span="col-span-2">9</Key>
      <Key span="col-span-2">0</Key>
      <Key span="col-span-2">-</Key>
      <Key span="col-span-2">+</Key>
      <Key span="col-span-4">Delete</Key>
      <Key span="col-span-3">Tab</Key>
      <Key span="col-span-2">Q</Key>
      <Key span="col-span-2">w</Key>
      <Key span="col-span-2">E</Key>
      <Key span="col-span-2">R</Key>
      <Key span="col-span-2">T</Key>
      <Key span="col-span-2">Y</Key>
      <Key span="col-span-2">U</Key>
      <Key span="col-span-2">I</Key>
      <Key span="col-span-2">O</Key>
      <Key span="col-span-2">P</Key>
      <Key span="col-span-2">[</Key>
      <Key span="col-span-2">]</Key>
      <Key span="col-span-3">\</Key>
      <Key span="col-span-4">CapsLock</Key>
      <Key span="col-span-2">A</Key>
      <Key span="col-span-2">S</Key>
      <Key span="col-span-2">D</Key>
      <Key span="col-span-2">F</Key>
      <Key span="col-span-2">G</Key>
      <Key span="col-span-2">H</Key>
      <Key span="col-span-2">J</Key>
      <Key span="col-span-2">K</Key>
      <Key span="col-span-2">L</Key>
      <Key span="col-span-2">;</Key>
      <Key span="col-span-2">&apos;</Key>
      <Key span="col-span-4">Return</Key>
      <Key span="col-span-5">Shift</Key>
      <Key span="col-span-2">Z</Key>
      <Key span="col-span-2">X</Key>
      <Key span="col-span-2">C</Key>
      <Key span="col-span-2">V</Key>
      <Key span="col-span-2">B</Key>
      <Key span="col-span-2">N</Key>
      <Key span="col-span-2">M</Key>
      <Key span="col-span-2">,</Key>
      <Key span="col-span-2">.</Key>
      <Key span="col-span-2">/</Key>
      <Key span="col-span-5">Shift</Key>
      <Key span="col-span-3">Ctrl</Key>
      <Key span="col-span-2">Alt</Key>
      <Key span="col-span-3">Command</Key>

      <Key span="col-span-12">Space</Key>

      <Key span="col-span-3">Command</Key>
      <Key span="col-span-2">Alt</Key>
      <Key span="col-span-3">Ctrl</Key>
      <Key span="col-span-2">Fn</Key>
    </div>
  );
}

function Key({ span, children }: any) {
  return (
    <div
      className={`${span} bg-gray-600 text-white flex items-center justify-center cursor-pointer shadow rounded-lg`}
    >
      {children}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const SideBar = () => {
  const location = useLocation();
  const [showBasicGuides, setShowBasicGuides] = useState(false);
  const [showAdvancedGuides, setShowAdvancedGuides] = useState(false);

  useEffect(() => {
    if (location.pathname === '/guide') {
      setShowBasicGuides(true);
    } else {
      setShowBasicGuides(false);
    }

    if (location.pathname === '/advancedguide') {
      setShowAdvancedGuides(true);
    } else {
      setShowAdvancedGuides(false);
    }
  }, [location.pathname]);

  return (
    <aside className="bg-slate-100 space-y-1 max-w-prose p-4 h-screen border-r-4 border-slate-500 border-dashed overflow-y-auto pb-20">
      <nav>
        <ul>
          <li>
            <a href="/guide" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Basic guides
            </a>
            {showBasicGuides && (
              <ul className="ml-4 list-disc list-inside pl-2 border-l-4 border-slate-500  border-dashed">
                <a href="/guide#pcb_design" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  PCB
                </a>
                <a href="/guide#case" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Case
                </a>
                <a href="/guide#pcb_design" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Firmware
                </a>
              </ul>
            )}
          </li>
          <li>
            <a href="/advancedguide" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Advanced guides
            </a>
            {showAdvancedGuides && (
              <ul className="ml-4 list-disc list-inside pl-2 border-l-4 border-slate-500  border-dashed">
                <a href="/advancedguide#ground" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Ground Pour
                </a>
                <a href="/advancedguide#matrix" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Switch Matrix
                </a>
                <a href="/advancedguide#silkscreen" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Silkscreen Art
                </a>
                <a href="/advancedguide#oled" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  OLED
                </a>
                <a href="/advancedguide#jumpers" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Jumper Wire Holes
                </a>
                <a href="/advancedguide#rneopixels" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Reverse Mount Neopixels
                </a>
                <a href="/advancedguide#rotary_encoder" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  Rotary Encoder
                </a>
                <a href="/advancedguide#expander" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  IO expander
                </a>
                <a href="/advancedguide#case_design_freecad" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  FreeCAD case design
                </a>
                <a href="/advancedguide#qmk" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  QMK Firmware
                </a>
                <a href="/advancedguide#qmk" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
                  VIA support (QMK)
                </a>
              </ul>
            )}
          </li>
          <li>
            <a href="/resources" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Resources & Tips
            </a>
          </li>
          <li>
            <a href="/parts" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Approved Parts
            </a>
          </li>
          <li>
            <a href="/submitting" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Submit your project!
            </a>
          </li>
          <li>
            <a href="/faq" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              FAQ
            </a>
          </li>
          <li>
            <a href="/keyboard" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-red-400 hover:text-red-500">
              Make a keyboard
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
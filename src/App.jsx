import "./App.css";
import Explorer from "./components/Explorer";
import { ShortcutContainer } from "futurist-components";

import { useSetAtom } from "jotai";
import { useDeviceDetail } from "./states/deviceDetail";
import { windowManipulatorAtom } from "./states/deviceDetailState";

function App() {
  const device = useDeviceDetail();
  const manipulateWindows = useSetAtom(windowManipulatorAtom);

  const shortcuts = [
    {
      icon: "https://futurist.io/icons/folder.png",
      title: "Project Details",
      id: "exp",
      type: "app",
      windowData: {
        id: "exp",
        title: "Project Details",
        width: "300px",
        height: "300px",
        xCoord: 10,
        yCoord: 10
      },
    },
  ];

  return (
    <>
      <ShortcutContainer
        device={device}
        shortcuts={shortcuts}
        manipulateWindows={manipulateWindows}
      />
      <Explorer device={device} manipulateWindows={manipulateWindows} />
    </>
  );
}

export default App;
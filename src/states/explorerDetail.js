import { atom } from "jotai";

export const explorerDetails = atom([
  {
    id: "about",
    type: "Project",
    name: "About Futurist",
    icon: "info_bubble",
    content: {
      paragraphs: [
        "Futurist is a personal framework to capture and study brainwave data from EEG headsets",
        "",
        "By utilizing off-the-shelf hardware, anyone can work with their own brainwaves, without the fear of where the data is sent.",
        "",
        "This project expects to expand in a variety of ways, with the sole purpose of providing more insight into our inner self.",
      ],
    },
  },
  {
    id: "howitworks",
    type: "General",
    name: "How It Works",
    icon: "notepad_2",
    content: {
      paragraphs: [
        "Futurist utilizes the Web Bluetooth API, typically found in Chromium-based browsers.",
        "",
        "Also needed is a supported headset, a list can be found in the Supported Headsets file.",
      ],
    },
  },
]);

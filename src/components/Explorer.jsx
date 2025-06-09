import React, { useState, useMemo } from "react";
import {
  BaseWindow,
  TabContainer,
  Button,
  WindowInset,
  WindowInner,
  WindowSpacing,
} from "futurist-components";

import { useAtom, useAtomValue } from "jotai";
import { explorerDetails } from "../states/explorerDetail";

import Item from "./files/Item";
import Content from "./files/Content";

// Define tab content components
const AboutTab = ({ items, itemSelection, selectedItem, clearItem }) => {
  return (
    <>
      {selectedItem && (
        <>
          <Button label={`Close ${selectedItem.name}`} action={clearItem} />
        </>
      )}
      <WindowInset>
        <WindowSpacing>
          <WindowInner>
            {!selectedItem ? (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,50%)",
                    backgroundColor: "#6bf178",
                    color: "#02111b",
                  }}
                >
                  {renderContent({ items, itemSelection, selectedItem })}
                </div>
              </>
            ) : (
              <>
                <Content content={selectedItem.content} />
              </>
            )}
          </WindowInner>
        </WindowSpacing>
      </WindowInset>
      {!selectedItem && (
        <>
          <Button label="Select A Document" />
        </>
      )}
    </>
  );
};

function renderContent({ items, itemSelection }) {
  return items.map((item, index) => (
    <>
      <Item
        key={index}
        index={index}
        name={item.name}
        icon={item.icon}
        itemSelection={itemSelection}
      />
    </>
  ));
}

function Explorer({ device, manipulateWindows }) {
  const windowDetails = device.windows.find((w) => w.id === "exp");
  const [selectedItem, setSelectedItem] = useState(null);

  const items = useAtomValue(explorerDetails);
  console.log(items)

  function itemSelection(index) {
    setSelectedItem(items[index]);
  }

  function clearItem() {
    setSelectedItem(null);
  }

  const tabComponents = useMemo(
    () => ({
      About: () => (
        <AboutTab
          items={items}
          itemSelection={itemSelection}
          selectedItem={selectedItem}
          clearItem={clearItem}
        />
      ),
    }),
    [items, itemSelection, selectedItem, clearItem],
  );

  return (
    <>
      {windowDetails && (
        <>
          <BaseWindow
            key="1"
            id="exp"
            device={device}
            manipulateWindows={manipulateWindows}
          >
            <TabContainer tabComponents={tabComponents} />
          </BaseWindow>
        </>
      )}
    </>
  );
}

export default Explorer;
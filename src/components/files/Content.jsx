import React from "react";

function Content({ content }) {
  const { paragraphs } = content;
  return (
    <>
      {paragraphs.map((p, i) => (
        <>
          <span key={i}>{p}</span> <br />
        </>
      ))}
    </>
  );
}

export default Content;
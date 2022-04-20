import { useState } from "react/cjs/react.production.min";

export default function footer() {
  return (
    <>
      <footer>
        <button onClick={() => setQput(!qput)}>Home</button>
        <button>Bookmarks</button>
        <button>Create</button>
        <button>Profile</button>
      </footer>
    </>
  );
}

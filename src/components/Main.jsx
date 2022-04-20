import { useState } from "react/cjs/react.production.min";

import Questions from "./Questions";
import Bookmarks from "./Bookmarks";

export default function Main() {
  const [qput, setQput] = useState(true);
  const [bput, setBput] = useState(false);

  function qSwitch(qput) {
    setQput(!qput);
  }
  function bSwitch(qput) {
    setQput(!qput);
  }

  return (
    <>
      <main>
        <Questions active={qSwitch} />
        <Bookmarks active={bSwitch} />
      </main>
    </>
  );
}

import { searchStore } from "./store";
import { useEffect } from "react";

//////////////////////////////////////////////////////////////////////////////////////////
///Outside click handler
//reference: https://stackoverflow.com/questions/73914778/how-to-detect-click-outside-react-application

export default function useClickOutside(ref, exceptions, closeItem) {


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && !(event.target.closest(exceptions))) {
        closeItem();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
}

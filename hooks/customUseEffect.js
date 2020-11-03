import { useEffect, useRef } from "react";
//Custom useEffect to prevent reender on  mount
function customUseEffectUpdate(fn, inputs) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
}
export default customUseEffectUpdate;

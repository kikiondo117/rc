import Confetti from "react-confetti";
import * as pkg from "react-use";
const { useWindowSize } = pkg;

export function ConfettiCustom() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      tweenDuration={3000}
      recycle={false}
      width={width}
      height={height}
    />
  );
}

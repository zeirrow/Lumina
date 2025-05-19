import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2 }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
};

export default AnimatedCounter;

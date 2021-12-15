import styles from "@components/TopicPickerGrid.module.scss";

import * as React from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function TopicPickerGrid(props) {
  const [state, setState] = React.useState({ selected: props.topics[0] });
  const size = useWindowSize();

  React.useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {props.topics.map((each, index) => {
          const isSelected = each.topic === state.selected.topic;

          const widthMap = {
            0: "75%",
            1: "50%",
            2: "25%",
            3: "100%",
            4: "75%",
            5: "50%",
            6: "25%",
            7: "100%",
            8: "75%",
            9: "50%",
          };

          let contentElement = null;
          if (isSelected) {
            contentElement = (
              <div
                className={styles.content}
                style={
                  size.width <= 768 ? null : { width: `${widthMap[index]}` }
                }
              >
                <div className={styles.h3}>{state.selected.topic}</div>
                <div className={styles.p}>{state.selected.description}</div>
              </div>
            );
          }

          return (
            <React.Fragment>
              <span
                className={styles.slot}
                key={`${each.topic}`}
                onClick={() => {
                  return setState({ selected: each });
                }}
              >
                <div
                  className={styles.item}
                  style={{
                    background: isSelected ? "#161616" : null,
                  }}
                >
                  <div className={styles.number}>{each.artwork}</div>
                  <div className={styles.text}>{each.topic}</div>
                </div>
              </span>
              {contentElement}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default TopicPickerGrid;

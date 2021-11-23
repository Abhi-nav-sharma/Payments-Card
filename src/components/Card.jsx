import styles from "./Card.module.css";
const Card = ({ date, logo, heading, subheading, devices, color }) => {
  const style1 = {
    background: color
  };
  return (
    <>
      <div style={style1} className={styles.cont}>
        <p className={styles.date}>{date}</p>
        <div className={styles.imgCont}>
          <img src={logo} alt="logo" />
        </div>
        <div style={{ clear: "both" }}></div>
        <div className={styles.textCont}>
          <p className={styles.text}>Case Study</p>
        </div>
        <h1 className={styles.heading}>{heading}</h1>
        <h1 className={styles.heading}>{subheading}</h1>
        <div>
          <p className={styles.device}>{devices}</p>
        </div>
      </div>
    </>
  );
};
export default Card;

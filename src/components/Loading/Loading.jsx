import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style["sk-cube-grid"]}>
      <div className={`${style["sk-cube"]} ${style["sk-cube1"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube2"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube3"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube4"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube5"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube6"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube7"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube8"]}`}></div>
      <div className={`${style["sk-cube"]} ${style["sk-cube9"]}`}></div>
    </div>
  );
}

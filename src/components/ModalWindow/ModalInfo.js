import styles from "./ModalInfo.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/ModuleContext";
import { BasketContext } from "../../context/BasketContext";
import Button from "../UI/Button";
import QuantityButton from "../UI/QuantityButton";

function ModalInfo(props) {
  const modalContext = useContext(ModalContext);
  const basketContext = useContext(BasketContext);
  const itemInfo = modalContext.itemInfo;
  // console.log(basketContext);

  function closeModalInfo() {
    modalContext.closeInfoDish();
  }

  return (
    <Modal onClick={closeModalInfo}>
      <div className={styles.wrapper}>
        <div className={styles["container-top"]}>
          <h2 className={styles.title}>{itemInfo.title}</h2>
          <button className={styles["close-module"]} onClick={closeModalInfo}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className={styles["container-info"]}>
          <img className={styles.img} src={itemInfo.img} alt="Изображение" />

          <div className={styles["box-info"]}>
            <h2 className={styles.description}>{itemInfo.description}</h2>
            <p className={styles.structure}>{itemInfo.structure}</p>
            <p
              className={
                styles.calories
              }>{`${itemInfo.weight}г, ккал ${itemInfo.calories}`}</p>
          </div>
        </div>

        <div className={styles["box-add"]}>
          <Button>Добавить</Button>
        </div>

        <div className={styles["box-quantity"]}>
          <QuantityButton amount="1" />
          <h2 className={styles.price}>{itemInfo.price}₽</h2>
        </div>
      </div>
    </Modal>
  );
}

export default ModalInfo;

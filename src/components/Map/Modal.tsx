import React from 'react';
import styles from './Modal.module.scss';

interface IModal {
    address: string,
    amount: number,
    color: string,
    close: () => void
}

function countPlaces(amount: number, percent: number) {
    return Math.floor(amount * percent);
}

const Modal: React.FC<Partial<IModal>> = ({ address, amount, color, close }) => {
    let freeAmount = 0;
    if (amount) {
        if (color === '#2AA06E') {
            freeAmount = countPlaces(amount, 0.23);
        } else if (color === '#FFCC00') {
            freeAmount = countPlaces(amount, 0.66);
        } else if (color === '#FF0000') {
            freeAmount = countPlaces(amount, 0.91);
        }
    }

    return (
        <div className={styles.modal} onClick={close}>
            <div className={styles.content}>
                {address ? <div>Адрес: {address}</div> : null }
                <div>Свободных мест: {freeAmount}</div>
                {amount ? <div>Всего мест: {amount}</div> : null}
            </div>
        </div>
    );
};

export default Modal;
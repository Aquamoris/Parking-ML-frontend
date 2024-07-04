import React, {useState} from 'react';
import Modal from "./Modal";

const MapPin = ({ fill, address, amount, time }: { fill: string, address?: string, amount? : number, time?: string }) => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div style={{width: '50px', height: '50px'}} onClick={() => setModal(true)}>
                <svg fill={fill} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 369.718 369.718"><path d="M184.852,0C99.349,0,30.039,69.316,30.039,154.818c0,85.513,154.812,214.899,154.812,214.899 s154.827-129.387,154.827-214.899C339.679,69.316,270.358,0,184.852,0z M184.852,206.863c-37.717,0-68.293-30.574-68.293-68.296 c0-37.721,30.576-68.291,68.293-68.291c37.721,0,68.305,30.57,68.305,68.291C253.156,176.29,222.572,206.863,184.852,206.863z"/></svg>
            </div>
            {modal ? <Modal address={address} close={() => setModal(false)} color={fill} amount={amount} time={time}/> : null}
        </>
    );
};

export default MapPin;
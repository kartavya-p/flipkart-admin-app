import React from "react";
import Modal from '../../../components/UI/Modal';

const DeleteCategoryModal = (props) => {
    
    const {
        modalTitle,
        show,
        handleClose,
        deleteCategories,
        expandedArray,
        checkedArray
    } = props;
    return (
        <Modal
            modalTitle={modalTitle}
            show={show}
            handleClose={handleClose}
            buttons={[
                {
                    label: 'No',
                    color: 'primary',
                    onClick: () => {
                        alert('no');
                    }
                },
                {
                    label: 'Yes',
                    color: 'danger',
                    onClick: deleteCategories
                }
            ]}
        >
            <h6>Expanded</h6>
            {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}
            <h6>Checked</h6>
            {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}
        </Modal>
    )
}

export default DeleteCategoryModal;
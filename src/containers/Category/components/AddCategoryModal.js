import React from "react";
import { Col, Row } from "react-bootstrap";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";

const AddCategoryModal = (props) => {

    const {
        show,
        handleClose,
        modalTitle,
        categoryName,
        setCategoryName,
        parentCategoryId,
        setParentCategoryId,
        categoryList,
        handleCategoryImage,
        onSubmit
    } = props;
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            onSubmit={onSubmit}
            modalTitle={modalTitle}
        >
            <Row>
                <Col>
                    <Input
                        value={categoryName}
                        placeholder={'Category Name'}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="form-control"
                    />
                </Col>
                <Col>
                    <select
                        className="form-control form-control-sm"
                        value={parentCategoryId}
                        onChange={(e) => setParentCategoryId(e.target.value)}>
                        <option> Select Category </option>
                        {
                            categoryList.map(option =>
                                <option key={option.value} value={option.value}> {option.name}</option>
                            )
                        }
                    </select>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <input type="file" name="categoryImage" onChange={handleCategoryImage} />
                </Col>
            </Row>
        </Modal>
    );
}

export default AddCategoryModal;
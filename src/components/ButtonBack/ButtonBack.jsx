import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import CustomButton from "../Button/CustomButton";

const ButtonBack = ({ navigateTo }) => {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate(navigateTo);
    };

    return (
        <CustomButton className="ms-5 p-1" text="Go back" onClick={handleButton} icon={<Icon.ArrowLeft />} />
    );
};

export default ButtonBack;
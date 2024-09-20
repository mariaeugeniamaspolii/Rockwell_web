import React from 'react';
import { Button } from 'react-bootstrap'


const CustomButton = ({ onClick, text, icon, variant = "outline-primary", size, iconPosition = "left" }) => {
    const iconClass = iconPosition === "right" ? "ms-2" : "me-2";

    return (
        <Button onClick={onClick} variant={variant} size={size} className={variant === "primary" && "text-white"}>
            {iconPosition === "left" && icon && <span className={text ? iconClass : ""}>{icon}</span>}
            {text}
            {iconPosition === "right" && icon && <span className={text ? iconClass : ""}>{icon}</span>}
        </Button>
    );
};

export default CustomButton;
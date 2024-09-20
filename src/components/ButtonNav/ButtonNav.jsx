import React from 'react';
import CustomButton from '../Button/CustomButton';

const ButtonNav = ({ text, variant, size, icon, iconPosition }) => {

    const handleClick = (targetRef) => {
        console.log('targetRef: ', targetRef);
        targetRef.currentTarget?.scrollIntoView({ behavior: "smooth" });

    };

    return (
        <>
            <CustomButton onClick={handleClick} text={text} icon={icon} iconPosition={iconPosition} variant={variant} size={size} />
        </>
    );
}


export default ButtonNav;

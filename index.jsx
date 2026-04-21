import React from 'react';
import styles from './shared.module.css';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variantClass = styles[variant] || styles.primary;
    return (
        <button className={`${styles.button} ${variantClass} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Input = ({ className = '', ...props }) => {
    return (
        <input className={`${styles.input} ${className}`} {...props} />
    );
};

export const Card = ({ children, hover = false, className = '', ...props }) => {
    return (
        <div className={`${styles.card} ${hover ? styles.cardHover : ''} ${className}`} {...props}>
            {children}
        </div>
    );
};

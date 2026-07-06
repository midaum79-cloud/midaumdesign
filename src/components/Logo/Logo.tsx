import React from 'react';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    variant?: 'vertical' | 'horizontal';
}

export default function Logo({ className = '', width = 240, height = 62, variant = 'horizontal' }: LogoProps) {
    if (variant === 'horizontal') {
        return (
            <svg
                width={width}
                height={height}
                viewBox="0 0 300 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <g transform="translate(10, 5)">
                    {/* Shield Background */}
                    <path
                        d="M35 0 L65 5 L65 40 C65 55 50 65 35 70 C20 65 5 55 5 40 L5 5 Z"
                        fill="#2A2D34"
                        stroke="#E62227"
                        strokeWidth="3"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M35 0 L65 5 L65 40 C65 55 50 65 35 70 C20 65 5 55 5 40 L5 5 Z"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                        strokeLinejoin="round"
                    />
                    
                    {/* Crossed Hammer and Saw */}
                    {/* Hammer */}
                    <path d="M22 25 L40 43" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <path d="M18 20 L26 28 L30 24 L22 16 Z" fill="#FFFFFF" />
                    {/* Saw */}
                    <path d="M48 25 L30 43" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    <path d="M42 16 L52 26 L46 32 L36 22 Z" fill="#FFFFFF" />
                    
                    {/* Stars */}
                    <path d="M35 55 L37 60 L42 60 L38 63 L39 68 L35 65 L31 68 L32 63 L28 60 L33 60 Z" fill="#FFFFFF" transform="scale(0.5) translate(35, 55)" />
                    <path d="M35 55 L37 60 L42 60 L38 63 L39 68 L35 65 L31 68 L32 63 L28 60 L33 60 Z" fill="#FFFFFF" transform="scale(0.5) translate(55, 55)" />
                    <path d="M35 55 L37 60 L42 60 L38 63 L39 68 L35 65 L31 68 L32 63 L28 60 L33 60 Z" fill="#FFFFFF" transform="scale(0.5) translate(75, 55)" />
                </g>

                {/* Text */}
                <text x="90" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="36" fill="#E62227" stroke="#2A2D34" strokeWidth="1">
                    목수삼촌
                </text>
                <text x="92" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="36" fill="#E62227">
                    목수삼촌
                </text>
                
                <text x="95" y="68" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="#2A2D34" letterSpacing="2">
                    CARPENTER UNCLE
                </text>
            </svg>
        );
    }

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g transform="translate(25, 10)">
                {/* Shield Background */}
                <path
                    d="M75 0 L140 10 L140 100 C140 150 100 180 75 200 C50 180 10 150 10 100 L10 10 Z"
                    fill="#2A2D34"
                    stroke="#E62227"
                    strokeWidth="6"
                    strokeLinejoin="round"
                />
                <path
                    d="M75 0 L140 10 L140 100 C140 150 100 180 75 200 C50 180 10 150 10 100 L10 10 Z"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                
                {/* Crossed Hammer and Saw */}
                <path d="M45 55 L95 105" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
                <path d="M35 45 L55 65 L65 55 L45 35 Z" fill="#FFFFFF" />
                <path d="M105 55 L55 105" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
                <path d="M85 35 L105 55 L95 65 L75 45 Z" fill="#FFFFFF" />
                
                {/* Text overlay background for depth */}
                <rect x="-15" y="80" width="180" height="50" rx="10" fill="#2A2D34" stroke="#FFFFFF" strokeWidth="3" />
                
                {/* Text */}
                <text x="75" y="118" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="#E62227" textAnchor="middle">
                    목수삼촌
                </text>
                
                <text x="75" y="155" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">
                    carpenter
                </text>
                <text x="75" y="175" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">
                    uncle
                </text>

                {/* Stars */}
                <g transform="translate(75, 185) scale(0.6)">
                    <path d="M0 -5 L1.5 0 L6 0 L2.5 3 L4 8 L0 5 L-4 8 L-2.5 3 L-6 0 L-1.5 0 Z" fill="#FFFFFF" transform="translate(-25, 0)" />
                    <path d="M0 -5 L1.5 0 L6 0 L2.5 3 L4 8 L0 5 L-4 8 L-2.5 3 L-6 0 L-1.5 0 Z" fill="#FFFFFF" transform="translate(0, 0)" />
                    <path d="M0 -5 L1.5 0 L6 0 L2.5 3 L4 8 L0 5 L-4 8 L-2.5 3 L-6 0 L-1.5 0 Z" fill="#FFFFFF" transform="translate(25, 0)" />
                </g>
            </g>
        </svg>
    );
}

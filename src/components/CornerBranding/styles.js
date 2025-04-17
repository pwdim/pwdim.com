import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const BrandingWrapper = styled(Link)`
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.6);
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    z-index: 1050; 
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.9);
        background-color: rgba(0, 0, 0, 0.6);
    }

    body.light-mode & {
        background-color: rgba(255, 255, 255, 0.6);
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.1);
        &:hover {
            color: rgba(0, 0, 0, 0.8);
            background-color: rgba(240, 240, 240, 0.8);
        }
    }
`;
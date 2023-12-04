import React from 'react';
import Skeleton from '@mui/material/Skeleton';

interface NomadeSkeletonProps {
    width?: number | string;
    height?: number | string;
    variant?: 'text' | 'circular' | 'rectangular'| 'rounded';
}

const NomadeSkeleton: React.FC<NomadeSkeletonProps> = ({ width = 200, height = 50, variant = 'rounded' }) => {
    return (
        <Skeleton
            variant={variant}
            style={{ width: width, height: height }}
        />
    );
};

export default NomadeSkeleton;
import { Box } from '@mui/material';

interface AuthDecorationProps {
  sx?: object;
  size?: number | string; 
}

export default function AuthDecoration({ sx, size = 139 }: AuthDecorationProps) {
  return (
    <Box sx={{ position: 'absolute', width: size, height: size, zIndex: 1, ...sx }}>
      <svg 
        width="100%"  
        height="100%" 
        viewBox="0 0 139 139" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_26_31812)">
          <path d="M24.4853 57.2548C29.1716 61.9411 29.1716 69.5391 24.4853 74.2254C19.799 78.9117 12.201 78.9117 7.51472 74.2254C2.82843 69.5391 2.82843 61.9411 7.51472 57.2548C12.201 52.5685 19.799 52.5685 24.4853 57.2548Z" fill="#E84A8F"/>
          <path d="M78.2254 3.51472C82.9117 8.20101 82.9117 15.799 78.2254 20.4853C73.5391 25.1716 65.9411 25.1716 61.2548 20.4853C56.5685 15.799 56.5685 8.20101 61.2548 3.51472C65.9411 -1.17157 73.5391 -1.17157 78.2254 3.51472Z" fill="#E84A8F"/>
          <path d="M35.799 31.799L55.8754 37.1784L41.1784 51.8754L35.799 31.799Z" fill="#E84A8F"/>
          <path d="M76.8112 109.581C81.4975 114.267 81.4975 121.865 76.8112 126.551C72.1249 131.238 64.5269 131.238 59.8406 126.551C55.1543 121.865 55.1543 114.267 59.8406 109.581C64.5269 104.894 72.1249 104.894 76.8112 109.581Z" fill="#E84A8F"/>
          <path d="M130.551 55.8406C135.238 60.5269 135.238 68.1249 130.551 72.8112C125.865 77.4975 118.267 77.4975 113.581 72.8112C108.894 68.1249 108.894 60.5269 113.581 55.8406C118.267 51.1543 125.865 51.1543 130.551 55.8406Z" fill="#E84A8F"/>
          <path d="M88.1249 84.1249L108.201 89.5043L93.5043 104.201L88.1249 84.1249Z" fill="#E84A8F"/>
          <path d="M77.5183 56.5477C82.2046 61.234 82.2046 68.832 77.5183 73.5183C72.832 78.2046 65.234 78.2046 60.5477 73.5183C55.8614 68.832 55.8614 61.234 60.5477 56.5477C65.234 51.8614 72.832 51.8614 77.5183 56.5477Z" fill="#E84A8F"/>
          <path d="M35.0919 84.832L55.1683 90.2114L40.4713 104.908L35.0919 84.832Z" fill="#E84A8F"/>
          <path d="M88.832 31.0919L108.908 36.4713L94.2114 51.1683L88.832 31.0919Z" fill="#E84A8F"/>
        </g>
        <defs>
          <filter id="filter0_d_26_31812" x="0" y="0" width="138.066" height="138.066" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_31812"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_31812" result="shape"/>
          </filter>
        </defs>
      </svg>
    </Box>
  );
}
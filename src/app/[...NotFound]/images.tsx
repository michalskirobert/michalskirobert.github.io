export const IndonesianLandscapeSVG = () => (
  <svg
    className="w-full h-48 md:h-64 lg:h-80"
    viewBox="0 0 800 250"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Sky */}
    <rect x="0" y="0" width="800" height="250" fill="#003566" />

    {/* Mountains */}
    <path
      d="M0,250 L100,150 L200,200 L300,100 L400,180 L500,80 L600,150 L700,120 L800,180 L800,250 Z"
      fill="#003566"
    />

    {/* Rice terraces */}
    <path d="M0,250 L800,250 L800,220 L0,220 Z" fill="#ffc300" opacity="0.8" />
    <path d="M0,250 L800,250 L800,230 L0,230 Z" fill="#ffc300" opacity="0.6" />
    <path d="M0,250 L800,250 L800,240 L0,240 Z" fill="#ffc300" opacity="0.4" />

    {/* Temple silhouette */}
    <path d="M500,220 L520,180 L530,180 L550,220 Z" fill="#001d3d" />
    <path d="M530,180 L530,160 L520,160 L520,180 Z" fill="#001d3d" />
    <path
      d="M530,160 L525,150 L525,140 L530,130 L535,140 L535,150 Z"
      fill="#001d3d"
    />

    {/* Palm trees */}
    <path d="M100,220 L105,180 L110,220 Z" fill="#001d3d" />
    <path
      d="M90,190 L120,190 M85,180 L125,180 M90,170 L120,170"
      stroke="#001d3d"
      strokeWidth="2"
    />

    <path d="M700,220 L705,170 L710,220 Z" fill="#001d3d" />
    <path
      d="M690,190 L720,190 M685,180 L725,180 M690,170 L720,170"
      stroke="#001d3d"
      strokeWidth="2"
    />

    {/* Sun/Moon */}
    <circle cx="650" cy="80" r="30" fill="#ffd60a" />
    <circle cx="660" cy="70" r="10" fill="#ffffff" opacity="0.6" />
  </svg>
);

export const WayangPuppetSVG = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {/* Wayang head */}
    <path
      d="M50,10 C35,10 30,25 30,40 C30,55 40,70 50,70 C60,70 70,55 70,40 C70,25 65,10 50,10 Z"
      fill="#ffc300"
    />

    {/* Headdress */}
    <path
      d="M50,10 C45,10 40,5 40,5 C40,5 45,0 50,0 C55,0 60,5 60,5 C60,5 55,10 50,10 Z"
      fill="#ffd60a"
    />
    <path d="M40,5 C40,5 30,15 30,20 C35,15 40,15 40,5 Z" fill="#ffd60a" />
    <path d="M60,5 C60,5 70,15 70,20 C65,15 60,15 60,5 Z" fill="#ffd60a" />

    {/* Face details */}
    <circle cx="40" cy="30" r="3" fill="#001d3d" />
    <circle cx="60" cy="30" r="3" fill="#001d3d" />
    <path
      d="M45,45 C45,45 50,50 55,45"
      stroke="#001d3d"
      strokeWidth="2"
      fill="none"
    />

    {/* Body */}
    <path
      d="M40,70 C40,70 30,90 35,100 M60,70 C60,70 70,90 65,100"
      stroke="#ffc300"
      strokeWidth="3"
    />
    <path d="M35,100 C35,100 50,90 65,100" stroke="#ffc300" strokeWidth="3" />

    {/* Arms */}
    <path
      d="M35,50 C35,50 20,60 15,80 M65,50 C65,50 80,60 85,80"
      stroke="#ffc300"
      strokeWidth="2"
    />
  </svg>
);

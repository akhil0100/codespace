import { hostname } from 'os';



/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns:[{
            hostname:"https://www.istockphoto.com/photo/indian-ethnic-food-buffet-on-white-concrete-table-from-above-gm1364975940-435994250?cid=IS&clickid=wxJwgn2ITxyKWd0wX1ThBUWiUkHSXRw-F2Fy2Y0&irpid=1263831",
        },
     ],
    },
};

export default nextConfig;

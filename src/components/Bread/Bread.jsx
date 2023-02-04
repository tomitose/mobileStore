import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {getProductDetail} from "../../services/getFetch"

// // // function handleClick(event) {

// // // }

const Bread = () => {

// //   return (
// //     <Breadcrumbs aria-label="breadcrumb">
// //       {routes.map((route) => (
// //         <Link color="inherit" href={route.href}>
// //           {route.title}
// //         </Link>
// //       ))}
// //     </Breadcrumbs>
// //   );





 
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      // onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to={`$/product/${getProductDetail}`}
      // onClick={handleClick}
    >
      Product
    </Link>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    // <div className="breadcrumbs">
    //   {crumbs}
    // </div>
  );
};

export default Bread;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';



// function BreadcrumbLink({ title, href }) {

//   return (
//     <Link color="inherit" href={href}>
//       {title}
//     </Link>
//   );
// }

// function Breadcrumb({ routes }) {
//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       {routes.map((route) => (
//         <BreadcrumbLink key={route.title} title={route.title} href={route.href} />
//       ))}
//     </Breadcrumbs>
//   );
// }

// export default function BreadcrumbWrapper({ productId }) {
//   const [routes, setRoutes] = React.useState([
//     { title: 'Home', href: '/' },
//   ]);

//   React.useEffect(() => {
//     if (productId) {
//       setRoutes([
//         { title: 'Home', href: '/' },
//         { title: 'Products', href: '/products' },
//         { title: `Product ${productId}`, href: `/products/${productId}` },
//       ]);
//     }
//   }, [productId]);

//   return <Breadcrumb routes={routes} />;
// }

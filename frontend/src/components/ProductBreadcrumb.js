import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import data from '../data';

export default function ProductBreadcrumb(props) {
    const product = data.products;
    return (
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
            Home
        </Link>
        <Link color="inherit" href="/">
            {product.category}
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
        </Breadcrumbs>
    );
}

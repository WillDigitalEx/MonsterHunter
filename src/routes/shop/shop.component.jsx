import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryPage from '../category-page/category-page.component';

import { PageTitle } from './shop.styles';

const Shop = () => {

    return (
        <Fragment>
        <PageTitle>SHOP MONSTERS</PageTitle>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":monsterType" element={<CategoryPage />} />
            </Routes>
        </Fragment>
    );
};

export default Shop;
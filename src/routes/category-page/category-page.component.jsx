import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import MonsterCard from '../../components/monster-card/monster-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryPageContainer, CategoryPageTitle } from "./category-page.styles";


const CategoryPage = () => {
    const { monsterType } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [monsters, setMonsters] = useState(categoriesMap[monsterType]);
    

    useEffect(() => {
        setMonsters(categoriesMap[monsterType.replace(/-/g, ' ')]);
    }, [monsterType, categoriesMap])

    return (
        <Fragment>
        <CategoryPageTitle>{setCategoryTitle(monsterType)}</CategoryPageTitle>
        <CategoryPageContainer>
            { 
                monsters && monsters.map((monster) => <MonsterCard key={monster.index} monster={monster} />)
            }
        </CategoryPageContainer>
        </Fragment>
    )
};

const setCategoryTitle = (monsterType) => {
    var categoryTitle = monsterType.replace(/-/g, ' ');
    if(categoryTitle.substring(categoryTitle.length - 1) === "y" && categoryTitle !== "fey") {
        categoryTitle = categoryTitle.replace(/.$/,"ies");
    } else if(monsterType.substring(monsterType.length - 1) !== "s" && (categoryTitle !== "undead" && categoryTitle !== "fey")) {
        categoryTitle = monsterType + "s";
    }

    return categoryTitle.toUpperCase();
}
export default CategoryPage;
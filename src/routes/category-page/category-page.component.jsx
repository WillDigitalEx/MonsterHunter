import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import MonsterCard from '../../components/monster-card/monster-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

import './category-page.styles.scss';


const CategoryPage = () => {
    const { monsterType } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [monsters, setMonsters] = useState(categoriesMap[monsterType]);

    useEffect(() => {
        setMonsters(categoriesMap[monsterType.replace(/-/g, ' ')]);
    }, [monsterType, categoriesMap])

    return (
        <Fragment>
        <h1 className='title'>{monsterType.toUpperCase()}</h1>
        <div className='category-page-container'>
            { 
                monsters && monsters.map((monster) => <MonsterCard key={monster.index} monster={monster} />)
            }
        </div>
        </Fragment>
    )
};

export default CategoryPage;
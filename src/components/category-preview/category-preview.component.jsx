import MonsterCard from '../monster-card/monster-card.component';

import { Link } from 'react-router-dom';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, monsters }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className="title" to={title.replace(/\s+/g, '-')}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                    monsters
                        .filter((_, idx) => idx < 4)
                        .map((monster) => 
                            <MonsterCard key={monster.index} monster={monster} />
                        )
                }
            </div>
        </div>
    )
}

export default CategoryPreview;
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import DialogueBox from '../../components/dialogue-box/dialogue-box.component';
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
    const categoryDesc = [
        {
            index: 'aberration',
            desc: 'Aberrations had no single point of origin, and many species had no real kinship or other relation to other aberrant species. Instead, aberrations came from strange, distant places and times. I am sure you can find a good home for them!'
        },
        {
            index: 'beast',
            desc: 'Beasts are nonhumanoid creatures. Some of them have magical powers, but most are unintelligent and lack any society or language. Beasts include all varieties of ordinary animals.'
        },
        {
            index: 'construct',
            desc: 'Constructs are programmed opponents designed to follow a preset routine for their entire existence, with little to no variation.'
        },
        {
            index: 'dragon',
            desc: 'Ho ho, Dragons! Powerful and intelligent, dragons are usually winged reptiles with magical abilities and breath weapons. The different subraces, distinguished by their coloring, vary in power. Obedience not garunteed!'
        },
        {
            index: 'elemental',
            desc: 'Elementals were the purest living forms of the four basic elements—air, earth, fire, and water—as well as several other, less common elements. Make sure you put them in the proper environment to help them thrive.'
        },
        {
            index: 'fey',
            desc: 'Many are typified as having supernatural abilities and a connection to nature or to some other force or place. They might help you or kill you depending on their mood.'
        },
        {
            index: 'fiend',
            desc: 'These creatures were born of evil, primal malevolence is the root of their nature, buy at your own risk!'
        },
        {
            index: 'giant',
            desc: 'These are creatures of great strength and size with a self-involved social focus. Don\'t mix the types in one area as they are likely to kill each other and destroy anything in their path while the do it!'
        },
        {
            index: 'humanoid',
            desc: 'Humanoids is a broad category that includes the majority of playable races, as well as common low-level enemies. Slaves? What? These are clearly monsters with language and culture. Hmmph!'
        },
        {
            index: 'monstrosity',
            desc: 'Monstrosities are monsters in the strictest sense-frightening creatures that are not ordinary, not truly natural, and almost never benign.'
        },
        {
            index: 'ooze',
            desc: 'These slimy creatures are as brainless as they are deadly, don\'t mistake these guys for your level 1 video game grinding ones!'
        },
        {
            index: 'plant',
            desc: 'Don\'t confuse these creatures with the mundane flora of the world. Most of them are ambulatory, and some are carnivorous!'
        },
        {
            index: 'swarm-of-tiny-beasts',
            desc: 'The swarm can occupy another creature\'s space and vice versa, and the swarm can move through any opening large enough for single creature of the swarm. The swarm can\'t regain hit points or gain temporary hit points. Boy they sure are annoying to any tresspassers!'
        },
        {
            index: 'undead',
            desc: 'Undead were once-living creatures that had been animated by spiritual or supernatural forces. Alas they are not much to look at or talk to, but they are relentless.'
        },
      ]
      const getCategoryDesc = (monsterType) => {
        let selectedCategory = categoryDesc.find(item => item.index === monsterType);

        return (selectedCategory.desc);

      }
      const setCategoryTitle = (monsterType) => {
        var categoryTitle = monsterType.replace(/-/g, ' ');
        if(categoryTitle.substring(categoryTitle.length - 1) === "y" && categoryTitle !== "fey") {
            categoryTitle = categoryTitle.replace(/.$/,"ies");
        } else if(monsterType.substring(monsterType.length - 1) !== "s" && (categoryTitle !== "undead" && categoryTitle !== "fey")) {
            categoryTitle = monsterType + "s";
        }
    
        return categoryTitle.toUpperCase();
    }
    return (
        <Fragment>
        <CategoryPageTitle>{setCategoryTitle(monsterType)}</CategoryPageTitle>
        <DialogueBox dialogue={getCategoryDesc(monsterType)} />
          
        <CategoryPageContainer>
            { 
                monsters && monsters.map((monster) => <MonsterCard key={monster.index} monster={monster} />)
            }
        </CategoryPageContainer>
        </Fragment>
    )   
};

export default CategoryPage;
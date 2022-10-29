import * as React from 'react';

/** Page Section Components */
// Hero Sections
import HeroFullWidth from './Heros/HeroFullWidth';
import HeroBasic from './Heros/HeroBasic';

// Image and Text Sections
import TextWithImage from './TextWithImage';
import TextWithGraphic from './TextWithGraphic';

// Card Group Sections
import CardGrid from './CardGrid';
import FeaturedPerson from './FeaturedPerson';
import Slider from './Slider';
import RichText from './RichText';
import Ministers from './Ministers';

const PageSections = ({sections}) => {
    
    const getSection = (section, key) => {
        // console.log('Section', section);
        const fields = section.fields;
        switch(section.sys.contentType.sys.id) {
            case 'pageSectionHeroFullWidth':
                return <HeroFullWidth {...section} key={key} />
            case 'pageSectionHeroBasic':
                return <HeroBasic {...section} key={key} />
            case 'pageSectionTextWithImage':
                return <TextWithImage {...section} key={key} />
            case 'pageSectionTextWithGraphic':
                return <TextWithGraphic {...section} key={key} />
            case 'pageSectionCardGrid':
                // return <div>CARD GRID</div>
                return <CardGrid heading={fields.heading} textStringified={JSON.stringify(fields.text)} cards={fields.cards} layout={fields.layout} key={key} />
            case 'pageSectionFeaturedPerson':
                return <FeaturedPerson {...section} key={key} />
            case 'pageSectionSlider':
                return <Slider {...section} key={key} />
            case 'pageSectionRichText':
                return <RichText {...section} key={key} />
            case 'pageSectionMinisters':
                return <Ministers {...section.fields} key={key} />
            default: return <div key={key}>SECTION NOT FOUND</div>
        }
    }

    return(
        <>
        {sections &&
        sections.map((section, key) => {
            return getSection(section, key);
        })}
        </>
    )
}

export default PageSections;
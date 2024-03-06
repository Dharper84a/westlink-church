'use client';

import Image from 'next/image';

import SharedWrapper from '../Shared/Wrapper';

import { _HomeLayout } from './styles';
import ImageHero from '../../components/Hero/ImageHero';
const HomeLayout = () => {
    const heroImage = {
        mobile: {
            src: 'https://placekitten.com/1024/768',
            alt: '',
            width: 1024,
            height: 768
        },
        desktop: {
            src: 'https://placekitten.com/1600/900',
            alt: '',
            width: 1600,
            height: 900
        }
    };

    return (
        <SharedWrapper>
            <ImageHero
                image={heroImage}
                heading="Westlink Church of Christ"
                copy="Westlink is a church dedicated to growing in love for God and for others. Our focus is on putting the inclusive love of Christ into action."
            />
        </SharedWrapper>
    );
};

export default HomeLayout;

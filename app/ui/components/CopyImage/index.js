'use client';
import Image from 'next/image';
import { _Container } from './styles';
import RichText from '../RichText';

const CopyImage = ({ copy, image, variant }) => {
    const _variant = variant || [];
    const copyPosition = _variant.includes('right') ? 'right' : 'left';
    const colorStyle = _variant.includes('dark') ? 'dark' : 'light';

    return (
        <_Container colorStyle={colorStyle}>
            {image && copyPosition === 'left' && (
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
            )}
            <RichText copy={copy} />
            {image && copyPosition === 'right' && (
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
            )}
        </_Container>
    );
};

export default CopyImage;

import React from "react";

const defaultOptions = {

};
const useImage = (_source, _options = {}) => {
    const [image, setImage] = React.useState(null);
    const [options, setOptions] = React.useState({
        ...defaultOptions,
        ..._options
    })
    const [isReady, setIsReady] = React.useState(false);

    /** Handlers */
    const setOptionsHandler = React.useCallback((_options = {}) => {
        setOptions(prevState => ({
            ...prevState,
            ..._options
        }));
    }, []);

    const setImageHandler = React.useCallback((_image, _options = {}) => {
        if(!_image) return;

        const specificOptions = {...options, ..._options};

        if(specificOptions.layout !== 'fill') {
            setImage({
                ...specificOptions,
                src: `https:${_image?.fields?.file?.url}`,
                alt: _image?.fields?.description || "",
                width: _image?.fields?.file?.details?.image?.width || 200,
                height: _image?.fields?.file?.details?.image?.height || 200,
            });
        } else {
            setImage({
                ...specificOptions,
                src: `https:${_image?.fields?.file?.url}`,
                alt: _image?.fields?.description || "",
            });
        }

        setIsReady(true);
    }, [options]);

    /** Effects */
    React.useEffect(() => {
        if(!_source) return () => {}
        if(Object.keys(_options).length <= 0) return () => {}

        // console.log('useImage.useEffect | Initial Load')
        setImageHandler(_source, _options);

        return () => {}
    }, [_source, _options, setImageHandler])

    // React.useEffect(() => {
    //     if(!image) return () => {}
    //     console.log('useImage.useEffect | On Image Change')
    //     setIsReady(true);

    //     return () => {}
    // }, [image])

    return {
        isReady: isReady,
        setImage: setImageHandler,
        setOptions: setOptionsHandler,
        image: image,
    };
};

export default useImage;

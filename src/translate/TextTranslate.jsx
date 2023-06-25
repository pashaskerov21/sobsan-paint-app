import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { googleTranslate } from './GoogleTranslate';

function TextTranslate({text}) {
    const language = useSelector(state => state.language.language);
    const [translatedText, setTranslatedText] = useState('');
    useEffect(() => {
        const fetchTranslation = async () => {
            try {
                const translation = await googleTranslate(text, language);
                setTranslatedText(translation);
            } catch (error) {
                console.error('Tərcümə xətası:', error);
            }
        };

        fetchTranslation();
    }, [text, language]);
    return (
        <>{translatedText}</>
    )
}

export default TextTranslate

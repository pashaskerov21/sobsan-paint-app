async function translateText(text, language) {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${encodeURI(text)}`
      );
  
      const data = await response.json();
  
      return data[0][0][0];
    } catch (error) {
      console.error('Çeviri sırasında bir hata oluştu:', error);
      throw error;
    }
  }
  
  export { translateText };
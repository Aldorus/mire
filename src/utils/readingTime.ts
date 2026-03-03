/**
 * Extraction du texte brut à partir d'un objet RichText de Contentful.
 */
export const getTextFromRichText = (content: any): string => {
    if (!content || !content.json || !content.json.content) {
        return "";
    }

    let text = "";

    const extract = (node: any) => {
        if (node.nodeType === "text") {
            text += " " + node.value;
        }
        if (node.content) {
            node.content.forEach(extract);
        }
    };

    content.json.content.forEach(extract);
    return text.trim();
};

/**
 * Calcule le temps de lecture en minutes pour un ensemble de contenus (chaînes ou RichText).
 * Basé sur une vitesse moyenne de 225 mots par minute.
 */
export const calculateReadingTime = (...contents: any[]): number => {
    let allText = "";

    contents.forEach((content) => {
        if (typeof content === "string") {
            allText += " " + content;
        } else if (content && content.json) {
            allText += " " + getTextFromRichText(content);
        }
    });

    const words = allText.trim().split(/\s+/).filter(Boolean).length;
    const wpm = 225;
    const minutes = Math.ceil(words / wpm);

    return minutes || 1; // Minimum 1 minute
};

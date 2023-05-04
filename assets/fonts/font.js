import * as ExpoFont from 'expo-font';

// Fonction pour charger une police de caractères
const loadFont = async (fontName, fontFile) => {
  await ExpoFont.loadAsync({
    [fontName]: fontFile,
  });
};

export default loadFont;
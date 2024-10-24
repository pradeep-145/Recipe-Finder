# translator.py
import sys
from googletrans import Translator

def translate_text(text, target_language):
    translator = Translator()
    try:
        translated = translator.translate(text, dest=target_language)
        return translated.text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    text_to_translate = sys.argv[1]
    target_language = sys.argv[2]
    print(translate_text(text_to_translate, target_language))

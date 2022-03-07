# JS-HTML-Change-website-language

## SUMMARY

This simple js script allows you to automatically get the language from the user navigator and update your website texts accordingly (as long as you support the language).
The user can easily switch between languages and the chosen one is saved in their navigator local storage.

## How to install
- Add the language.js file in your website script folder
  - In the "changeLanguage" function:
    - Add a var for each language you want to support
	- Add the new languages to the fail-safe to make sure all variants will be shown correctly
	- Add the new languages to switch the shown texts

- In your html pages
	- Add <script defer src="language.js"></script> at the bottom of your body
	- Create a way for the user to select the wanted language (a dropdown example is on the index.html file)
	- Copy-paste each texts you have in your pages and translate them for each of the languages you support
		- In each of the texts add a class="lang"
			- Depending on the languages of the text, add the two letter index of the languages (ex: class="lang en" for English)

# Online Alias

A simple website which lets you create a simple Alias deck to be used in a classroom setting or similar.

## How to use
To create a new Alias, simply enter the base-url the website is hosted on.
Write in all the words you want included in the Alias. (You can also copy paste words in the format: <word1>,<word2>, etc...)
Press: Lag QR-kode

## Technical specs
The project includes the astro code to generate two html pages with some embedded javascript.

No data is sent to the server, and no backend is nesscesary. The words entered are slightly compressed (mosttly for a basic obfuscation) and included as a url-parameter in the QR-code.
When QR-code is scanned, the website the user lands on decodes the url parameter, and randomises the order of the words.

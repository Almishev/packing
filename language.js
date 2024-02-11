function changeLanguage(selectedLanguage) {
    // Dynamically load the HTML content for the selected language
    var languageFile
    if(selectedLanguage=='BG'){
      var  languageFile = 'index.html';
    } 
    else{
     languageFile = 'test_' + selectedLanguage.toLowerCase() + '.html';
    }

    // Fetch the content of the language-specific HTML file
    fetch(languageFile)
        .then(response => response.text())
        .then(data => {
            // Replace the entire document with the new content
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error('Error fetching language file:', error));
}
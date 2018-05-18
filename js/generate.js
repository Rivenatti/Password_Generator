$(document).ready(function () {

    // BUTTON CLICKED
    $('#generate').click(function () {

        // SHOW ERROR WHEN NOT ENOUGH INFORMATION PROVIDED
        if (($('#characters').val() == '') ||
        (($('#lowercase').is(':checked') == false) &&
        ($('#uppercase').is(':checked') == false) &&
        ($('#numbers').is(':checked') == false) &&
        ($('#special').is(':checked') == false))) {

          $('#formFillInline').show();
        } else if (($('#characters').val() < 4) || ($('#characters').val() > 20)) {
          // IF CHARACTERS NUMBER IS INVALID SHOW ERROR
          $('#formCharsInline').show();
        } else {
          // EVERYTHING IS ALLRIGHT, PROCEED
          $('#formFillInline').hide();
          $('#formCharsInline').hide();

          // VARIABLES
          var characters = $('#characters').val();
          var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
          var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
          var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          var special = ['@', '#', '$', '%', '&'];
          var allCharacters = [];
          var password = [];

          // IF LOWERCASE IS CHECKED
          if ($('lowercase').is(':checked')) {
            // ADD LOWERCASE CHARACTERS TO CHARACTERS ARRAY
            for (var i = 0; i < lowercase.length; i++) {
              allCharacters += lowercase[i];
            }

            // ADD ONE LOWERCASE LETTER TO PASSWORD ARRAY
            var indexLow = Math.floor((Math.random() * lowercase.length));
            password += lowercase[indexLow];
          }

          // IF UPPERCASE IS CHECKED
          if ($('#uppercase').is(':checked')) {
            // ADD UPPERCASE CHARACTERS TO CHARACTERS ARRAY
            for (var i = 0; i < uppercase.length; i++) {
              allCharacters += uppercase[i];
            }

            // ADD ONE UPPERCASE TO PASSWORD ARRAY
            var indexUpp = Math.floor((Math.random() * uppercase.length));
            password += uppercase[indexUpp];
          }

          // IF NUMBERS IS CHECKED
          if ($('#numbers').is(':checked')) {
            // ADD NUMBERS TO CHARACTERS ARRAY
            for (var i = 0; i < numbers.length; i++) {
              allCharacters += numbers[i];
            }

            // ADD ONE NUMBER TO PASSWORD ARRAY
            var indexNum = Math.floor((Math.random() * numbers.length));
            password += numbers[indexNum];
          }

          // IF SPECIAL IS CHECKED
          if ($('#special').is(':checked')) {
            // ADD SPECIAL CHARACTERS TO CHARACTERS ARRAY
            for (var i = 0; i < special.length; i++) {
              allCharacters += special[i];
            }

            // ADD ONE SPECIAL CHARACTER TO PASSWORD ARRAY
            var indexSpec = Math.floor((Math.random() * special.length));
            password += special[indexSpec];
          }

          // FILL PASSWORD LENGTH WITH REST OF ALLOWED CHARACTERS
          while (password.length < characters) {
            var indexAllChars = Math.floor((Math.random() * allCharacters.length));
            password += allCharacters[indexAllChars];
          }

          // SHUFFLE LETTERS IN PASSWORD AND SET PASSWORD INPUT WITH PASSWORD
          $('#password').html(shuffleLetters(password));
        }
      }); // END GENERATE

    //----------------------------- FUNCTION --------------------------
    function shuffleLetters(word) {
      // VARIABLE FOR SHUFFLED WORD
      var shuffledWord = '';

      // SPLIT CHARACTERS IN WORD
      word = word.split('');

      // SHUFFLE SPLIT CHARACTERS AND ADD TO CREATED VARIABLE
      while (word.length > 0) {
        shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
      }

      // RETURN SHUFFLED WORD
      return shuffledWord;
    } // END SHUFFLE LETTERS FUNCTION
  }); // END DOCUMENT

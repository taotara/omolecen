var arText;
var enText;
var surah;
var a;
var surahAndAyah;

$(document).ready(function(){
  getQuote();
  $("#shuffle").on("click", getQuote);
  $("#tweet").click(function(){
    var tweetLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+'"' + enText + '" QS' + surahAndAyah;
    window.open(tweetLink);
  });
});


function getQuote() {
  var ayah = Math.floor(Math.random() * 6236) + 1 
  var url = "https://api.alquran.cloud/ayah/"+ayah+"/en.asad";
  var urlArabic = "https://api.alquran.cloud/ayah/"+ayah;
  arText;
  enText;
  surah;
  ayahNumber;
  surahAndAyah;
  
  $.getJSON( urlArabic, function(data) {
    arText = data.data.text;
    document.getElementById("arabicVerseText").innerHTML = arText;
    console.log(arText);
  });
            
  $.getJSON( url, function(data) {
    console.log(data);
    enText = data.data.text;
    surah = data.data.surah.englishName;
    ayahNumber = data.data.surah.numberOfAyahs;
    surahAndAyah = surah + " : "+ ayahNumber 
    document.getElementById("verseText").innerHTML = enText;
    document.getElementById("surahAndAyah").innerHTML = surahAndAyah;
    console.log(enText);
    console.log(surah);
    console.log(ayahNumber);
    console.log( "success" );
  })
    .done(function() {
      console.log("second success");
    })
    .fail(function(jqXHR, textStatus, errorThrown) { alert('getJSON request failed! ' + textStatus); })
    .always(function() {
      console.log( "complete" );
    });
}
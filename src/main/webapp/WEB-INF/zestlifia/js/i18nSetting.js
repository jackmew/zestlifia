var locale = navigator.language ;

var appName ;
// init
i18n.init({ lng: locale }, function(err, t) {
    i18nize(err, t);
});
// change 
$('#localeBtn').click(function() {
  console.log(locale);
  if(locale == "en-US") {
    locale = "zh-TW";
  } else {
    locale = "en-US";
  }


  i18n.setLng(locale, function(err, t) {
    i18nize(err, t);
  });
});
// be i18n
function i18nize(err, t) {
   $("body").i18n();

    appName = t("app.name");
    console.log(appName);
}
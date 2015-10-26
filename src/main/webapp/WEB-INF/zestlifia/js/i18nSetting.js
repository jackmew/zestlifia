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

    // appName = t("app.name");
    // console.log(appName);

    var address = "http://maps.google.com.tw/maps?f=q&hl="+locale+"&geocode=&q=台北市大安區忠孝東路四段303號&z=16&output=embed&t=";

    var iframe = document.getElementById("gMap");
    iframe.src = address;
}
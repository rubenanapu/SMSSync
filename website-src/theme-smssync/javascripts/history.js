
var url = "http://query.yahooapis.com/v1/public/yql?q=select * from json where url='https://raw.github.com/ushahidi/SMSSync/develop/history.json'&format=json";
$.ajax({
    url: url,
    cache : false,
    dataType : 'jsonp',
    success : fetchHistory
});

// Get history details
function fetchHistory(data) {
    var histories = data.query.results.json.json;
    $('#latest-header').html(Mustache.render($('#latest-header').html(), {"latest" : histories[0] }));
    $('#versions').html(Mustache.render($('#versions').html(), {"versions" : histories}));
}
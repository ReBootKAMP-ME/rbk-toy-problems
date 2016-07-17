// Don't worry about this code, it will ensure that your ajax calls are allowed by the browser
$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

//-------------- BEGIN VARIABLE/FUNCTION DECLARATIONS ---------------------

//This one calls the Parse server to grab data, and sends it to processData
var getData = function() {
  $.ajax('https://api.parse.com/1/classes/msgs?order=-createdAt', {
    contentType: 'application/json',
    type: 'GET',
    success: function(data){
      processData(data);
    },
    error: function(data) {
      $('#error').prepend(' oh no').append('!');
    }
  });
};

// Here we sort the server messages by 'Created at' and send them to displayData
var processData = function(data) {
  var sortedData = data.results.sort(function(a, b) {
    var aDate = new Date(a.createdAt);
    var bDate = new Date(b.createdAt);
    if (aDate > bDate) {
      return -1;
    } else if (aDate === bDate) {
      return 0;
    } else {
      return 1;
    }
  });
  displayData({'results' : sortedData}, userSelected);
};

var checkNewData = function(data) {
  var compDate = newestDate;
  var newDate = new Date(data.results[0].createdAt);
  if (newDate > compDate) {
    return true;
  } else {
    return false;
  }
};

var userSelectedGroup = {},
  newestDate = new Date(),
  userSelected;

var displayData = function(data, user) {
  var $results = [];
  var resultCount = 0;

  var i = 0;
  while (resultCount < 10 && i < data.results.length) {

    newestDate = new Date(data.results[0].createdAt);

    if(user === data.results[i].username || !user) {
      var timestamp  = moment(data.results[i].createdAt).format('h:mm:ss a'),
        $result      = $('<li></li>').attr('data-username', data.results[i].username),
        $message     = $('<p></p>').text(data.results[i].text),
        $userName    = $('<a></a>').text(data.results[i].username).addClass("onlyUser"),
        $likeUser    = $('<a></a>').addClass("addUser").text(': '),
        $timeStamp   = $('<span></span>').text(timestamp);

      if (userSelectedGroup[data.results[i].username]) {
        $message.addClass('highlight');
      }

      $result.html([$userName, $timeStamp, $likeUser, $message]);
      $results.push($result);
      resultCount++;
    }
    i++;
  }

  $('#main').find('ul').html($results);

  $(".onlyUser").on('click', function() {
    if (userSelected !== $(this).closest('li').data("username")) {
      userSelected = $(this).closest('li').data("username");
      $('#backButton').toggle();
      if (!userSelected) {
        $('.title').text('Chat with JSON');
      } else {
        $('.title').text(userSelected);
      };
      getData();
    }
  });

  $(".addUser").on('click', function() {
    if (userSelectedGroup[$(this).closest('li').data('username')]) {
      delete userSelectedGroup[$(this).closest('li').data('username')];
    } else {
      userSelectedGroup[$(this).closest('li').data('username')] = true;
    }
    getData();
  });
};

var postData = function(message, username) {
  $.ajax({
    url: 'https://api.parse.com/1/classes/msgs',
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify({
            'username' : username,
            'text': message
          }),
    success: function(data){
      console.log("Success!", data);
    },
    error: function(data){
      console.log(data);
    }
  });
};

//-------------- END VARIABLE/FUNCTION DECLARATIONS ---------------------

getData();



$('.submit').on('submit', function(event) {
  event.preventDefault();
  var username = $('.usernameInput').val();
  $('#backButton').toggle();
  $('.title').text('Chat with JSON');

  postData($('.userInput').val(), username);
});


setInterval(getData,1000)

(function (module) {
    mainView = {};

    mainView.init = function () {
        tweetView.newest();
        $('#about, #team, #form').fadeOut(300, function(){
            $('#sortingMenu, #tweetsPool').delay(300).fadeIn(300);
        });

    };

    mainView.about = function () {
        $('#sortingMenu, #tweetsPool, #team, #form').fadeOut(300, function () {
            $('#about').delay(300).fadeIn(300);
        });
    };

    mainView.team = function () {
        $('#sortingMenu, #tweetsPool, #form, #about').fadeOut(300, function () {
            $('#team').delay(300).fadeIn(300);
        });
    };

    mainView.addIssue = function () {
        $('#sortingMenu, #tweetsPool, #about, #team').fadeOut(300, function () {
            $('#form').delay(300).fadeIn(300);
        });
    };

    module.mainView = mainView;
})(window);
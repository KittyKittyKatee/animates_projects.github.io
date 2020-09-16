$(function () {
    let cursor = $(".cursor"),
    overlay = $(".projects__img");

    $(".project-1").hover(function () {
        cursor.css({ "background-image": "url(./imgs/img-1.jpg)" });
    });
    $(".project-2").hover(function () {
        cursor.css({ "background-image": "url(./imgs/img-2.jpg)" });
    });
    $(".project-3").hover(function () {
        cursor.css({ "background-image": "url(./imgs/img-3.jpg)" });
    });
    $(".project-4").hover(function () {
        cursor.css({ "background-image": "url(./imgs/img-4.jpg)" });
    });

    function moveImg(e) {
        TweenLite.to(cursor, 0.5, {
            css: {
                left: e.pageX,
                top: e.pageY
            }
        });
    }

    overlay.mousemove(function () {
        TweenLite.to(cursor, 0.4, { scale: 1, autoAlpha: 1, rotation:"0deg" });
    });

    overlay.mousemove(moveImg);

    overlay.mouseout(function () {
        TweenLite.to(cursor, 0.4, { scale: 0.2, autoAlpha: 0, rotation:"-45deg"});
    });
})
$(".slider").fullpage({
    paddingTop: 85,
    navigation: true,
    navigationPosition: "right",
    onLeave: function(a, b, c) {
        $(".slide-" + b).addClass("is-active");
        if (b == 5) {
            $("#fp-nav").addClass("slide-5-active")
        } else {
            $("#fp-nav").removeClass("slide-5-active")
        }
    },
    afterLoad: function(b, a) {
        $(".slide-1").addClass("is-active")
    },
});
function iconHovers() {
    var a = $(".slide-icons > span");
    a.on({
        mouseenter: function() {
            var d = $(this);
            if (!d.hasClass("active-icon")) {
                var c = d.parent().find("> .active-icon"),
                b = c.data("id"),
                e = d.data("id");
                c.removeClass("active-icon");
                c.parent().find('.icon-text [data-id="' + b + '"]').removeClass("active-icon");
                d.addClass("active-icon");
                d.parent().find('.icon-text [data-id="' + e + '"]').addClass("active-icon")
            }
        }
    })
}
iconHovers();
function menuToggle() {
    var b = $(".site-menu-button"),
    a = $(".site-menu-wrap");
    b.on({
        click: function() {
            $(this).toggleClass("menu-active");
            a.toggleClass("menu-active")
        },
        mouseenter: function() {
            a.addClass("menu-hovered")
        },
        mouseleave: function() {
            a.removeClass("menu-hovered")
        }
    })
}
menuToggle();
$(".nav-shortcut").on({
    mouseenter: function() {
        $(this).addClass("sc-hovered")
    },
    mouseleave: function() {
        $(this).removeClass("sc-hovered")
    }
});
$(".panel").on({
    mouseenter: function() {
        $(".page-header").css("z-index", "0");
        $(this).addClass("hovered")
    },
    mouseleave: function() {
        $(".page-header").css("z-index", "200");
        $(this).removeClass("hovered")
    }
});
$(".site-menu-button").mouseenter(function() {
    $(".site-menu-text").css("opacity", "1")
});
$(".site-menu-button").mouseleave(function() {
    $(".site-menu-text").css("opacity", "0")
});

/*
function loadBlogFeed() {
    var a = $.ajax({
        url: "http://www.fengsong.org/feed/atom",
        dataType: "html",
        async: false
    }),
    c = $.parseXML(a.responseText),
    b = $(c);
    b.find("entry").each(function(f) {
        var i = $(this).find("title").text();
        var g = $(this).find("link").attr("href");
        var h = $(this).find("published").text().substr(0, 10);
        var e = $(this).find("summary").text();
        var d = $.parseHTML($(this).find("summary").text());
        $(".news-title").eq(f).append(i);
        $(".news-item").eq(f).attr("href", g);
        $(".news-date").eq(f).append(h);
        $(".news-summary").eq(f).append(d[1]);
        if (f == 5) {
            return false
        }
    })
}*/
$(".site-menu-icon").click(function() {});
window.onload = function() {
    //loadBlogFeed();
    console.info("\n %c Copyright © tynefung 2017 %c \n\n", "color:#455a64;background:#e0e0e0;padding:5px 0;border-top-left-radius:5px;border-bottom-left-radius:5px;", "color:#ffffff;background:##455a64;padding:5px 0;border-top-right-radius:5px;border-bottom-right-radius:5px;")
};

jQuery(document).ready(function ($) {

    // ===============================
    // Mobile Menu
    // ===============================

    $("#menuB").on("click", function () {
        $(".mobmenu").removeClass("hidden");
        $("#menuB").addClass("hidden");
        $("#cmenu").removeClass("hidden");
    });

    $("#cmenu").on("click", function () {
        $(".mobmenu").addClass("hidden");
        $("#cmenu").addClass("hidden");
        $("#menuB").removeClass("hidden");
    });

    $(window).on("resize", function () {
        if ($(window).width() >= 768) {
            $(".mobmenu").addClass("hidden");
            $("#cmenu").addClass("hidden");
            $("#menuB").removeClass("hidden");
        }
    });

    // ===============================
    // Service Buttons
    // ===============================

    $(".ser").on("click", function (e) {

        e.preventDefault();

        let service = $(this).attr("data-service");

        localStorage.setItem("service", service);

        window.location.href = "/contact/";
    });

    // ===============================
    // Contact Page Input
    // ===============================

    if ($("#sinput").length) {

        let service = localStorage.getItem("service");

        if (service) {
            $("#sinput").val(service);
            localStorage.removeItem("service");
        }

    }

    
    // ===============================
    // GSAP Animations
    // ===============================

    gsap.from("nav div li", {
        y: -60,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".stl div", {
        y: 60,
        duration: 1,
        opacity: 0,
        stagger: 0.5
    });

    gsap.from(".left h1", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.8
    });

    gsap.from("form input", {
        y: 60,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from("form textarea", {
        x: 260,
        duration: 1,
        opacity: 0,
        stagger: 0.5
    });

    gsap.from("footer div", {
        y: 40,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            end: "top 65%",
            scrub: 5
        }
    });

    gsap.from(".main div", {
        y: 60,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".scard1", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".scard4", {
        y: 60,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".scard4",
            start: "top 80%",
            end: "top 65%",
            scrub: 5
        }
    });

    gsap.from(".pcard", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.2
    });

    gsap.from(".pcard2", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".pcard2",
            start: "top 85%",
            end: "top 70%",
            scrub: 5
        }
    });

    gsap.from(".pcard3", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".pcard3",
            start: "top 85%",
            end: "top 70%",
            scrub: 5
        }
    });

    gsap.from(".skills div", {
        y: 90,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skills",
            start: "top 100%",
            end: "top 90%",
            scrub: 5
        }
    });

});
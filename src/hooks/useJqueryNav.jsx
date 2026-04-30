import { useEffect } from "react";
import $ from "jquery";


function mobileTrigger() {
  $(this).toggleClass("active");
  $(".header__menu-col").slideToggle();
  $("body").toggleClass("no-scroll");
}


function useJqueryNav(initialValue = 0) {
  useEffect(()=>{
    $(".mobile-trigger").on("click", mobileTrigger);
  
    $("div#black-bar").attr("style", `margin-top: ${$(".header").outerHeight()}px !important`);
  
    $(window).resize(function() {
      $("div#black-bar").attr("style", `margin-top: ${$(".header").outerHeight()}px !important`);
    });
  
    $(".has-dropdown>a").attr("href", "javascript:void(0)");
  
    if (window.matchMedia("(min-width: 1025px)").matches) {
      $(".sub-menu-lg__left li").on("mouseover", function() {
        var e = $(this).data("id");
        $(".sub-menu-lg__left li").removeClass("sub-menu-active");
        $(this).addClass("sub-menu-active");
        $(".sub-menu-toggle").hide();
        $(".sub-menu-toggle#" + e).show();
      });
  
      $(".sub-menu-sm").on("mouseleave", function() {
        $(".has-dropdown").removeClass("show-line");
        $(".sub-menu-sm").fadeOut(200);
        $("body").removeClass("has-overlay");
      });
  
      $(".top__nav>li>a, .top__nav>li>span").on("mouseover", function() {
        $(".has-dropdown").removeClass("show-line");
        $(".sub-menu-sm").fadeOut(200);
        $("body").removeClass("has-overlay");
      });
  
      $(".has-dropdown>a, .has-dropdown>span").on("mouseover", function(e) {
        $("body").toggleClass("has-overlay");
        var t = $(this).data("id");
        e.preventDefault();
  
        if ($(this).parent().hasClass("show-line")) {
          $(this).parent().removeClass("show-line");
          $(this).siblings(".sub-menu-sm").fadeOut(200);
          $(".sub-menu-sm").fadeOut(200);
          $(this).parent().next(".sub-menu-sm").fadeOut(200);
          $("body").removeClass("has-overlay");
        } else {
          $(".has-dropdown").removeClass("show-line");
          $(this).parent().addClass("show-line");
          $(".sub-menu-sm").fadeOut(200);
          $(this).siblings(".sub-menu-sm").fadeIn(200);
          $(".sub-menu-sm#" + t).fadeIn(200);
          $(this).parent().next(".sub-menu-sm").fadeIn(200);
          $("body").addClass("has-overlay");
        }
  
        $(".sub-menu-lg__left li").removeClass("sub-menu-active");
        $(".sub-menu-lg__left li:first-child").addClass("sub-menu-active");
        $(".sub-menu-lg__right .sub-menu-toggle").hide();
        $(".sub-menu-lg__right .sub-menu-toggle:first-child").show();
      });
  
      let t = $(".header.js-header.navbar-header").outerHeight();
      $(".full-width-menu").css("top", t);
  
    } else {
      $("body .sub-menu-lg__left li").removeClass("sub-menu-active");
  
      $(".sub-menu-lg__left li").on("click", function() {
        if ($(this).hasClass("sub-menu-active")) {
          $(this).removeClass("sub-menu-active");
          $(this).next(".sub-menu-toggle").slideUp();
        } else {
          $(".sub-menu-lg__left li").removeClass("sub-menu-active");
          $(this).addClass("sub-menu-active");
          $(".sub-menu-toggle").slideUp();
          $(this).next(".sub-menu-toggle").slideDown();
        }
      });
  
      $(".has-dropdown>a, .has-dropdown>span").on("click", function(e) {
        $("body").toggleClass("has-overlay");
        e.preventDefault();
  
        if ($(this).parent().hasClass("show-line")) {
          $(this).parent().removeClass("show-line");
          $(this).siblings(".sub-menu-sm").fadeOut(200);
          $(this).parent().next(".sub-menu-sm").fadeOut(200);
          $("body").removeClass("has-overlay");
        } else {
          $(".has-dropdown").removeClass("show-line");
          $(this).parent().addClass("show-line");
          $(".sub-menu-sm").fadeOut(200);
          $(this).siblings(".sub-menu-sm").fadeIn(200);
          $(this).parent().next(".sub-menu-sm").fadeIn(200);
          $("body").addClass("has-overlay");
        }
      });
    }
  
    // mobile restructuring
    if (window.matchMedia("(max-width: 1024px)").matches) {
      $(".sub-menu-lg__left li").removeClass("sub-menu-active");
  
      $(".menu-solutions .sub-menu-toggle").each(function() {
        var e = $(this).attr("id");
        var t = $(this).detach();
        $(`.menu-solutions .sub-menu-lg__left li[data-id=${e}]`).after(t);
      });
  
      $(".menu-features .sub-menu-toggle").each(function() {
        var e = $(this).attr("id");
        var t = $(this).detach();
        $(`.menu-features .sub-menu-lg__left li[data-id=${e}]`).after(t);
      });
  
      var tLogin = $(".header-loginbar .header__menu-item").detach();
      $("#customers-menu").after(tLogin);
  
      $(".full-width-menu").each(function() {
        var e = $(this).attr("id");
        var t = $(this).detach();
        $(`[data-id=${e}]`).parent().after(t);
      });
  
      $(".menu-btn-start-free-trial").after($(".call-gradient-btn-nav"));
      $(".menu-btn-start-free-trial").before($(".login-menu-item"));
    }

    return () => {
      $(window).off("resize");
      $(".mobile-trigger").off("click");
      $(".sub-menu-lg__left li").off();
      $(".has-dropdown>a, .has-dropdown>span").off();
    };
  
  },[])
}

export default useJqueryNav;
/*!

 =========================================================
 * Now UI Kit - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */


var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

var nowuiKit,
  $navbar,
  scroll_distance,
  oVal;

$(document).ready(function() {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  // Activate Popovers and set color for popovers
  $('[data-toggle="popover"]').each(function() {
    color_classNameNameNameName = $(this).data('color');
    $(this).popover({
      template: '<div classNameNameNameName="popover popover-' + color_classNameNameNameName + '" role="tooltip"><div classNameNameNameName="arrow"></div><h3 classNameNameNameName="popover-header"></h3><div classNameNameNameName="popover-body"></div></div>'
    });
  });

  // Activate the image for the navbar-collapse
  nowuiKit.initNavbarImage();

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  // Check if we have the classNameNameNameName "navbar-color-on-scroll" then add the function to remove the classNameNameNameName "navbar-transparent" so it will transform to a plain color.

  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
  }

  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addclassNameNameNameName("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeclassNameNameNameName("input-group-focus");
  });

  // Activate bootstrapSwitch
  $('.bootstrap-switch').each(function() {
    $this = $(this);
    data_on_label = $this.data('on-label') || '';
    data_off_label = $this.data('off-label') || '';

    $this.bootstrapSwitch({
      onText: data_on_label,
      offText: data_off_label
    });
  });

  if ($(window).width() >= 992) {
    big_image = $('.page-header-image[data-parallax="true"]');

    $(window).on('scroll', nowuiKitDemo.checkScrollForParallax);
  }

  // Activate Carousel
  $('.carousel').carousel({
    interval: 4000
  });

  $('.date-picker').each(function() {
    $(this).datepicker({
      templates: {
        leftArrow: '<i classNameNameNameName="now-ui-icons arrows-1_minimal-left"></i>',
        rightArrow: '<i classNameNameNameName="now-ui-icons arrows-1_minimal-right"></i>'
      }
    }).on('show', function() {
      $('.datepicker').addclassNameNameNameName('open');

      datepicker_color = $(this).data('datepicker-color');
      if (datepicker_color.length != 0) {
        $('.datepicker').addclassNameNameNameName('datepicker-' + datepicker_color + '');
      }
    }).on('hide', function() {
      $('.datepicker').removeclassNameNameNameName('open');
    });
  });


});

// Javascript just for Demo purpose, remove it from your project
nowuiKitDemo = {
  checkScrollForParallax: debounce(function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });

  }, 6)

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

$(window).on('resize', function() {
  nowuiKit.initNavbarImage();
});

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (nowuiKit.misc.navbar_menu_visible == 1) {
    $('html').removeclassNameNameNameName('nav-open');
    nowuiKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeclassNameNameNameName('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addclassNameNameNameName('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeclassNameNameNameName('nav-open');
      nowuiKit.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeclassNameNameNameName('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addclassNameNameNameName('nav-open');
    nowuiKit.misc.navbar_menu_visible = 1;
  }
});

nowuiKit = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeclassNameNameNameName('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addclassNameNameNameName('navbar-transparent');
      }
    }
  }, 17),

  initNavbarImage: function() {
    var $navbar = $('.navbar').find('.navbar-translate').siblings('.navbar-collapse');
    var background_image = $navbar.data('nav-image');

    if (background_image != undefined) {
      if ($(window).width() < 991 || $('body').hasclassNameNameNameName('burger-menu')) {
        $navbar.css('background', "url('" + background_image + "')")
          .removeAttr('data-nav-image')
          .css('background-size', "cover")
          .addclassNameNameNameName('has-image');
      } else {
        $navbar.css('background', "")
          .attr('data-nav-image', '' + background_image + '')
          .css('background-size', "")
          .removeclassNameNameNameName('has-image');
      }
    }
  },

  initSliders: function() {
    // Sliders for demo purpose in refine cards section
    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
}

// Javascript just for Demo purpose, remove it from your project
nowuiKitDemo = {
  checkScrollForParallax: debounce(function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });

  }, 6)

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};
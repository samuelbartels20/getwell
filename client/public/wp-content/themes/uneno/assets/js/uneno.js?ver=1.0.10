(function($, window){
    'use strict';

    var is_rtl = $('body,html').hasClass('rtl');

    /*===================================================================================*/
    /*  Vertical Menu
    /*===================================================================================*/

    $( '.vertical-nav, .site-header__departments-menu, .primary-nav-menu, .secondary-nav-menu' ).on( 'mouseleave', function() {
        var $this = $(this);
        $this.removeClass( 'animated-dropdown' );
    });

    $( '.vertical-nav .menu-item, .site-header__departments-menu .menu-item, .primary-nav-menu .menu-item, .secondary-nav-menu .menu-item' ).on( 'mouseenter', function() {
        var $this = $(this),
            $departments_menu = $this.parents( '.vertical-nav, .site-header__departments-menu, .primary-nav-menu, .secondary-nav-menu' ),
            $container = $this.parents( '.uneno-animate-dropdown' );

        if ( $departments_menu.length > 0 ) {
            $container = $departments_menu;
        }

        if ( $this.hasClass( 'menu-item-has-children' ) ) {
            if ( ! $container.hasClass( 'animated-dropdown' ) ) {
                setTimeout(function(){
                    $container.addClass( 'animated-dropdown' );
                }, 200);
            }
        } else if ( $container.hasClass( 'animated-dropdown' ) ) {
            var $parent = $this.parents( '.menu-item-has-children' );
            if ( $parent.length <= 0 ) {
                $container.removeClass( 'animated-dropdown' );
            }
        }
    });

    $( '.vertical-nav .menu-item-has-children' ).on({
        mouseenter: function() {
            var $this = $(this),
                $dropdown_menu = $this.find( '> .sub-menu' ),
                $departments_menu = $this.parents( '.vertical-nav' ),
                css_properties = {},
                animation_duration = 300,
                has_changed_width = true,
                animated_class = '',
                $container = '';

            if ( $departments_menu.length > 0 ) {
                $container = $this.parent('.sub-menu');
            }

            $dropdown_menu.css( {
                visibility: 'visible',
                display:    'block'
            } );

            if ( ! $container.hasClass( 'animated-dropdown' ) ) {
                $dropdown_menu.animate( css_properties, animation_duration, function() {
                    $container.addClass( 'animated-dropdown' );
                });
            } else {
                $dropdown_menu.css( css_properties );
            }
        }, mouseleave: function() {
            var $this = $(this)
            $this.find( '> .sub-menu' ).css({
                visibility: 'hidden',
                display:    'none',
            });

            if( ! $this.parent('.sub-menu').hasClass('vertical-nav') ) {
                $this.parent('.sub-menu').removeClass( 'animated-dropdown' );
            }
        }
    });


    $('.uno-scroll-to a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700, 'linear');
    });

    /*===================================================================================*/
    /*  Block UI Defaults
    /*===================================================================================*/
    if( typeof $.blockUI !== "undefined" ) {
        $.blockUI.defaults.message                      = null;
        $.blockUI.defaults.overlayCSS.background        = '#fff url(' + uneno_options.ajax_loader_url + ') no-repeat center';
        $.blockUI.defaults.overlayCSS.backgroundSize    = '16px 16px';
        $.blockUI.defaults.overlayCSS.opacity           = 0.6;
    }

    /*===================================================================================*/
    /*  Add to Cart animation
    /*===================================================================================*/

    $( 'body' ).on( 'adding_to_cart', function( e, $btn, data){
        $btn.closest( '.product__inner' ).block();
    });

    $( 'body' ).on( 'added_to_cart', function(){
        $( '.product__inner' ).unblock();
    });

    /*===================================================================================*/
    /*  woocommerce-store-notice
    /*===================================================================================*/

    // Set a cookie and hide the store notice when the dismiss button is clicked
    $( '.woocommerce-store-notice__dismiss-link' ).on( 'click', function() {
        $('body').addClass( 'woocommerce-store-notice-dismissed' );
    } );

    // Check the value of that cookie and show/hide the notice accordingly

    if ( typeof Cookies != 'undefined' ) {
        if ( 'hidden' === Cookies.get( 'store_notice' ) ) {
            $('body').addClass( 'woocommerce-store-notice-dismissed' );
        } else {
            $('body').removeClass( 'woocommerce-store-notice-dismissed' );
        }
    }

    /*===================================================================================*/
    /*  Header
    /*===================================================================================*/

    // Search Toggler
    $( '.site-header .site-header__header-search .search-btn,.handheld-only .site-header__header-search .search-btn,.page-template-template-homepage-v5 .site-header__header-search .search-btn' ).on( 'click', function() {
        $( this ).closest('.site-header__header-search').toggleClass( "show" );
    } );

    // Search Close Trigger when click outside
    $( document ).on( 'click', function(event) {
        if ( $( '.site-header__header-search' ).hasClass( 'show' ) ) {
            if ( ! $( '.site-header__header-search' ).is( event.target ) && 0 === $( '.site-header__header-search' ).has( event.target ).length ) {
                $( '.site-header__header-search' ).removeClass( "show" );
            }
        }
    });

    /*===================================================================================*/
    /*  Off Canvas Menu
    /*===================================================================================*/

    $( '.desktop-only .off-canvas-navigation-wrapper .navbar-toggle-hamburger' ).on( 'click', function() {
        var css_properties = {
            transform:  'translateX(-250px)',
            transition: 'all .5s'
        };
        if( is_rtl ) {
            css_properties.transform = 'translateX(250px)';
        }

        if ( $( this ).parents( '.stuck' ).length > 0 ) {
            $('html, body').animate({
                scrollTop: $('body')
            }, 0);
        }

        $( this ).closest('.off-canvas-navigation-wrapper').toggleClass( "toggled" );
        $('#page').toggleClass( "off-canvas-bg-opacity" ).css( css_properties );
    } );

    $( '.handheld-only  .off-canvas-navigation-wrapper .navbar-toggle-hamburger' ).on( 'click', function() {
        var css_properties = {
            transform:  'translateX(250px)',
            transition: 'all .5s'
        };
        if( is_rtl ) {
            css_properties.transform = 'translateX(-250px)';
        }

        if ( $( this ).parents( '.stuck' ).length > 0 ) {
            $('html, body').animate({
                scrollTop: $('body')
            }, 0);
        }

        $( this ).closest('.off-canvas-navigation-wrapper').toggleClass( "toggled" );
        $('#page').toggleClass( "off-canvas-bg-opacity" ).css( css_properties );
    } );

    $( '.off-canvas-navigation-wrapper .navbar-toggle-close' ).on( 'click', function() {
        $( this ).closest('.off-canvas-navigation-wrapper').removeClass( "toggled" );
        $('#page').css({'transform': 'none','transition': 'all .5s'}).removeClass( "off-canvas-bg-opacity" );
    } );

    $( document ).on("click", function(event) {
        if ( $( '.off-canvas-navigation-wrapper' ).hasClass( 'toggled' ) ) {
            if ( ! $( '.off-canvas-navigation-wrapper' ).is( event.target ) && 0 === $( '.off-canvas-navigation-wrapper' ).has( event.target ).length ) {
                $( '.off-canvas-navigation-wrapper' ).removeClass( "toggled" );
                $('#page').css({'transform': 'none','transition': 'all .5s'}).removeClass( "off-canvas-bg-opacity" );
            }
        }
    });

    /*===================================================================================*/
    /*  Shop Grid/List Switcher
    /*===================================================================================*/

    $( '#uneno-shop-view-switcher-grid' ).on( 'click', function(e) {
        e.preventDefault();
        $( this ).addClass( 'active' );
        $( '#uneno-shop-view-switcher-list' ).removeClass( 'active' );
        $( '#uneno-shop-view-content' ).removeClass( 'list-view' );
        $( '#uneno-shop-view-content' ).addClass( 'grid-view' );
    } );

    $( '#uneno-shop-view-switcher-list' ).on( 'click', function(e) {
        e.preventDefault();
        $( this ).addClass( 'active' );
        $( '#uneno-shop-view-switcher-grid' ).removeClass( 'active' );
        $( '#uneno-shop-view-content' ).removeClass( 'grid-view' );
        $( '#uneno-shop-view-content' ).addClass( 'list-view' );
    } );

    /*===================================================================================*/
    /*  Primarymenu Menu Height
    /*===================================================================================*/

    var $departments_menu_dropdown = $( '.site-header__departments-menu .dropdown-menu, .primary-nav-menu .sub-menu' ),
        departments_menu_dropdown_height = $departments_menu_dropdown.height();

    $departments_menu_dropdown.find( '.menu-item-has-children > .sub-menu' ).each( function() {
        $(this).find( '.menu-item-object-static_block' ).css( 'min-height', departments_menu_dropdown_height + 30);
        $(this).css( 'min-height', departments_menu_dropdown_height + 30 );
    });

    /*===================================================================================*/
    /*  Slick Carousel
    /*===================================================================================*/

    $('[data-ride="uno-slick-carousel"]').each( function() {
        var $slick_target = false;

        if ( $(this).data( 'slick' ) !== 'undefined' && $(this).find( $(this).data( 'wrap' ) ).length > 0 ) {
            $slick_target = $(this).find( $(this).data( 'wrap' ) );
            $slick_target.data( 'slick', $(this).data( 'slick' ) );
        } else if ( $(this).data( 'slick' ) !== 'undefined' && $(this).is( $(this).data( 'wrap' ) ) ) {
            $slick_target = $(this);
        }

        if( $slick_target ) {
            $slick_target.slick();
        }
    });

    /*===================================================================================*/
    /*  Smooth scroll for checkout steps with @href started with '#' only
    /*===================================================================================*/

    $('.checkout-steps > li > a').on('click', function(e) {
        $(this).removeClass('always-active').addClass('always-active');
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });


    /*===================================================================================*/
    /*  Custom Scrollbar Script
    /*===================================================================================*/
    $(window).on("load",function(){
        if( typeof mCustomScrollbar !== "undefined" ) {
            $( '.uneno-sidebar-header .site-header .desktop-only' ).mCustomScrollbar();
        }
        $( window ).load( function() {
                columnConform();
                columnConformV2();

                $( '.uneno-sidebar-header .site-header .desktop-only .site-header__inner' ).mCustomScrollbar({
                    axis:"y",
                    theme:"minimal-dark"
                });
            });
    });

    /*===================================================================================*/
    /*  Login/Register
    /*===================================================================================*/

        $( '#customer_login .col-1' ).addClass( 'loginContainer' );
        $( '#customer_login .col-2' ).addClass( 'registerContainer' );
        $( '#customer_login .col-1 > h2' ).addClass( 'loginTab active' );
        $( '#customer_login .col-2 > h2' ).addClass( 'registerTab' );
        $( '#customer_login .col-1 > .loginTab' ).prependTo( '#customer_login' );
        $( '#customer_login .col-2 > .registerTab' ).prependTo( '#customer_login' );

        $( '#customer_login > .loginTab' ).on( 'click', function() {
            $(this).addClass( 'active' );
            $('.loginContainer').fadeIn(300);
            $('h2.registerTab').removeClass( 'active' );
            $('.registerContainer').fadeOut(0);
        } );

        $( '#customer_login > .registerTab' ).on( 'click', function() {
            $(this).addClass( 'active' );
            $('.registerContainer').fadeIn(300);
            $('h2.loginTab').removeClass( 'active' );
            $('.loginContainer').fadeOut(0);
        } );

    /*===================================================================================*/
     /*  YITH Wishlist
    /*===================================================================================*/

    $( '.add_to_wishlist' ).on( 'click', function() {
        $( this ).closest( '.product__inner' ).block();
        $( this ).closest( '.single-product .summary' ).block();

    });

    $( '.yith-wcwl-wishlistaddedbrowse > .feedback' ).on( 'click', function() {
        var browseWishlistURL = $( this ).next().attr( 'href' );
        window.location.href = browseWishlistURL;
    });

    $( document ).on( 'added_to_wishlist', function() {
        $( '.product__inner' ).unblock();
        $( '.single-product .summary' ).unblock();

    });

    /*===================================================================================*/
    /*  Handheld Sidebar
    /*===================================================================================*/
    // Handheld Sidebar Toggler
    $( '.handheld-sidebar-toggle .sidebar-toggler' ).on( 'click', function() {
        $( this ).closest('body').toggleClass( "active-hh-sidebar" );
    } );

    // Handheld Sidebar Close Trigger when click outside menu slide
    $( document ).on("click", function(event) {
        if ( $( 'body' ).hasClass( 'active-hh-sidebar' ) ) {
            if ( ! $( '.handheld-sidebar-toggle' ).is( event.target ) && 0 === $( '.handheld-sidebar-toggle' ).has( event.target ).length && ! $( '#secondary' ).is( event.target ) && 0 === $( '#secondary' ).has( event.target ).length ) {
                $( 'body' ).toggleClass( "active-hh-sidebar" );
            }
        }
    });


    /*===================================================================================*/
    /*  Sticky Header
    /*===================================================================================*/

    $('.site-header .uneno-sticky-wrap').each(function(){
        var un_sticky_header = new Waypoint.Sticky({
            element: $(this),
            stuckClass: 'stuck animated fadeInDown faster',
            offset: function() {
                return -this.element.clientHeight
            }
        });
    });

    /*===================================================================================*/
    /*  Products LIVE Search
    /*===================================================================================*/

    if( uneno_options.enable_live_search == '1' ) {

        if ( uneno_options.ajax_url.indexOf( '?' ) > 1 ) {
            var prefetch_url    = uneno_options.ajax_url + '&action=products_live_search&fn=get_ajax_search';
            var remote_url      = uneno_options.ajax_url + '&action=products_live_search&fn=get_ajax_search&terms=%QUERY';
        } else {
            var prefetch_url    = uneno_options.ajax_url + '?action=products_live_search&fn=get_ajax_search';
            var remote_url      = uneno_options.ajax_url + '?action=products_live_search&fn=get_ajax_search&terms=%QUERY';
        }

        var searchProducts = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: prefetch_url,
            remote: {
                url: remote_url,
                wildcard: '%QUERY',
            },
            identify: function(obj) {
                return obj.id;
            }
        });

        searchProducts.initialize();

        $( '.site-header__header-search .search-field' ).typeahead( uneno_options.typeahead_options,
            {
                name: 'search',
                source: searchProducts.ttAdapter(),
                displayKey: 'value',
                limit: uneno_options.live_search_limit,
                templates: {
                    empty : [
                        '<div class="empty-message">',
                        uneno_options.live_search_empty_msg,
                        '</div>'
                    ].join('\n'),
                    suggestion: Handlebars.compile( uneno_options.live_search_template )
                }
            }
        );
    }

})(jQuery);

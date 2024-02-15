

(function( jQuery ){
  var $module = jQuery('#m-1661940632252').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940637171').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1661940636214').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
      responsiveClass:true,
      responsive:{
        0:{
          items:colxs,
          nav: navxs,
          dots:dotsxs,
          margin: marginxs
        },
        768:{
          items:colsm,
          nav: navsm,
          dots:dotssm,
          margin: marginsm
        },
        992:{
          items:colmd,
          nav: navmd,
          dots:dotsmd,
          margin: marginmd
        },
        1200:{
          items:collg,
          nav: navlg,
          dots:dotslg,
          margin: marginlg
        }
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery); 
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940635262').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1661940635136').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661940634227').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1661940633322').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1661940663128').children('.module');
    $module.gfV1Countdown({
        id: "1661940663128",
        idSlug: "1661940663128"
    });
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1661940663121').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
    var $module = jQuery('#m-1661940663125').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
    var $module = jQuery('#m-1661940663196').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
(function( jQuery ){
    var $module = jQuery('#m-1661940663174').children('.module');
    $module.find('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663133').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663177').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1661940663186').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663145').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function(jQuery) {
  var $module = jQuery('#m-1661940663176').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  var $module = jQuery('#m-1661940663099').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1661940663094').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663056').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1661940663155').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663063').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function(jQuery) {
  var $module = jQuery('#m-1661940663183').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  var $module = jQuery('#m-1661940663068').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663103').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663084').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1661940663202').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663211').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function(jQuery) {
  var $module = jQuery('#m-1661940663085').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  var $module = jQuery('#m-1661940663122').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1661940663096').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663230').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1661940663073').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663156').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    (function(jQuery) {
  var $module = jQuery('#m-1661940663143').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  var $module = jQuery('#m-1661940663113').children('.module');
  // You can add custom Javascript code right here.
  var $product = $module.closest('[data-label="Product"]').children('.module');
  if ($product.length == 0) {
    $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
  }
  if ($product.data('gfv3product') != undefined) {
    var selectedVariant = $product.data('gfv3product').getVariant();
    customBadge(selectedVariant);
  }
    

  function changeVariantFunction(variant){
    customBadge(variant);
  }
    
  var currentWrapProductId = jQuery('[data-label="Product"]').attr('id');
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
    
  function customBadge(variant){
    var currentPrice = variant.price;
    var comparePrice = variant.compare_at_price;
    if(currentPrice != null && comparePrice != null){
      if(currentPrice < comparePrice){
        diff = comparePrice - currentPrice;
      }else{
        diff = currentPrice - comparePrice;
      }
      if(diff <= 0){
        $product.find('.gf_product-badge-anchor').css({'display': 'none'});
      }else{
        $product.find('.gf_product-badge-anchor').css({'display': 'block'});
      }
    }else{
      $product.find('.gf_product-badge-anchor').css({'display': 'none'});
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663179').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663179-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663119').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663110').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663067').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663058').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663048').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663179-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663179-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663058-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1661940663236').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663249').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663249-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663249-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663249-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663262').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663262-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663262-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663262-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663280').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663280-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663280-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663280-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663296').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1661940663296-0').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
(function(jQuery) {
    var $module = jQuery('#m-1661940663296-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663296-3').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1661940663309').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1661940663322').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1661940663322');
      } catch(err) {}
    });
    
    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  // var $module = jQuery('#m-1661940663336').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  // var $module = jQuery('#m-1661940663338').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  // var $module = jQuery('#m-1661940663337').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
(function( jQuery ){
  // var $module = jQuery('#m-1661940663339').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    

	var tpj=jQuery;                  
    var revapi486;
    
	tpj(document).ready(function() {
        
		if(tpj("#rev_slider_one").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486 = tpj("#rev_slider_one").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,600],
                 visibilityLevels:[1200,1040,820,600],
                 gridwidth:[1200,1040,820,600],
                 gridheight:[750,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 
		if(tpj("#rev_slider_two").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_two");
        }else{
            revapi486 = tpj("#rev_slider_two").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[680,650,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 
		 
		if(tpj("#rev_slider_three").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_three");
        }else{
            revapi486 = tpj("#rev_slider_three").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[850,750,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 if(tpj("#rev_slider_four").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_four");
        }else{
            revapi486 = tpj("#rev_slider_four").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,600],
                 visibilityLevels:[1200,1040,820,600],
                 gridwidth:[1200,1040,820,600],
                 gridheight:[666,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 
		 if(tpj("#rev_slider_five").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_five");
        }else{
            revapi486 = tpj("#rev_slider_five").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[762,750,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 if(tpj("#rev_slider_six").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_six");
        }else{
            revapi486 = tpj("#rev_slider_six").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[626,650,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 if(tpj("#rev_slider_seven").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_seven");
        }else{
            revapi486 = tpj("#rev_slider_seven").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[762,750,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 if(tpj("#rev_slider_eight").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_eight");
        }else{
            revapi486 = tpj("#rev_slider_eight").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,480],
                 visibilityLevels:[1200,1040,820,480],
                 gridwidth:[1200,1040,820,480],
                 gridheight:[833,750,650,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 if(tpj("#rev_slider_nine").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_nine");
        }else{
            revapi486 = tpj("#rev_slider_nine").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:15,
                            v_offset:30
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,820,600],
                 visibilityLevels:[1200,1040,820,600],
                 gridwidth:[1200,1040,820,600],
                 gridheight:[891,600,500,400],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
     }); /*ready*/
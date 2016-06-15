var scrollEffects = {"revealFX1":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"2000ms","defaultDelay":"100ms","easing":"ease-in-out-back","viewportFactor":"0.30","preset":"custom","init":false},"revealFX2":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"2500ms","defaultDelay":"100ms","easing":"ease-in-out-back","viewportFactor":"0.30","preset":"custom","init":false},"revealFX3":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"3000ms","defaultDelay":"100ms","easing":"ease-in-out-back","viewportFactor":"0.30","preset":"custom","init":false},"revealFX4":{"effect":"zoom","parameters":{"start":"0.300","opacity":"0.10"},"over":"1000ms","defaultDelay":"200ms","easing":"ease-in-back","viewportFactor":"0.30","preset":"14","init":false},"revealFX5":{"effect":"zoom","parameters":{"start":"0.200","opacity":"0.10"},"over":"2000ms","defaultDelay":"100ms","easing":"ease-in-out-expo","viewportFactor":"0.30","preset":"custom","init":false},"revealFX6":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"2500ms","defaultDelay":"100ms","easing":"quick-in","viewportFactor":"0.30","preset":"custom","init":false},"revealFX8":{"effect":"zoom","parameters":{"start":0,"opacity":0},"over":"2000ms","defaultDelay":"100ms","easing":"super-fast","viewportFactor":"0.30","preset":"18","init":false},"revealFX9":{"effect":"zoom","parameters":{"start":"0.200","opacity":"0.10"},"over":"1000ms","defaultDelay":"100ms","easing":"ease-in-out-expo","viewportFactor":"0.30","preset":"16","init":false},"revealFX11":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"1000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX12":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"1500ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX13":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"2000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX14":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"3000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX15":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"3500ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX16":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"6000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX17":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"6500ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX18":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"5000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX19":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"7000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX20":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"7000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX21":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"7500ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false},"revealFX22":{"effect":"slide","parameters":{"from":"left","distance":"400px","opacity":0},"over":"8000ms","defaultDelay":"100ms","easing":"accelerate","viewportFactor":"0.30","preset":"custom","init":false}};



(function($) {

    $(document).ready(function(){

		$('.revealFX').each(function() { 
			for(var prop in scrollEffects){
				if($(this).hasClass(prop)){
					$(this).attr('data-scrollReveal' , prop);
				}
			}
		});

		setTimeout(function() { 
			if(!window.isMobileDevice && !window.isTabletDevice){
				window.extendScrollReveal.init();
			}
		}, 1);

    });


}(menus_jQuery));
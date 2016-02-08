var windowsLocation = "https://github.com/libreosteo/Libreosteo/releases/download/v0.4.2/Libreosteo-0.4.2-win32.zip";
var linuxLocation = "https://github.com/libreosteo/Libreosteo/archive/v0.4.2.tar.gz";
var macosLocation = "https://github.com/libreosteo/Libreosteo/releases/download/v0.4.2/Libreosteo.pkg.zip";

	$('#downloader').on("click", function() {
		var pgwBrowser = $.pgwBrowser();
		var modal = $("#download-modal");
		if (pgwBrowser.os.group == "Mac OS" ) {
			modal.find(".modal-body p").text("Nous travaillons actuellement à porter Libreosteo sur Mac OS X. Aidez-nous à valider la version en test, et contactez le développeur via Twitter, Facebook ou Github pour lui faire part de votre utilisation. Merci.");
			//modal.find('.modal-footer .btn-primary').hide();

			$("#btn-download").click(function() {
                                window.location = macosLocation ;
                        });

			$("#download-modal").modal('toggle');
		} else if (pgwBrowser.os.group == "Linux") {
			
			modal.find('.modal-body p').text("Le téléchargement pour Linux est disponible sous la forme de l'ensemble des sources. Suivez les instructions de README pour installer votre version sur votre machine.");
			//modal.find('.modal-footer .btn-primary').hide();
			
			$("#btn-download").click(function() {
				window.location = linuxLocation	;
			});

			$("#download-modal").modal('toggle');
			

		} else if (pgwBrowser.os.group == "Windows") {
			if (pgwBrowser.browser.group == "Explorer"){
				modal.find('.modal-body p').text("Internet Explorer n'est pas supporté, vous devez utiliser un navigateur comme Mozilla Firefox ou Google Chrome pour utiliser pleinement les fonctionnalités de Libreosteo");
				$("#btn-download").click(function() {
					window.location=windowsLocation;
				});

				$("#download-modal").modal("toggle");
			} else if (pgwBrowser.browser.group == "Spartan"){
				modal.find('.modal-body p').text("Microsoft Edge n'est pas supporté, vous devez utiliser un navigateur comme Mozilla Firefox ou Google Chrome pour utiliser pleinement les fonctionnalités de Libreosteo");
				$("#btn-download").click(function() {
					window.location=windowsLocation;
				});

				$("#download-modal").modal('toggle');
			} else {
				window.location=windowsLocation;
			}		
		}
	});

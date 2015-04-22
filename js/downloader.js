var windowsLocation = "https://github.com/garthylou/Libreosteo/releases/download/v0.3.0/setup.exe";
var linuxLocation = "https://github.com/garthylou/Libreosteo/archive/v0.3.0.tar.gz";

	$('#downloader').on("click", function() {
		var pgwBrowser = $.pgwBrowser();
		var modal = $("#download-modal");
		if (pgwBrowser.os.group == "Mac OS" ) {
			modal.find(".modal-body p").text("Nous travaillons actuellement à porter Libreosteo sur Mac OS X. Aidez-nous à valider la version en test, contactez le développeur via Twitter, Facebook ou Github.");
			modal.find('.modal-footer .btn-primary').hide();
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
			} else {
				window.location=windowsLocation;
			}		
		}
	});

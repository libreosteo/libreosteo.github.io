var version_number = "0.6.8"
var windowsAMD64Location = "https://github.com/libreosteo/Libreosteo/releases/download/" + version_number+ "/Libreosteo-"+ version_number+ "-win64.zip";
var windowsLocation = windowsAMD64Location;
var linuxLocation = "https://github.com/libreosteo/Libreosteo/archive/" + version_number + ".tar.gz";
var macosLocation = "https://github.com/libreosteo/Libreosteo/releases/download/" + version_number + "/Libreosteo.mpkg.zip";

var windowsLocationBeta = "https://github.com/libreosteo/Libreosteo/releases/download/0.4.9.2/Libreosteo-beta-v0.4.9.2-win32.zip";
var linuxLocationBeta = "https://github.com/libreosteo/Libreosteo/archive/0.4.9.2.tar.gz";
var macosLocationBeta = "https://github.com/libreosteo/Libreosteo/releases/download/0.4.9.2/Libreosteo.pkg.zip";


	$('#downloader').on("click", function() {
		var pgwBrowser = $.pgwBrowser();
		var modal = $("#download-modal");
		if (pgwBrowser.os.group == "Mac OS" ) {
                window.location = macosLocation ;
		} else if (pgwBrowser.os.group == "Linux") {

			modal.find('.modal-body p').html("Vous pouvez utiliser l'image Docker pour une installation sous linux : <pre>curl -Ls https://github.com/libreosteo/LibreOsteo/blob/master/Docker/deploy/sqlite/dist/auto_install?raw=true --output auto_install</pre>Puis taper :<pre>chmox +x auto_install && sudo ./auto_install</pre>");
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


	$('#downloader-beta').on("click", function() {
		var pgwBrowser = $.pgwBrowser();
		var modal = $("#download-modal");
		if (pgwBrowser.os.group == "Mac OS" ) {
			modal.find(".modal-body p").text("Ceci est la version Beta de la future version 0.5. Reportez tout problème pour corriger la version. Merci");
			//modal.find('.modal-footer .btn-primary').hide();

			$("#btn-download").click(function() {
                                window.location = macosLocationBeta ;
                        });

			$("#download-modal").modal('toggle');
		} else if (pgwBrowser.os.group == "Linux") {

			modal.find('.modal-body p').text("Le téléchargement pour Linux est disponible sous la forme de l'ensemble des sources. Suivez les instructions de README pour installer votre version sur votre machine.");
			//modal.find('.modal-footer .btn-primary').hide();

			$("#btn-download").click(function() {
				window.location = linuxLocationBeta	;
			});

			$("#download-modal").modal('toggle');


		} else if (pgwBrowser.os.group == "Windows") {
			if (pgwBrowser.browser.group == "Explorer"){
				modal.find('.modal-body p').text("Internet Explorer n'est pas supporté, vous devez utiliser un navigateur comme Mozilla Firefox ou Google Chrome pour utiliser pleinement les fonctionnalités de Libreosteo");
				$("#btn-download").click(function() {
					window.location=windowsLocationBeta;
				});

				$("#download-modal").modal("toggle");
			} else if (pgwBrowser.browser.group == "Spartan"){
				modal.find('.modal-body p').text("Microsoft Edge n'est pas supporté, vous devez utiliser un navigateur comme Mozilla Firefox ou Google Chrome pour utiliser pleinement les fonctionnalités de Libreosteo");
				$("#btn-download").click(function() {
					window.location=windowsLocationBeta;
				});

				$("#download-modal").modal('toggle');
			} else {
				window.location=windowsLocationBeta;
			}
		}
	});

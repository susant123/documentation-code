/**
 * TODOC
 * @class sandbox.prefill.PrefillSampleScript
 */
Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.embedElement.EmbedSampleScript',
	$constructor : function () {},
	$destructor : function () {},
	$prototype : {
		/**
		 * Refresh the section 1
		 */
		refresh : function () {
			this.$refresh({
				filterSection : "Section1"
			});
		},

		/**
		 * Add a marker on the map
		 */
		addMarkers : function () {
			var googleMapController = this.moduleCtrl.getEmbedController();
			googleMapController.addMarker({
				title : "Greenside",
				infoWindow : "<b>Greenside</b>",
				lat : 43.623495,
				lon : 7.071201
			});
		}
	}
});

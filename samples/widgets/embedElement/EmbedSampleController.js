/**
 * This is the module controller for the embed sample.
 */
Aria.classDefinition({
	$classpath : 'samples.widgets.embedElement.EmbedSampleController',
	$implements : ['samples.widgets.embedElement.IEmbedSampleController'],
	$extends : 'aria.templates.ModuleCtrl',
	$dependencies : ['samples.widgets.embedElement.GoogleMapController'],
	$constructor : function () {
		this.$ModuleCtrl.constructor.call(this);
		this._data = {
			text : "Textfield value",
			mapLoading : true
		};
	},

	$destructor : function () {
		this.embedController.$removeListeners({
			"MapLoaded" : this._afterMapLoad,
			scope : this
		});
		this.embedController.$dispose();
		this.$ModuleCtrl.$destructor.call(this);
	},

	$prototype : {
		$publicInterfaceName : 'samples.widgets.embedElement.IEmbedSampleController',

		/**
		 * Initilaize the embed controller
		 */
		init : function (initArgs, callback) {
			this.embedController = new samples.features.embed.GoogleMapController();
			this.embedController.$on({
				"MapLoaded" : this._afterMapLoad,
				scope : this
			})
			this.$callback(callback);
		},

		/**
		 * Update data after map is loaded
		 * @protected
		 */
		_afterMapLoad : function () {
			this.json.setValue(this._data, "mapLoading", false);
		},

		/**
		 * Public getter for the map controller
		 */
		getEmbedController : function () {
			return this.embedController;
		}
	}
});
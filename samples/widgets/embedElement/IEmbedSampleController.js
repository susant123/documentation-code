/**
 * Interface for the embed sample controller.
 * @class samples.features.embed.IEmbedSampleController
 */
Aria.interfaceDefinition({
	$classpath : 'samples.widgets.embedElement.IEmbedSampleController',
	$extends : 'aria.templates.IModuleCtrl',
	$interface : {
		embedController : {
			$type : "Object"
		},
		getEmbedController : {
			$type : "Function"
		}
	}
});

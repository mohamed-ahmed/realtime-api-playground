var textArea1;
var globalString;
var globalModel;
var typed = true;

/**
     * This function is called the first time that the Realtime model is created
     * for a file. This function should be used to initialize any values of the
     * model. In this case, we just create the single string model that will be
     * used to control our text box. The string has a starting value of 'Hello
     * Realtime World!', and is named 'text'.
     * @param model {gapi.drive.realtime.Model} the Realtime root model object.
     */
     function initializeModel(model) {
     	var string = model.createString("hi");
     	console.log("hello ");
     	console.log(string);
     	globalString = string;
     	model.getRoot().set('text', string);
     	console.log(globalModel);

     }

    /**
     * This function is called when the Realtime file has been loaded. It should
     * be used to initialize any user interface components and event handlers
     * depending on the Realtime model. In this case, create a text control binder
     * and bind it to our string model that we created in initializeModel.
     * @param doc {gapi.drive.realtime.Document} the Realtime document.
     */
     function onFileLoaded(doc) {
     	var string = doc.getModel().getRoot().get('text');
     	globalModel = doc.getModel();
      editor.setValue(doc.getModel().getRoot().get('text'));
      editor.clearSelection();
     	var valueChanged = function valueChanged(e){
     		console.log(e);
     		console.log("doc.getModel().getRoot().get('text'): ");
     		console.log(doc.getModel().getRoot().get('text'));
     		if(editor.getValue() !== doc.getModel().getRoot().get('text')){
     				typed = false;
     				editor.setValue(doc.getModel().getRoot().get('text'));
     				editor.clearSelection();
     				typed = true;

     		}
     	}
     	globalModel.getRoot().addEventListener(gapi.drive.realtime.EventType.OBJECT_CHANGED, valueChanged);


  }

    /**
     * Options for the Realtime loader.
     */
     var realtimeOptions = {
      /**
       * Client ID from the console.
       */
       clientId: '154707636633-f72171c703qtaemqkss30ctgvfq1uf4p.apps.googleusercontent.com',

      /**
       * The ID of the button to click to authorize. Must be a DOM element ID.
       */
       authButtonElementId: 'authorizeButton',

      /**
       * Function to be called when a Realtime model is first created.
       */
       initializeModel: initializeModel,

      /**
       * Autocreate files right after auth automatically.
       */
       autoCreate: true,

      /**
       * The name of newly created Drive files.
       */
       defaultTitle: "New Realtime Quickstart File",

      /**
       * The MIME type of newly created Drive Files. By default the application
       * specific MIME type will be used:
       *     application/vnd.google-apps.drive-sdk.
       */
      newFileMimeType: null, // Using default.

      /**
       * Function to be called every time a Realtime file is loaded.
       */
       onFileLoaded: onFileLoaded,

      /**
       * Function to be called to inityalize custom Collaborative Objects types.
       */
      registerTypes: null, // No action.

      /**
       * Function to be called after authorization and before loading files.
       */
      afterAuth: null, // No action.

      fileIds : '0B4UA5fSDA_1mcWFHSTN3SThSek0'
  }

    /**
     * Start the Realtime loader with the options.
     */
     function startRealtime() {
     	var realtimeLoader = new rtclient.RealtimeLoader(realtimeOptions);
     	realtimeLoader.start();
     }
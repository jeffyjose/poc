//
//  Action.js
//  AddExclusion
//
//  Created by Doug Swanson on 10/20/17.
//  Copyright © 2017 Malwarebytes. All rights reserved.
//

var Action = function() {};

Action.prototype = {
    
    run: function(arguments) {
        // Here, you can run code that modifies the document and/or prepares
        // things to pass to your action's native code.
        
        arguments.completionFunction( { "url": window.location.href, "hostname": window.location.hostname } )
    },
    
    finalize: function(arguments) {
        // This method is run after the native code completes.
        
    }
    
};
    
var ExtensionPreprocessingJS = new Action

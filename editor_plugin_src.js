/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
  tinymce.create('tinymce.plugins.ImageUploadPlugin', {
    init : function(ed, url) {
      // Register commands
      ed.addCommand('mceImageUpload', function() {
        ed.windowManager.open({
          file : url + '/upload.php',
          inline : 0
        }, {
          plugin_url : url
        });
      });
      // Register buttons
      ed.addButton('imageupload', {
        title : 'Upload Image',
        image : url + '/img/upload-image.png',
        cmd : 'mceImageUpload'
      });
    },
    getInfo : function() {
      return {
        longname : 'Simple Image Upload',
        author : 'enoyhs',
        version : '0.0.1'
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('imageupload', tinymce.plugins.ImageUploadPlugin);
})();

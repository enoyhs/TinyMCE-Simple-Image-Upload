TinyMCE plugin for simple image upload

ABOUT
Simple image upload plugin (nothing fancy at all).

REQUIREMENTS
TinyMCE
php

INSTALL
To get it working change $base_dir in upload.php and $image (if needed).

Add this plugin when creating tinyMCE instances, for example:

<script>
$('.tinymce').tinymce({
  script_url : '../jscripts/tiny_mce/tiny_mce.js',
  
  plugins: 'imageupload',
  theme : "advanced",
  theme_advanced_buttons1 : "imageupload"
});
</script>
function updateScheme(){var e=$("#scheme_color").val();less.modifyVars({"@seed-color":e})}$(document).ready(function(){$("#demo_form").submit(function(){return!1});$("#scheme_color").minicolors({animationSpeed:0,animationEasing:"swing",change:updateScheme,changeDelay:40,control:"hue",defaultValue:"#d94e96",hide:null,hideSpeed:100,inline:!1,letterCase:"lowercase",opacity:!1,position:"bottom",show:null,showSpeed:100,swatchPosition:"left",textfield:!0,theme:"bootstrap"})});less={env:"development",async:!1};
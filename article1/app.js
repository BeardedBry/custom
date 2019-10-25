setTimeout(() => {
    var form = document.querySelector('form ul');
    makeInput(1000, form);

}, 100);

function makeInput(num, form){
    var tg = textGrab(num, ipsum);
    
    for(let i = 0; i < num; i++){

        var liNode = document.createElement('li');
        var labelNode = document.createElement('label');
        var checkboxNode = document.createElement('input');
        checkboxNode.type = 'checkbox';
        var txtContent = tg();
        labelNode.textContent = txtContent;
        labelNode.appendChild(checkboxNode);
        liNode.appendChild(labelNode);
        form.appendChild(liNode);
    }
}


function textGrab(num, text){
    var position = num;
    var num = num;
    var text = text.trim();
    
    return function t() {
        
        if( (num + 20) >= text.length){
            num = 0;
        }
        start = num;
        var str = text.slice(start,start+20);
        
        str = str.trim() + '.';
        var cap = str.charAt(0).toUpperCase();
        str = cap + str.slice(1);
        
        num += 20;
        return str;
    }
}




var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Massa enim nec dui nunc mattis enim ut tellus elementum. Risus nullam eget felis eget nunc lobortis mattis aliquam. Libero enim sed faucibus turpis in. Mauris augue neque gravida in fermentum et. Lectus nulla at volutpat diam ut venenatis tellus in metus. Velit sed ullamcorper morbi tincidunt ornare massa eget. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Consequat ac felis donec et odio pellentesque. Felis bibendum ut tristique et egestas. Sem nulla pharetra diam sit amet Ullamcorper a lacus vestibulum sed arcu non odio. Sit amet aliquam id diam maecenas. Ultrices sagittis orci a scelerisque purus. Suspendisse potenti nullam ac tortor. Quis lectus nulla at volutpat diam ut. Pellentesque habitant morbi tristique senectus et netus et malesuada. Vulputate ut pharetra sit amet aliquam. Mattis vulputate enim nulla aliquet porttitor lacus. Arcu risus quis varius quam quisque id diam vel. Mi proin sed libero enim sed faucibus turpis in. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque elit eget gravida cum sociis natoque penatibus et. Sit amet consectetur adipiscing elit ut aliquam. Vitae et leo duis ut diam quam nulla porttitor massa Id ornare arcu odio ut sem nulla pharetra. Quam elementum pulvinar etiam non quam. Elementum pulvinar etiam non quam. Sapien eget mi proin sed libero enim sed. Justo nec ultrices dui sapien eget. Egestas purus viverra accumsan in. Risus quis varius quam quisque id diam vel. Pellentesque habitant morbi tristique senectus. Lobortis feugiat vivamus at augue. Lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Arcu non sodales neque sodales ut etiam. Enim neque volutpat ac tincidunt vitae. Massa id neque aliquam vestibulum. Sit amet massa vitae tortor condimentum. Mauris ultrices eros in cursus turpis massa tincidunt. Donec pretium vulputate sapien nec sagittis aliquam malesuada. In ante metus dictum at tempor commodo ullamcorper a. Consectetur adipiscing elit ut aliquam purus. Amet mattis vulputate enim nulla aliquet porttitor lacus. Eu mi bibendum neque egestas congue quisque egestas. Consectetur adipiscing elit ut aliquam. At risus viverra adipiscing at in tellus integer. Aliquam purus sit amet luctus. Aliquam ut porttitor leo a diam sollicitudin tempor. Ut etiam sit amet nisl purus. Non blandit massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu. Rutrum quisque non tellus orci ac auctor augue mauris augue. Pharetra diam sit amet nisl. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Auctor eu augue ut lectus. Id neque aliquam vestibulum morbi blandit cursus risus at. At urna condimentum mattis pellentesque id nibh. Malesuada bibendum arcu vitae elementum curabitur vitae. Velit aliquet sagittis id consectetur purus ut faucibus. Quis blandit turpis cursus in hac habitasse platea dictumst. Purus in massa tempor nec feugiat nisl. Ut tortor pretium viverra suspendisse potenti. Quisque id diam vel quam elementum pulvinar etiam. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Risus sed vulputate odio ut enim blandit.";
const text=[
    `tetur adipiscing elit. Ut consectetur tellus ac molestie ultrices. In mollis, purus ac porta lacinia, nibh justo sollicitudin odio, interdum dignissim ipsum dui quis dui. Duis a ultricies enim. Nullam placerat viverra bibendum. Donec porttitor elit venenatis ligula dictum vestibulum. Morbi vitae risus sed justo semper venenatis sit amet nec sapien. Donec at lacus vel lacus cursus efficitur. Vestibulum sapien neque, euismod a auctor in, consectetur id mauris. Donec convallis ullamcorper ipsum ut finibus. Maecenas at tincidunt turpis. Sed sit amet nulla eget libero congue dapibus. Quisque vulputate accumsan feugiat. Curabitur dui ante, dapibus id mauris et, iaculis semper elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ac orci tempor, consequat purus in, mattis turpis. Phasellus venenatis sagittis dolor sed interdum.`,

        `Pellentesque nisi nisl, efficitur sed fermentum id, lacinia eu purus. Praesent sit amet volutpat quam. Praesent quis lectus turpis. Nulla ultricies elementum tempus. Suspendisse potenti. Praesent auctor cursus posuere. Mauris convallis rhoncus est, quis dignissim orci scelerisque in. Vivamus nisl justo, tincidunt vitae facilisis in, suscipit id justo. Quisque ut mi hendrerit, iaculis nulla id, luctus tortor.`,

    `Etiam aliquam pulvinar felis, sed imperdiet nulla fringilla vel. Vivamus dui orci, cursus id nibh in, porttitor tincidunt ante. Curabitur tempus luctus est, quis feugiat massa viverra eget. In hac habitasse platea dictumst. Suspendisse tristique leo ac semper maximus. Morbi id ex pulvinar, feugiat ipsum ut, lacinia nisl. Nullam lacinia tortor turpis, in pulvinar justo auctor vel. Donec pharetra purus ac mollis imperdiet. Pellentesque in tellus justo. Nunc felis velit, fringilla ac dui sed, iaculis ultrices orci. Maecenas sollicitudin urna id ex imperdiet, ac egestas est convallis. Ut tempus tellus ac leo sodales rhoncus. Suspendisse potenti. Sed a mattis quam. Donec at pharetra est.`,

   ` Mauris ultricies sodales magna eget dapibus. Ut semper ligula at tellus posuere, sed tincidunt felis scelerisque. Sed malesuada nunc neque, vel iaculis elit rutrum eget. Nunc non magna euismod dolor sollicitudin semper nec a eros. Proin efficitur leo quis facilisis venenatis. Fusce egestas urna sed lacus sagittis, eget ultrices lorem pulvinar. Donec interdum mollis ligula quis laoreet. Aliquam feugiat nisl nec purus elementum, a suscipit augue aliquet. Nulla eget nunc ligula. Fusce cursus magna dui, non pharetra justo iaculis sed. Quisque ac velit at est suscipit molestie. Curabitur purus risus, tincidunt et mattis nec, dictum sit amet odio. Nulla sed eros sed est mollis scelerisque ut non risus. Ut accumsan finibus arcu in bibendum. Integer quis posuere leo, eget ornare neque. Aenean nec justo ac elit semper vestibulum et eu erat.`,

    `Morbi vel turpis vehicula, venenatis risus vel, vestibulum nulla. Cras nibh turpis, hendrerit ut porta vitae, efficitur nec arcu. Pellentesque a mauris ac eros congue scelerisque quis non quam. Sed id tellus neque. Nullam in sapien in nulla varius efficitur. Maecenas hendrerit efficitur est ut lacinia. Praesent porta ipsum non dui fermentum varius. Cras non aliquet mauris, non aliquam quam. Vivamus a neque sit amet turpis finibus ornare sed sit amet mauris. Sed vitae dictum diam, et dapibus velit. Quisque volutpat leo vel purus pulvinar commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean maximus eleifend feugiat. Quisque dapibus sed diam vitae dapibus. Maecenas porttitor sapien quis felis rhoncus varius.`,

   ` Praesent eu bibendum ipsum. Etiam non urna in nibh facilisis euismod vitae sed neque. Suspendisse sit amet laoreet enim, id faucibus odio. Suspendisse vestibulum tellus et libero tincidunt faucibus. Mauris tincidunt, lorem et luctus elementum, risus nisi posuere neque, vel tincidunt mauris orci aliquam ante. Proin vestibulum nisi enim, non cursus nisl hendrerit rutrum. Nam sodales ultricies purus eu congue. Donec dictum purus eu dictum bibendum.`,

   ` Nullam ipsum orci, cursus eu neque quis, tristique mattis mi. Nullam et ex est. Donec interdum accumsan nulla quis bibendum. Phasellus eget risus consequat, vulputate leo a, condimentum neque. Donec fermentum eleifend turpis, non dapibus tortor. Curabitur sodales dignissim tincidunt. Nullam in sem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean auctor tempus tortor sit amet pellentesque. Maecenas nisl metus, faucibus sit amet tempus sit amet, gravida at magna.`,

    `Cras at est ac turpis congue fermentum. Fusce vitae urna placerat, mattis sapien in, ultricies leo. Sed mattis interdum eros et malesuada. Quisque blandit arcu sed nunc vehicula viverra. Maecenas sagittis imperdiet vestibulum. Aenean a blandit metus, sed ultricies diam. Donec molestie tempus sodales. Phasellus at lectus non dolor ultricies posuere a non ante. Duis tempus ornare magna, in convallis tortor pretium quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at tristique nulla. Praesent placerat urna eget fermentum laoreet.`,

    `Aenean suscipit lorem egestas tortor mattis sagittis. Nulla cursus at quam non convallis. Cras ac nulla at lacus mattis bibendum a quis nulla. Mauris sollicitudin venenatis arcu, eget condimentum tellus luctus malesuada. Sed a metus orci. Aliquam eget iaculis erat, sed lobortis purus. Vivamus lobortis porta velit ut porta. Integer lacus mi, viverra quis hendrerit non, faucibus ac nunc. Nam congue, ligula quis pulvinar ullamcorper, mauris leo efficitur nulla, volutpat suscipit elit odio id erat. Vivamus in augue a felis imperdiet egestas. Etiam pellentesque volutpat nisl, ac dictum dolor porta vitae. Duis feugiat magna bibendum, vehicula ipsum quis, rutrum dui. Vestibulum vitae finibus metus. Proin in volutpat turpis, vestibulum elementum est.`,

];
const btn= document.getElementById('submitBtn');
const myText=document.querySelector('.textResult')
const num=document.getElementById('Para');
btn.addEventListener('click',generate);
function generate(e) {
    e.preventDefault();
    const myNum= parseInt(num.value);
    if (isNaN(myNum)|| myNum<0 || myNum>9){
        alert('please put in a number within the range 1-9 ')
    }else {
        let temp=text.slice(0,myNum);

        temp=temp.map(function (item) {
            return `<p>${item}</p>`
        }).join('')
        myText.innerHTML=temp;
    }

}
function playVideo(a,b){
    console.log(this);
}

playVideo.call({name:"Tomas"},1,2);
playVideo.call({name:"Tomas"},[1,2]);
const fn = playVideo.bind({name:"Tomas"});
fn();

playVideo();
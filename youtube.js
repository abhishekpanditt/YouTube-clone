// function onYouTubeIframeAPIReady() {
//     funcChain();
// }
// function funcChain(){
//     queueMicrotask(()=>console.log("done"));
//     playThisVid;
// }

const player = document.getElementById("player");
console.log(player);
const currentUrl = window.location.href;
console.log(currentUrl);

let arr = currentUrl.split('@');
const vid_id = ""+arr[1];
console.log(vid_id);
// `<iframe width="560" height="315" src="https://www.youtube.com/embed/mqfTcT56DhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`


function playThisVid(){
    // player.innerHTML = `
    // <iframe src= title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    // `
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${String(vid_id)}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.title = "YouTube video player"
    iframe.allowFullscreen = "true";
    player.appendChild(iframe)

}

// queueMicrotask();
playThisVid();

const video_title = document.getElementById("title-stat");
const vid_stat = document.getElementById("desc-channel");

async function fixVideo() {
    // video_title.innerHTML = 
    const apiKey = `AIzaSyDhtF3DqyKtTcqMDw6UO-wkiti5Fi8PhQY`;
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${vid_id}&key=${apiKey}`);
    let data = await response.json();
    let vid  = data.items[0];
    console.log(data, vid);

    // displayInfo(vid);
    // vid_stat.innerHTML = 
}
fixVideo();
function displayInfo(vid){
    video_title.innerHTML=`
    <div class="title">
                ${vid.snippet.title}
            </div>
            <div class="stat">
                <div class="left-stat">
                    <div>${vid.statistics.viewCount}</div>
                    <div>${new Date(vid.snippet.publishedAt)} |</div>
                </div>
                <div class="stat-item">
                    <div class="img">
                        <img src="Youtube/Button-Btn.png" alt="">
                    </div>
                    <div> ${vid.statistics.likeCount}</div>
                </div>

                <div class="stat-item">                        
                    <div class="img">
                            <img src="Youtube/Button-Btn-1.png" alt="">
                    </div>
                    <div>Na</div>
                </div>
                <div class="stat-item">
                    <div class="img">
                        <img src="Youtube/Button-Btn-2.png" alt="">
                    </div>
                    <div>Save</div>
                </div>
                <div class="stat-item">
                    <div class="img">
                        <img src="Youtube/Button-Btn-3.png" alt="">
                    </div>
                    <div>Share</div>
                </div>
                <div class="stat-item">
                    <div class="img">
                        <img src="Youtube/Button-Btn-4.png" alt="">
                    </div>
                </div>
            </div>
            <div id="desc-channel" class="desc-channel">
                <div class="desc">
                    ${vid.snippet.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero obcaecati quo sint dolore officia impedit blanditiis facere, accusantium eum possimus vel pariatur eveniet ab incidunt quos deleniti 
                </div>
            </div>`;
}
// fetchSuggested();
const userOption = localStorage.userOption;

if(!userOption) {
    alert(`Não é possível visualizar essa página antes de escolher um tema.
Por favor, clique no botão "for you" e escolha uma das opções.`);

    window.location.href = "index.html";
}

const baseUrl = "https://www.youtube.com/embed/";

const videos = {
    futebol: ["8FO6RkE3ps0", "hQbtlqCLCSU", "0Ipcs_J40_8"],
    musica: ["QDX-1GuF2Gs", "KU9nvedIGzc", "QuWXG1ZvdEM"],
    games: ["ciNnK8buF74", "p4CoV2qL71M", "zzP5XV5Ydb0"],
    programacao: ["S9uPNppGsGo", "x4FdZd2-_uU", "y4ltLH9iK8E"]
}

const arrayVideos = videos[userOption];
const iframeList = document.getElementsByTagName("iframe");

for(let index = 0; index <= 2; index++) {
    const url = `${baseUrl}${arrayVideos[index]}`
    iframeList[index].setAttribute("src", url);
}

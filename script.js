document.addEventListener('DOMContentLoaded', function() {
    const userName = document.querySelector('#name');
    const userUsername = document.querySelector('#username');
    const userAvatar = document.querySelector('#avatar');
    const userRepos = document.querySelector('#repos');
    const userFollowers = document.querySelector('#followers');
    const userFollowing = document.querySelector('#following');
    const userGithub = document.querySelector('#github');

    async function fetchGithubUser() {
        try {
            const res = await fetch('https://api.github.com/users/leobairrao');
            if (!res.ok) {
                throw new Error(`Erro na requisição: ${res.status}`);
            }
            const json = await res.json();
            
            userName.innerText = json.name;
            userUsername.innerText = json.login;
            userAvatar.src = json.avatar_url;
            userRepos.innerText = json.public_repos;
            userFollowers.innerText = json.followers;
            userFollowing.innerText = json.following;
            userGithub.href = json.html_url;
        } catch (error) {
            console.error('Erro ao buscar dados do GitHub:', error);
        }
    }

    fetchGithubUser();
});

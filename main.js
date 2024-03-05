document.addEventListener('DOMContentLoaded', function() {
    const profileName = document.getElementById('name');
    const profileUsername = document.getElementById('username');
    const profileAvatar = document.getElementById('avatar');
    const profileRepos = document.getElementById('repos');
    const profileFollowers = document.getElementById('followers');
    const profileFollowing = document.getElementById('following');
    const profileLink = document.getElementById('link');

    fetch('https://api.github.com/users/playstarpedro')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            profileName.innerText = json.name;
            profileUsername.innerHTML = json.login;
            profileAvatar.src = json.avatar_url;
            profileFollowing.innerText = json.following;
            profileFollowers.innerText = json.followers;
            profileRepos.innerText = json.public_repos;
            profileLink.href = json.html_url;
        })
})
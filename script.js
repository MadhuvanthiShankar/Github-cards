function onName(event) {
  event.preventDefault();
  console.log("hi");
  let user = event.target[0].value;
  console.log(user);
  let image = document.querySelector("#pro-img-id");
  let name = document.querySelector("#info-name-id");
  let username = document.querySelector("#info-username-id");
  let bio = document.querySelector("#bio-id");
  let followersNum = document.querySelector("#followers-num-id");
  let followingNum = document.querySelector("#following-num-id");
  let repoNum = document.querySelector("#repo-num-id");

  const url = `https://api.github.com/users/${user}`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((xyz) => {
      console.log(xyz);
      image.src = xyz.avatar_url;
      name.innerHTML = xyz.name;
      username.innerHTML = "@" + xyz.login;
      bio.innerHTML = xyz.bio;
      followersNum.innerHTML = xyz.followers;
      followingNum.innerHTML = xyz.following;
      repoNum.innerHTML = xyz.public_repos;
    });
}
document.querySelector("form").addEventListener("submit", onName);
// console.log("hi");

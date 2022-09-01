const axios = require("axios")

const getUl = ({ username, page, perPage }) => `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`;

async function getRepos({
    username, page, perPage
}) {
    try {
        const repos = await axios.get(getUl({ username, page, perPage }))

        return repos.data.map(({ name, html_url, description }) => {
            return {
                name, url: html_url, description
            }
        });
    } catch (e) {
        return []
    }

}

getRepos({ username: 'veeraui', page: 1, perPage: 30 }).then((repositories) => console.log(repositories));

module.exports = {getRepos}
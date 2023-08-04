const query = `
{
  user(login: "carloskelly13") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository { name, description, url }
      }
    }
  }
}
`

type Response = {
  data: {
    user: {
      pinnedItems: {
        nodes: {
          name: string
          description: string
          url: string
        }[]
      }
    }
  }
}

export const getGitHubRepos = async () => {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${import.meta.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
    return (<Response>await response.json()).data.user.pinnedItems.nodes
  } catch (err) {
    return []
  }
}

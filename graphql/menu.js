import {gql} from "graphql-tag";

const menuQuery = (name) => {
    const queryArguments = `id: "${name}", idType: NAME`;

    return gql`
        query MyQuery {
            menu(${queryArguments}) {
                name
                id
                menuItems(where: {parentId: "null"})  {
                    edges {
                        node {
                            label
                            path
                            url
                            childItems {
                                edges {
                                    node {
                                        label
                                        path
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `
}

export default menuQuery;